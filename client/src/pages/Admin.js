import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
//import { Link } from 'react-router-dom';

import GaugeForm from '../components/AdminForms/gaugeForm';
import CategoryForm from '../components/AdminForms/categoryForm';
import UserForm from '../components/AdminForms/userForm';


//import adminAuth from '../utils/adminAuth';
import Auth from '../utils/auth';

import { QUERY_CATEGORIES, QUERY_GAUGES, QUERY_USERS } from '../utils/queries';

const Admin = () => {
   
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const categories = data?.categories || [];
  


    const gaugesArray = useQuery(QUERY_GAUGES);
    const gauges = gaugesArray?.data?.gauges || [];
   


    const usersArray = useQuery(QUERY_USERS);
    const users = usersArray?.data?.users || [];
    console.log('This is the list of users' , users);

    const [active, setActive] = useState('Gauge');

    return (
        <div>
            <div className="flex-row justify-center">

                <div className="col-12 col-md-8 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            {
                                // Auth.loggedIn() && Auth.isAdmin() ? (
                                Auth.isAdmin() ? (
                                    <>
                                        <div className="col-12 col-md-10 mb-3 p-3" style={{ border: '1px dotted #1a1a1a' }}>
                                            <div className="container flex-row justify-space-between-lg justify-center align-center"  >
                                                <button className="btn btn-lg btn-light m-2" onClick={() => setActive("Gauge")}>
                                                    Gauge
                                                </button>
                                                <button className="btn btn-lg btn-light m-2" onClick={() => setActive("Category")}>
                                                    Category
                                                </button>
                                                <button className="btn btn-lg btn-light m-2" onClick={() => setActive("User")}>
                                                    User
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Display items based on button clicked */}
                                            {active === "Gauge" && <GaugeForm gauges={gauges} />}
                                            {active === "Category" && <CategoryForm categories={categories} />}
                                            {active === "User" && <UserForm users={users}/>}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        Administrator log in needed.
                                    </>
                                )
                            }
                        </>
                    )}
                </div>

            </div>
        </div>



    );
};

export default Admin;
