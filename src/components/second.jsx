import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from "axios";
const Second =()=>
{
    const [data,setData]=useState({});
    const [item,setItem]=useState({});
    const [Loading,SetLoading]=useState(true);
    const {id}=useParams();
    const navigate=useNavigate();
    const getData=async()=>
    {
        const ans=await axios.get('https://api.tvmaze.com/search/shows?q=all');
        console.log(ans.data);
        setData(ans.data[id-1].show);
        console.log(data);
        const items={
            name:data.name,
        }
        setItem(items);
        SetLoading(false);
        
    }
   useEffect(()=>
   {
          getData();
   },[]);

   const handleClick = () => {
    const send_data = {
      name:data.name ,
      schedule:data.schedule
    };
    navigate(`/book/${id}`, { state: send_data});
  };

  
   if (Loading) {
    return <div>Loading...</div>;
  }
  const temp={name:"XYZ"};
    return(
    < div style={{margin:'5rem'}}>
     <Card>
      <Card.Header>{data.name}</Card.Header>
      <Card.Body>
        <Card.Title>Summary</Card.Title>
        <Card.Text>
        <div dangerouslySetInnerHTML={{ __html: data.summary }}></div>
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Book Ticket</Button>
      </Card.Body>
    </Card>
    
    </div>
    );
}

export default Second;