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
            background: 'white',
            height: '100%',
            width: '100%',
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
                    <label style={{ marginLeft: '120px' }}>
                        <img style={{ width: "50%" }} src="https://img.icons8.com/plasticine/100/undefined/folder-invoices.png" />
                    </label>
                </div>
                <div className='title'>
                    <h2 onClick={toggleModal}>{props.title}</h2>
                    {/* <a href='#popup' className='arrow' onClick={toggleModal}>
                        <a target="_blank" href="https://icons8.com/icon/80625/arrow">Arrow icon by Icons8</a>
                    </a> */}
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
                <div className="d-flex justify-content-between flex-row">
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{props.title} </h2>
                    <button className="btn btn-danger" onClick={closeModal} style={{ marginLeft: '140px' }}>X</button>

                </div>



                <div className="d-flex justify-content-center align-items-center" style={{ width: '100%' }}>
                    <div className="container" style={{ width: '50%' }}>
                        <>
                            <div className='' style={{ width: '100%' }}>
                                {/* <img src={props.image} className="img-fluid" width='200px' alt='' onClick={toggleModal} /> */}
                                <img src={props.image1} className="img-fluid mt-5 border border-dark rounded" width='400px' alt='' onClick={toggleModal} />
                                <img src={props.image2} className="img-fluid mt-5 border border-dark rounded" width='400px' alt='' onClick={toggleModal} />
                                <img src={props.image3} className="img-fluid mt-5 border border-dark rounded" width='400px' alt='' onClick={toggleModal} />
                            </div>

                        </>
                    </div>

                    <div style={{ width: "50%" }} >
                        <div >
                            <div>
                                <small className="mb-5">{props.description}</small>

                                <ul className="mt-5">
                                    <li><img src="https://img.icons8.com/material-rounded/24/red/arrow.png" />{props.dis}</li>
                                    <li><img src="https://img.icons8.com/material-rounded/24/undefined/arrow.png" />{props.dis1}</li>
                                    <li><img src="https://img.icons8.com/material-rounded/24/undefined/arrow.png" />{props.dis2}</li>
                                </ul>
                                <p> <span style={{ color: 'orangered' }}>Technology Used</span> : HTML, CSS, Bootstrap, React.js, Node.js, Express.js, Mongodb, Firebase</p>
                            </div>

                            <div className="text-center" style={{ marginTop: '4rem' }}>
                                <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/undefined/external-live-radio-vitaliy-gorbachev-fill-vitaly-gorbachev.png" />
                                <a href={props.link} style={{ color: '#0089ff', marginLeft: '5px' }}>Visit this</a>

                            </div>

                        </div>






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
