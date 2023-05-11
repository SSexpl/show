import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "./table";

//--------------------------------------------
import Row from 'react-bootstrap/Row';
import  Col from "react-bootstrap/Col";
import  Button  from "react-bootstrap/Button";
const Home =()=>
{
    const [data,setData]=useState([]);
    const [Loading,SetLoading]=useState(true);
    const navigate=useNavigate();
    const getData=async()=>
    {
        const ans=await axios.get('https://api.tvmaze.com/search/shows?q=all');//fetch data from api
        setData(ans.data);
        SetLoading(false);
        
    }
    useEffect(()=>{ // to set the list of movies on component mount
        getData();
        console.log(data);
    },[]);
    const handleClick = () => {
      
      navigate('/booked');
    };
    if (Loading) {
        return <div>Loading...</div>;
      }
   
      return (
        <div style={{backgroundColor:'#DBD9D9'}}>
          <h1 style={{backgroundColor:'black' ,color :'white',padding:'5px'}}>List of Movies</h1>
          <Button variant="primary" onClick={handleClick}>Booked Ticket Details</Button>
          <Row className="justify-content-md-center">
          {data.map((item,index)=>
               <Table  // passing each show to table element for rendering
                item={item}
                index={index+1}
                 />
               )
          }
          </Row>
        </div>
      );
    
}

export default Home;