const OrderPopup = ({showOrderPopup, closeOrderPopup, orders }) => {
    if(!showOrderPopup){
        return null;
    }
    console.log('should render');
    return (
        <div className="popup-background">
            <div className="popup-body">
                <p>{orders}</p>
                <button onClick={() => closeOrderPopup()}>Ok</button>
            </div>
        </div>
    );
};

export default OrderPopup;