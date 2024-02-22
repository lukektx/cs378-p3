const Cart = ({subtotal, orderItems, resetOrder}) => {
    return(
        <div className="cart">
            <p>Subtotal ${subtotal}</p>
            <button onClick={orderItems}>Order</button>
            <button onClick={resetOrder}>Clear All</button>
        </div>
    );
};


export default Cart;