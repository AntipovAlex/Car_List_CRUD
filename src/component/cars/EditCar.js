import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const EditCar = () => {
    let history = useHistory();
    const {id} = useParams();
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
    useEffect(() => {
        loadCar()
    },[])

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`https://test-backend.esverito.com/api/car/${id}`, car)
        history.push("/")
    }
    const loadCar = async() => {
        const result = await axios.get(`https://test-backend.esverito.com/api/car/${id}`)
        debugger
        setCar(result.data.car)
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit Car</h2>
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
                    <button className="btn btn-warning btn-block">Update Car</button>
                </form>
            </div>
        </div>
    );
};

export default EditCar;


