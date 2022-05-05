import React from 'react';
//import { Link } from 'react-router-dom';

//import SelectCategory from '../SelectCategory';

const GaugeList = ({ gauges }) => {
  if (!gauges.length) {
    return <h3>No Gauges Yet</h3>;
  }

  return (
    <div>
      {
        gauges && gauges.map((gauge) => (
          <div key={gauge._id} className="card mb-3">
            <span>
              {gauge.gauge_name}
              {gauge.category.category_name}
              {gauge.current_inventory}
              {gauge.quantity_borrowed}
            </span>
          </div>
        ))
      }
    </div>
  );
};



export default GaugeList;
