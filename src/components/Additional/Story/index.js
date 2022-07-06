import React, { useEffect, useState } from "react";
import { publicLinks } from "../../../App";
import Stories from "./stories";
import Zuck from "zuck.js";
import agent from "../../../api/agent";

function Story() {
  const [story, setStory] = useState(false);

  useEffect(() => {
    const storyFunction = async () => {
      const responseApi = await agent.ProductRelated.getStories();

      const mockArray = responseApi.map((item) => {
        return Zuck.buildTimelineItem(
          item.title,
          "https://ferrumcapital.s3.eu-north-1.amazonaws.com" + item.image,
          false,
          false,
          1575221470504,
          [
            [
              "ramon-1",
              "photo",
              3,
              "https://ferrumcapital.s3.eu-north-1.amazonaws.com" + item.image,
              "https://ferrumcapital.s3.eu-north-1.amazonaws.com" + item.image,
              "",
              false,
              false,
              1575221470504, 
            ],
          ]
        );
      });

      setStory(mockArray);
    };

    storyFunction();
  }, []);

  return (
    <div className="dv-wrapper">
      <div className="story">
        <div className="w-layout-grid story-grid">
          {story && <Stories stories={story} />}
        </div>
      </div>
    </div>
  );
}

export default Story;
