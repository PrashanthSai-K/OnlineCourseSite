import '../css/Navbar.css';

function Navbar(){
    return(
        <div className="navbar-container" >
            <div className="left-nav" >
                Corsera
            </div>
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Product</li>
                    <li className="nav-item">pricing</li>
                    <li className="nav-item">contact</li>
                </ul>
                {/* <div className='burger' >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div> */}
        </div>
    )
}
export default Navbar