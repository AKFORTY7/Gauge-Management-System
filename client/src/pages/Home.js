import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/GaugeList';
import ThoughtForm from '../components/GaugeForm';

import { QUERY_CATEGORIES, QUERY_GAUGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_GAUGES);
  const gauges = data?.gauges || [];

  const { loading1, data1 } = useQuery(QUERY_CATEGORIES);
  const categories = data1?.categories || [];

 

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading || loading1 ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              gauges={gauges}
              categories = {categories}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
