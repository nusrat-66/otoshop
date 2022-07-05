import React, { Component } from 'react';
import agent from '../../../api/agent'
import Zuck from 'zuck.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.storiesElement = null;
    this.storiesApi = null;
    this.state = {
      stories: [],
    };
  }

  componentDidMount() {
    let stories = new Zuck(this.storiesElement, {
      skin: 'snapgram', // container class
      avatars: true, // shows user photo instead of last story item preview
      list: false, // displays a timeline instead of carousel
      openEffect: true, // enables effect when opening story - may decrease performance
      cubeEffect: false, // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: false, // enables fullscreen on mobile browsers
      backButton: true, // adds a back button to close the story viewer
      backNative: false, // uses window history to enable back button on browsers/android
      previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
      localStorage: true, // set true to save "seen" position. Element must have a id to save properly.
      reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
      callbacks: {
        onDataUpdate: function(currentState, callback) {
          this.setState(
            state => {
              state.stories = currentState;
               return state;
            },
            () => {
              callback();
            },
          );
        }.bind(this),
      },
      stories: this.state.stories,
    });


    const storyFunction = async () => {
      const responseApi = await agent.ProductRelated.getStories() 

      const mockArray = responseApi.map((item) => {
        return  Zuck.buildTimelineItem(
          item.title,
          'https://ferrumcapital.s3.eu-north-1.amazonaws.com' + item.image,
          false,
          false,
          1575221470504,
          [
            [
              'ramon-1',
              'photo',
              3,
              'https://ferrumcapital.s3.eu-north-1.amazonaws.com' + item.image,
              'https://ferrumcapital.s3.eu-north-1.amazonaws.com' + item.image,
              '',
              false,
              false,
              1575221470504,
            ],
            ],
          )
      })

     this.setState({
      stories: mockArray
     })

    }

    storyFunction()

  }

  render() {
    const timelineItems = [];

    this.state.stories.map((story, storyId) => {
      const storyItems = [];

      story.items.map(storyItem => { 
        storyItems.push(
           <li
            key={storyItem.id}
            data-id={storyItem.id}
            data-time={storyItem.time}
            className={storyItem.seen ? 'seen' : ''}
          >
            <a
               data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              dataLinkText={storyItem.linkText}
            >
              <img src={storyItem.preview} />
            </a>
          </li>
          
          ,
        );
      });

      let arrayFunc = story.seen ? 'push' : 'unshift';
      timelineItems[arrayFunc](
        <div
          className={story.seen ? 'story seen' : 'story'}
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
        >
          <a className="item-link">
            <span className="item-preview">
              <img src={story.photo} />
            </span>
            <span className="info" itemProp="author" itemScope="" itemType="http://schema.org/Person">
              <strong className="name" itemProp="name">
                {story.name}
              </strong>
              <span className="time">{story.lastUpdated}</span>
            </span>
          </a>

          <ul className="items">{storyItems}</ul>
        </div>,
      );
    });

    return (
      <div>
        <div ref={node => (this.storiesElement = node)} id="stories-react" className="storiesWrapper">
          {timelineItems}
        </div>
      </div>
    );
  }
}