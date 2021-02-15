import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

const AddCar = () => {
    let history = useHistory();
    const [car, setCar] = useState({
        brand: "",
        carNumber: "",
        engineType: "",
        model: ""
    });

    const {brand, carNumber, engineType, model} = car
    const onInputValue  = e => {
        setCar({...car, [e.target.name]: e.target.value})
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("https://test-backend.esverito.com/api/car", car)
        history.push("/")
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add car</h2>
                <form onSubmit={e =>onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Brand"
                               name="brand" value={brand} onChange={e => onInputValue(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Car Number"
                               name="carNumber" value={carNumber} onChange={e => onInputValue(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Engine Type"
                               name="engineType" value={engineType} onChange={e => onInputValue(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Model"
                               name="model" value={model} onChange={e => onInputValue(e)}/>
                    </div>
                    <button className="btn btn-primary btn-block">Add Car</button>
                </form>
            </div>
        </div>
    );
};

export default AddCar;


