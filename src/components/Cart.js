const Cart = ({ subtotal, orderItems, resetOrder }) => {
    return (
        <footer className="footer">
            <div className="cart">
                <p>Subtotal ${subtotal}</p>
                <button onClick={() => orderItems()}>Order</button>
                <button onClick={resetOrder}>Clear All</button>
            </div>
        </footer>
    );
};


export default Cart;