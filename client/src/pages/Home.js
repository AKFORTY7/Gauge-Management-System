import React from 'react';
import { useQuery } from '@apollo/client';

import GaugeList from '../components/GaugeList';


import { QUERY_CATEGORIES, QUERY_GAUGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_GAUGES);
  const gauges = data?.gauges || [];


  const { loading1, data1 } = useQuery(QUERY_CATEGORIES);
  const categories = data1?.categories || [];
  console.log(categories);
 

 

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading && loading1 ? (
            <div>Loading...</div>
          ) : (
            <GaugeList
              gauges={gauges}
              categories = {categories}
              title="Gauge List..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
