import React, {useState, useEffect } from 'react';
import {ListGroup } from 'react-bootstrap';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";




function DigiviceNameList() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // setItems(result.slice(0,20));
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } 
  else 
	  if (!isLoaded) {
		return <div>Loading...</div>;
	  } 
	  else {
			return (
			<div className="ListItem"> 
				<ListGroup>
				  
					{items.map((item,index) => (
						
						<ListGroup.Item  key={item.name} >
					
						
									<Link to={`/${item.name}`}>
										{item.name}
									</Link>
							
							   
						 
						</ListGroup.Item>
					  
					))}
				
				  </ListGroup>
			</div>
			);
  }
}

export default DigiviceNameList;