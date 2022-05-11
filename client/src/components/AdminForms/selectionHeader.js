import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
//import { LOGIN_USER } from '../utils/mutations';

//import Auth from '../utils/auth';

const SelectionHeader = (props) => {

    const addGauge = () => { };
    const addCategory = () => { };
    const addUser = () => { };


    return (

            <div className="container flex-row justify-space-between-lg justify-center align-center"  >
                <button className="btn btn-lg btn-light m-2" onClick={addGauge}>
                    Gauge
                </button>
                <button className="btn btn-lg btn-light m-2" onClick={addCategory}>
                    Category
                </button>
                <button className="btn btn-lg btn-light m-2" onClick={addUser}>
                    User
                </button>

            </div>


    );
};

export default SelectionHeader;