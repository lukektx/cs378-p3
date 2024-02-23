import Popup from 'reactjs-popup';

const Cart = ({ subtotal, orderedItems, resetOrder }) => {
    return (
        <footer className="footer">
            <div className="cart">
                <p>Subtotal ${subtotal}</p>
                <Popup trigger={<button>Order</button>} position="right center">
                    <div>Popup content here !!</div>
                </Popup>

                <button onClick={resetOrder}>Clear All</button>
            </div>
        </footer>
    );
};


export default Cart;