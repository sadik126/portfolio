import React, { useState } from "react"
import Modal from 'react-modal';

const Card = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

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
        <>
            <div className='box btn_shadow '>
                <div className='img'>
                    <img src={props.image} alt='' onClick={toggleModal} />
                </div>
                <div className='category d_flex'>
                    <span onClick={toggleModal}>{props.category}</span>
                    <label>
                        <i className='far fa-heart'></i> {props.totalLike}
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    <a href='#popup' className='arrow' onClick={toggleModal}>
                        <i class='fas fa-arrow-right'></i>
                    </a>
                </div>
                <button onClick={openModal} className='button'>Show Details</button>
            </div>

            {/* Popup box */}
            {/* {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className='overlay'></div>
                    <div className='modal-content d_flex'>
                        <div className='modal-img left'>
                            <img src={props.image} alt='' />
                        </div>
                        <div className='modal-text right'>
                            <span>Featured - Design</span>
                            <h1>{props.title}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                            <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                            <div className='button f_flex mtop'>
                                <button className='btn_shadow'>
                                    LIKE THIS <i class='far fa-thumbs-up'></i>
                                </button>
                                <button className='btn_shadow'>
                                    VIEW PROJECT<i class='fas fa-chevron-right'></i>
                                </button>
                            </div>
                            <button className='close-modal btn_shadow' onClick={toggleModal}>
                                <i class='fas fa-times'></i>
                            </button>
                        </div>
                    </div>
                </div>
            )} */}



            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.title} <button className="btn btn-danger" onClick={closeModal} style={{ marginLeft: '140px' }}>X</button></h2>


                <div className="d-flex justify-content-center">
                    <div style={{ width: "50%" }}>
                        <img src={props.image} className="img-fluid" width='100px' alt='' onClick={toggleModal} />
                    </div>
                    <div style={{ width: "50%" }}>

                        <ul>
                            <li><img src="https://img.icons8.com/material-rounded/24/undefined/arrow.png" />{props.dis}</li>
                            <li><img src="https://img.icons8.com/material-rounded/24/undefined/arrow.png" />{props.dis1}</li>
                        </ul>

                    </div>





                </div>

                {/* <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form> */}
            </Modal>

        </>
    )
}

export default Card
