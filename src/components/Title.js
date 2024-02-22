const Title = ({title, logo, description, slogan}) => {
    return(
        <div className='mainTitle'>
            <h1>{title}</h1>
            <div className='row'>
                <div className='col-4'>
                    <img className='img-fluid' src={`./images/${logo}`} alt='logo'/>
                </div>
                <div className='col-8 titleBackground'>
                    <p className="titleDescription titleColor">{description}</p>
                    <p className="titleSlogan">{slogan}</p>
                </div>
            </div>
        </div>
    );
};

export default Title;