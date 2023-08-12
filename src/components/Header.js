import { useNavigate } from "react-router-dom";


const Header = () => {


   let navigate = useNavigate();
    let clickLogoutHandler = () => {
        localStorage.clear();
        navigate('/');
    }
    let clickLoginHandler = () => {
        navigate('/login');
    }


    let clickSignupHandler = () => {
        navigate('/signup');
    }

    let clickInquiriesHandler = () => {
        navigate('/inquiries');
    }
   


    return (
        <div>
            <div className="row" style={{background: "#ffd13e"}}>
                <div className="col-sm-3">
                <a id="navbarlink" class="navbar-brand" href="/"><img className="img-thumbnail w-25" src='logo1.png' alt='logo here' /></a>
                </div>
                <div className="col-sm-7 mt-5"><h3>Making world a better place.. Houses to Homes</h3></div>
                <div className="col-sm-2 mt-3">                    
                    {
                        (localStorage.getItem('realtor')) ?
                           <div>  
                            <h5> Welcome {localStorage.getItem('name')} !</h5> 
                            <button type="button" onClick={clickLogoutHandler} className="btn btn " style={{background: "#1d5eac", color: "#ede9e6"}}> Logout</button> 
                            <button type="button" onClick={clickInquiriesHandler} className="btn btn " style={{background: "#1d5eac", color: "#ede9e6"}}> Get Inquiries</button>
                            </div>
                            :
                            (localStorage.getItem('name')) ?
                            <div>
                            <h5> Welcome {localStorage.getItem('name')} !</h5>
                            <button type="button" onClick={clickLogoutHandler} className="btn btn " style={{background: "#1d5eac", color: "#ede9e6"}}> Logout</button>
                            </div>
                            :
                            <div>
                                <button type="button" onClick={clickLoginHandler} className="btn btn mx-2" style={{background: "#1d5eac", color: "#ede9e6"}}> Login</button>
                                <button type="button" onClick={clickSignupHandler} className="btn btn" style={{background: "#29bf67", color: "#ede9e6"}}> SignUp</button>
                           </div>
                    }
                   
                </div>
            </div>
        </div>
      );
}
 
export default Header;
