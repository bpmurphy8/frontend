import  Inquiry  from './Inquiry'

const House = (props) => {
    let myhouses = props.houses;
    if(props.houses.length ===0){
        return <p>Loading...</p>
    }
    return ( 
        <div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="py-1" style={{background: "#29bf67"}}>Featured House</h3>
                </div>
            </div>
            <div className="row float-start">
                <div className="col-sm-12">
                    <h4>County: {myhouses[0].county}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h4>Address: {myhouses[0].address}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-7">
                    <img className="w-100" src={`images/${myhouses[0].photo}`} alt="House Here"/>
                </div>
                <div className="col-sm-5">
                    <h4>Price: USD {myhouses[0].price}</h4>
                    <p className="mx-3">{myhouses[0].description}</p>
                    <div>
                        {localStorage.getItem('name') ? <Inquiry /> : <p>Please Log in to submit an Inquiry</p>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default House;