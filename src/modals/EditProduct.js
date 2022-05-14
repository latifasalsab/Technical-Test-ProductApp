import React, { useState , useEffect} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditProductPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [style, setStyle] = useState('');
    const [colour, setColour] = useState('');
    const [size, setSize] = useState('')
    const [coba, setCoba] = useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else {
            setDescription(value)
        }


    }
    
    const secHandleChange = (e) => {
        
        const {coba, value} = e.target

        if(coba === "coba"){
            setCoba(value)
        }else {
            setBrand(value)
        }


    }

    const thirdHandleChange = (e) => {
        
        const {coba, value} = e.target

        if(coba === "coba"){
            setCoba(value)
        }else {
            setImage(value)
        }


    }

    const fourthHandleChange = (e) => {
        
        const {coba, value} = e.target

        if(coba === "coba"){
            setCoba(value)
        }else {
            setPrice(value)
        }


    }

    const fifthHandleChange = (e) => {
        
        const {coba, value} = e.target

        if(coba === "coba"){
            setCoba(value)
        }else {
            setStyle(value)
        }


    }

    const sixthHandleChange = (e) => {
        
        const {coba, value} = e.target

        if(coba === "coba"){
            setCoba(value)
        }else {
            setColour(value)
        }


    }

    const seventhHandleChange = (e) => {
        
        const {coba, value} = e.target

        if(coba === "coba"){
            setCoba(value)
        }else {
            setSize(value)
        }


    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setBrand(taskObj.Brand)
        setImage(taskObj.Image)
        setPrice(taskObj.Price)
        setStyle(taskObj.Style)
        setColour(taskObj.Colour)
        setSize(taskObj.Size)
        setCoba(taskObj.Coba)
        // eslint-disable-next-line
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        taskObj["Brand"] = brand
        taskObj["Image"] = image
        taskObj["Price"] = price
        taskObj["Style"] = style
        taskObj["Colour"] = colour
        taskObj["Size"] = size
        taskObj["Coba"] = coba
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
        
                    <div className = "form-group">
                        <label>Name</label>
                        <input type="text" className = "form-control" value = {brand} onChange = {secHandleChange} name = "brand"/>
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