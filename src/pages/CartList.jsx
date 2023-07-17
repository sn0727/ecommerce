import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { remove } from '../app/slice/ProductSlice';

const CartList = () => {

  const productItems = useSelector((state) => state.product);
  const dispatch = useDispatch();

  let tottalPrice = 0

  // remove items from the array list
  const removeItem = (productRemoveId) => {
    dispatch(remove(productRemoveId))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className="cart">
            <h1>Checkout Cart</h1>
            {
              productItems.map((items) => {
                tottalPrice += items.price;
                return <div className="cart-item" id={items.id}>
                  <img src={items.image} alt={"Product 1"} />
                  <div className="item-details">
                    <div className="item-name">{items.title}</div>
                    <div className="item-price">${items.price}</div>
                    <div className="item-quantity">Quantity: 1</div>
                  </div>
                  <button type='button' onClick={()=>removeItem(items.id)} className='btn btn-danger'> Remove Item </button>
                </div>
              })
            }
            <div className="total">Total: ${tottalPrice}</div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CartList
