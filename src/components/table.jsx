import Second from "./second";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
const Table =({item,index})=>
{
  const show=item.show; // get the current show details
    const url=show.image?show.image.medium:"alt";
   return(
   <>
   <Card style={{ width: '20rem',margin:'5px',padding:'5px'}}>
      <Card.Img variant="top" src={url}  style={{ height: "300px", width: "auto" }}/>
      <Card.Body>
        <Card.Title>{show.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Rating : {show.rating.average}</ListGroup.Item>
        <ListGroup.Item>Language: {show.language}</ListGroup.Item>
        
        <ListGroup.Item>Genres:<p>{show.genres.map((it)=>`${it} ,`)}</p></ListGroup.Item>
        
      </ListGroup>
      <Card.Body>
      {/*   navigate to the next component using Link and info about current show in link  */}
      <Link to={`/second/${index}`}> <Button variant="primary">Next</Button></Link>
      </Card.Body>
    </Card>
   
    </>
   )
}
export default Table;