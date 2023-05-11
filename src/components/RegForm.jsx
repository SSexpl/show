import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Book =()=>
{
    const {state} = useLocation();
    const item = state
    console.log(item);
    const navigate=useNavigate();
    const [userDetails,setUserDetails]=useState({
        name:'',
        email:'',
        city:'',
        movie:'',
        number:'',
        date:''
       });
       //------------------------
 const RegUser=async(event)=>
   {
     event.preventDefault();//prevent reload to happen
      setUserDetails((prevUserDetails) => ({
        ...prevUserDetails,
        movie:item.name,
      }));
      console.log(userDetails);
      
      try{
        if(userDetails.city=="" || userDetails.name=="" || userDetails.email=="" ||userDetails.date=="" ||userDetails.number=="")
        {
            alert("Please fill All fields");
            return;
        }
        const storedString = localStorage.getItem(userDetails.email);
        if(storedString==null){
        const objJson = JSON.stringify(userDetails);
         
        // Store the JSON string in local storage
        localStorage.setItem(userDetails.email, objJson);
        //after we register we will go back to the home page using useNavigate..
         //navigate('/'); 
        }
        else
        {
            // if this email id has already bought the ticket no need to buy again
            alert("The tickets for this id are already booked");
        }
      }
      catch(err)
      {
        console.log(err);
       }
   }
   //-----------------------------
   const setter=(event)=>
   {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]:value,
    }));

   }
   //--------------------------------------
    return(
    <div style={{margin:'10rem', marginTop:'10px',borderRadius:'5px' ,backgroundColor:'#DBD9D9' ,padding:'5px'}}>
     <h1 style={{backgroundColor:'black' ,color :'white',padding:'5px'}}>Book Ticket for : {item.name} </h1>
     <h4>Days:{item.schedule.days.map((it)=>`${it} ,`)}
     <h5>Timings: <p>{item.schedule.time}</p></h5></h4>
     <div>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name='name'  onChange={(event)=>{
                setter(event);
            }}/>
      </Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'   required onChange={(event)=>{
                setter(event);
            }}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Number of People</Form.Label>
        <Form.Control type="NumberofPeople" placeholder="Number of People" name='number' required  onChange={(event)=>{
                setter(event);
            }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
        <Form.Control type="NumberofPeople" placeholder="city" name='city' required  onChange={(event)=>{
                setter(event);
            }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
        <Form.Control type="NumberofPeople" placeholder="Date" name='date' required  onChange={(event)=>{
                setter(event);
            }} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={RegUser}>
        Submit
      </Button>
    </Form>
     </div>
    </div>
    );
    
}
export default Book;