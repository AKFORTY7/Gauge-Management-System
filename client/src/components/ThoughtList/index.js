import React from 'react';
//import { Link } from 'react-router-dom';

const GaugeList = ({
  gauge_name,
  category,
  current_inventory,
  quantity_borrowed,
  inhouse_PN,
  createdAt

}) => {
  if (!gauge_name.length) {
    return <h3>No Gauges Yet</h3>;
  }

  return (
    <div>
      {/* {showTitle && <h3>{title}</h3>} */}
      {
      gauge_name &&
        gauge_name.map((gauge) => (
          <div key={gauge._id} className="card mb-3">
            {/* A portion of the code had been removed from here */}
          {gauge.gauge_name}
            {/* {quantity_borrowed}
            {inhouse_PN}
            {createdAt} */}

          </div>
        ))}
        {/* This is the code that had been removed */}
         {/* <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${gauge.thoughtAuthor}`}
                >
                  {gauge.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this thought on {gauge.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this thought on {gauge.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{gauge.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${gauge._id}`}
            >
              Join the discussion on this thought.
            </Link> */}
    </div>


    
  );
};





export default GaugeList;
