import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { WhiteHeadPhone, EsacapeForModal, HeadPhone } from "../../../assets/images/svg/svg";
 



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"500px",
    height:"335px",
    borderRadius:"10px"
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function App() {
    const handleSubmit = (value)=> {
        console.log(value);
    }
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='credit-modal'>
       <button onClick={openModal} className="detailed__button">
                 <HeadPhone />
                 <span className="detailed__button_text">Əlaqə</span>
              </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <div className='modal__header'>
              <div className='modal__logo'>
                <WhiteHeadPhone/> <p className='modal__headerText'>SİZƏ ZƏNG EDƏK</p>
              </div>
              <button className='modal__escapeButton' onClick={closeModal}><EsacapeForModal/></button>
           </div>



       <form className='modal__form' action="">
                <div className='modalInput'>
                    <span className='modalInput__naming'>Ad, Soyad</span>
                <input className='modalInput__input' type="text" />
                </div>
               
                <div className='modalInput'>
                    <span className='modalInput__naming'>Telefon nömrəsi</span>
                    <span className='modalInput__pre'>+994</span>
                <input  className='modalInput__input modalInput__input_phone' type="number" />
                </div>
                  <button className='modal__button'>
                Göndər
                </button>
            </form>
       </Modal>
    </div>
  );
}


export default App