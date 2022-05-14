import React, {useState} from 'react';
import EditProduct from '../modals/EditProduct'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';


const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [detailPopup, setDetailPopup] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = () => {
        updateListArray()
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const toggleDetail = () => {
        setDetailPopup(!detailPopup);
    }

    return (
        <div>
            <div class = "card-wrapper mr-5"  >
                <div class = "product-holder">
                    <span className="name-product">{taskObj.Brand}</span>
                    <img alt="" className="image-product" src={taskObj.Image} />
                    <p className = "text-product">{taskObj.Price}</p>

                    <div style={{"position": "absolute", "right" : "20px", "bottom" : "16px"}}>
                        <i class='bx bxs-edit' onClick = {() => setModal(true)}></i>
                        <i class='bx bx-trash-alt' onClick = {handleDelete}></i>
                        <i class='bx bx-detail' onClick = {() => toggleDetail(true)}></i>
                    </div>

                    <Modal isOpen={detailPopup}>
                    <ModalHeader className='header-detail' toggle={toggleDetail}>
                        Detail Product
                    </ModalHeader>
                    <ModalBody>
                    
                        <div class = "product-holder">
                            <span className="name-product">{taskObj.Brand}</span>
                            <img alt="" className="image-product" src={taskObj.Image} />
                            <p className = "text-card">{taskObj.Price}</p>
                            <p className = "text-card">Style : {taskObj.Style}</p>
                            <p className = "text-card">Colour : {taskObj.Colour}</p>
                            <p className = "text-card">Size : {taskObj.Size}</p>
                        </div>
                        
                    </ModalBody>
                </Modal>

                    
                </div>
                <EditProduct modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
                
            </div>
        </div>
        
    );
};

export default Card;