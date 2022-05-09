import React from 'react';
// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';



const ThoughtList = ({ gauges, title }) => {
  if (!gauges.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {gauges &&
        gauges.map((gauge) => (

          <div key={gauge._id} className="card mb-3">

            <h4 className="card-header bg-primary text-light p-2 m-0">
              {gauge.gauge_name} <br />

              {gauge.category._id}<br />
            </h4>
            <div className="card-body bg-light p-2">
              <span style={{ fontSize: '1rem' }}>
                Current inventory: {gauge.current_inventory} pc(s) <br />
                Quantity borrowed:  {gauge.quantity_borrowed} pc(s)
              </span>
            </div>
            {/* Create a link to this thought's page to view its comments using `<Link>` component */}
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/gauges/${gauge._id}`}
            >
              See details.
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default ThoughtList;
