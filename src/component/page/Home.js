import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
     const [cars, setCars]= useState([]);

       useEffect(() => {
           loadUsers();
       }, [cars]);

    const loadUsers = async () => {
        debugger
        const result = await axios.get("https://test-backend.esverito.com/api/car")
        setCars(result.data.cars.sort((a,b) => a.id-b.id))
    }
    const deleteCar = async id => {
        axios.delete(`https://test-backend.esverito.com/api/car/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table className="table border showing">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Car Number</th>
                        <th scope="col">Engine Type</th>
                        <th scope="col">Model</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cars.map((car, index) => (
                            <tr>
                                <th scope="row">{car.id}</th>
                                <td>{car.brand}</td>
                                <td>{car.carNumber}</td>
                                <td>{car.engineType}</td>
                                <td>{car.model}</td>
                                <td>
                                    <Link className= "btn btn-outline-primary mr-2" to={`/cars/edit/${car.id}`}>Edit</Link>
                                    <Link className="btn btn-outline-danger" onClick={() => deleteCar(car.id)}>Delete</Link>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;

