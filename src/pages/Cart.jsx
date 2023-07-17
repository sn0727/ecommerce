import React, { useState, useEffect } from 'react'

const Cart = () => {

  const [product, setProduct] = useState([]);

  // API calling funtion
  const url = 'https://fakestoreapi.com/products'
  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])


  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-12'>
          <h1 className='text-center mb-4'>Products Items</h1>
        </div>
        {

          product.map((items, index) => (
            <div className='col-12 col-md-4 col-lg-4' id={index}>
              <div className="card mb-3" >
                <img className="card-img-top" src={items.image} style={{ maxWidth: '300px', margin: 'auto', height: '220px', objectFit: 'contain' }} alt={''} />
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">{items.description}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <button type='button' className='btn btn-primary'>Add To Cart</button>
                </div>
              </div>

            </div>
          ))

        }
      </div>
    </div>

  )
}

export default Cart
