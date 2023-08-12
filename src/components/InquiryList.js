import { useEffect, useState } from "react";
import axios from "axios";
const InquiryList = () => {


    const [enquiries,setEnquiries] = useState([]);


    useEffect(() => {
        async function getInquiries(){
            let resp = await axios.get(process.env.REACT_APP_LINKTOBACKEND+'enquiries');
            //console.log(resp);
            let data = resp.data;
            console.log(data);
            setEnquiries(data);
        }
        getInquiries()
      },[])






    return (
        <div style={{background: "#ede9e6"}}>
            <h4 className="mt-2"> Inquiry List Submitted so far.</h4>
            <div className="table-responsive">
                <table className="table table" style={{background: "#ede9e6"}}>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        enquiries.map((elem) => {
                          return <tr key={elem._id}>
                            <td>{elem.ename}</td>
                            <td>{elem.email}</td>
                            <td>{elem.remarks}</td>
                          </tr>
                        })
                        }                        
                       
                    </tbody>
                </table>
            </div>
           


        </div>




     );
}
 
export default InquiryList;