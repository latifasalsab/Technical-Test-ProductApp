import React, { useState , useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditProductPopup = ({modal, toggle, updateProduct, taskObj}) => {
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [style, setStyle] = useState('');
    const [colour, setColour] = useState('');
    const [size, setSize] = useState('')
    
    const secHandleChange = (e) => {
        setBrand(e.target.value)
    }

    const thirdHandleChange = (e) => {
        setImage(e.target.value)
    }

    const fourthHandleChange = (e) => {
        setPrice(e.target.value)
    }

    const fifthHandleChange = (e) => {
        setStyle(e.target.value)
    }

    const sixthHandleChange = (e) => {
        setColour(e.target.value)
    }

    const seventhHandleChange = (e) => {
        setSize(e.target.value)
    }

    useEffect(() => {
        setBrand(taskObj.Brand)
        setImage(taskObj.Image)
        setPrice(taskObj.Price)
        setStyle(taskObj.Style)
        setColour(taskObj.Colour)
        setSize(taskObj.Size)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        taskObj["Brand"] = brand
        taskObj["Image"] = image
        taskObj["Price"] = price
        taskObj["Style"] = style
        taskObj["Colour"] = colour
        taskObj["Size"] = size
        updateProduct(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Product</ModalHeader>
            <ModalBody>
        
                    <div className = "form-group">
                        <label>Name</label>
                        <input className = "form-control" value = {brand} onChange = {secHandleChange} name = "brand"/>
                    </div>
                    <div className = "form-group">
                        <label>Image</label>
                        <input className = "form-control" value = {image} onChange = {thirdHandleChange} name = "image" />
                    </div>
                    <div className = "form-group">
                        <label>Price</label>
                        <input className = "form-control" value = {price} onChange = {fourthHandleChange} name = "price" />
                    </div>
                    <div className = "form-group">
                        <label>Style</label>
                        <input className = "form-control" value = {style} onChange = {fifthHandleChange} name = "style" />
                    </div>
                    <div className = "form-group">
                        <label>Colour</label>
                        <input className = "form-control" value = {colour} onChange = {sixthHandleChange} name = "colour" />
                    </div>
                    <div className = "form-group">
                        <label>Size</label>
                        <input className = "form-control" value = {size} onChange = {seventhHandleChange} name = "size" />
                    </div>
                    
                
            </ModalBody>
            <ModalFooter>
            <button className="btn-inputtop" onClick={handleUpdate}>Update</button>
            <button className="btn-inputbot" onClick={toggle}>Cancel</button>            
            </ModalFooter>
      </Modal>
    );
};

export default EditProductPopup;
