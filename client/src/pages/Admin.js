import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/GaugeList';
import ThoughtForm from '../components/GaugeForm';
import SelectionHeader from '../components/AdminForms/selectionHeader';
import adminAuth from '../utils/adminAuth';

import { QUERY_CATEGORIES, QUERY_GAUGES, QUERY_USER } from '../utils/queries';

const Admin = () => {
    const { loading, data } = useQuery(QUERY_GAUGES);
    const gauges = data?.gauges || [];

    const { loading1, data1 } = useQuery(QUERY_CATEGORIES);
    const categories = data1?.categories || [];

    const { loading2, data2 } = useQuery(QUERY_CATEGORIES);
    const users = data2?.users || [];



    return (
        <div>
            <div>
                <div className="flex-row justify-center">
                    <div
                        className="col-12 col-md-10 mb-3 p-3"
                        style={{ border: '1px dotted #1a1a1a' }}
                    >
                        <SelectionHeader />
                    </div>
                    <div className="col-12 col-md-8 mb-3">
                        {loading || loading1 || loading2 ? (
                            <div>Loading...</div>
                        ) : (
                            <ThoughtList
                                gauges={gauges}
                                categories={categories}
                                title="Gauge List..."
                            />
                        )}
                    </div>
                </div>
            </div>
            <div>
            {/* {adminAuth.adminLoggedIn() ? (<p>Loggedin</p>) : (<p>Not loggedIn</p>)} */}
            </div>
        </div>
    );
};

export default Admin;
