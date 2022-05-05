import React from 'react';
import { useQuery } from '@apollo/client';
import GaugeList from '../components/ThoughtList';
import GaugeForm from '../components/ThoughtForm';
import { QUERY_GAUGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_GAUGES);
  const gauges = data?.gauges || [];

  return (
    <main>
      <div className="flex-row justify-center">
        
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <GaugeForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <GaugeList
              gauges={gauges}
              title="Some Feed for Thought(s)..."
            />
          )}

        </div>
      </div>
    </main>
  );
};

export default Home;
