import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className='row menuEntry'>
            <div className="col-4 menu-image">
                <img className='menuImage' src={`./images/${imageName}`} alt={`${title}`}/>
            </div>
            <div className='col-8'>
                <h2 className='menuTitle'>{title}</h2>
                <p className='description'>{description}</p>
                <div className="row justify-content-between">
                    <p className='col-2 price'>{price}</p>
                    <div className='col-1'>
                        <button className='addButton'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
