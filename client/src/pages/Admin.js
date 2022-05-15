import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
//import { Link } from 'react-router-dom';

import GaugeForm from '../components/AdminForms/gaugeForm';
import CategoryForm from '../components/AdminForms/categoryForm';
import UserForm from '../components/AdminForms/userForm';


//import adminAuth from '../utils/adminAuth';
import Auth from '../utils/auth';

import { QUERY_CATEGORIES, QUERY_GAUGES, QUERY_USER } from '../utils/queries';

const Admin = () => {
    const { loading, data } = useQuery(QUERY_GAUGES);
    const gauges = data?.gauges || [];

    const { loading1, data1 } = useQuery(QUERY_CATEGORIES);
    const categories = data1?.categories || [];

    const { loading2, data2 } = useQuery(QUERY_USER);
    const users = data2?.users || [];

    const [active, setActive] = useState('');

    return (
        <div  >
            <div className="flex-row justify-center">

                <div className="col-12 col-md-8 mb-3">
                    {loading || loading1 || loading2 ? (
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
                                            {active === "User" && <UserForm users={users} />}
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
