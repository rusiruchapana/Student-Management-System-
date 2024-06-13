import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function StudentList(){
    
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/api/v1/student/students')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    //console.log(data);
    return(    
        <>
           {data.map((std)=>{
                //console.log(std.firstName);
                return(
                    <div key={std.id}>
                        <Card id={std.id} first_name={std.firstName} last_name={std.lastName} email={std.email}   />
                    </div>
                );
           })}
        </>
    );
}

export default StudentList;