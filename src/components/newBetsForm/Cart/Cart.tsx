import CartContainer from './styled';

function Cart(){
  return(
    <CartContainer>
      <h2>CART</h2>

      <div className='cart-gameList'>No games found.</div>

      <h2>CART</h2>

      <div className='cart-saveBuy'>
        <button>Save {'->'}</button>
      </div>
    </CartContainer>
  )
}

export default Cart;
