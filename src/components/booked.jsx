import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
const Booked =()=>
{
    const [list,setList]=useState([]);
    const generate =async ()=>
    {
        // Initialize an empty array to hold the objects
const objects = [];

// Loop through the keys of the local storage object
console.log(localStorage.length);
for (let i = 0; i <localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  // Check if the value is an object (i.e., it can be parsed by JSON)
  try {
    const object = JSON.parse(value);
    if (typeof object === 'object') {
      objects.push(object);
    }
  } catch (error) {
    // If parsing the value as JSON throws an error, it's not an object
    // and we can skip it
    continue;
  }
}
  console.log(objects);
  return objects;

    }
useEffect(()=>
{
   const setter=async()=>
   {
    const ans=await generate();
   
    setList(ans);
   }
   setter();
},[]);
// The 'objects' array now contains all the objects stored in local storage
    if(!list)
    {
        return(<><h2>Loading......</h2></>);
    }
    if(list.length==0)
    {
      return <div>No bookings</div>;
    }
    return(
        <>
       <h1 style={{backgroundColor:'black' ,color :'white',padding:'5px'}}>Booked User Details</h1>
        <Row style={{padding:'10px'}}>
        {list && list.map((item) => 
        <Card style={{ width: '18rem',margin:'5px' }}>
      <Card.Header>{item.movie}</Card.Header>
      {/* {display details of all booking form localStorage} */}
      <ListGroup variant="flush">
        <ListGroup.Item>Name: {item.name}</ListGroup.Item>  
        <ListGroup.Item>Email:{item.email}</ListGroup.Item>
        <ListGroup.Item>Number of seats : {item.number}</ListGroup.Item>
        <ListGroup.Item>date: {item.date}</ListGroup.Item>
      </ListGroup>
    </Card>
    )}
    </Row>
        </>
    )
}
export default Booked;