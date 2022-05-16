import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { ADD_CATEGORY } from '../../utils/mutations';
import { QUERY_CATEGORIES } from '../../utils/queries';


const CategoryForm = ({categories}) => {

  const [formState, setFormState] = useState({
    category_name: '',
   });
  const [addCategory, { error, data }] = useMutation(ADD_CATEGORY);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addCategory({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">ADD CATEGORY</h4>
          <div className="card-body">
            {data ? (
              <p>
                {window.location.assign('/admin')}
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Category name"
                  name="categoryName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
        <div className='card'>
        {categories && categories.map((category) => (
              <div key={category._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                  {category.category_name}
                
                </h4>

                <button >Edit</button>
                <button >Delete</button>
              </div>
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;