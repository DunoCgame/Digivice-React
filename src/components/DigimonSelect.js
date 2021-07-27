import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; //para url



function DigimonSelect(prop){
	
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
   let { name } = useParams()


	  useEffect(() => {

		// fetch("https://digimon-api.vercel.app/api/digimon/name/${prop.name}")
		// fetch("https://digimon-api.vercel.app/api/digimon/name/${name}") //parar url
		fetch("https://digimon-api.vercel.app/api/digimon/name/"+name) //parar url ok
		 // fetch("https://digimon-api.vercel.app/api/digimon/name/"+"agumon")
		  .then(res => res.json())
		  .then(
			(result) => {
			  setIsLoaded(true);
			  setItems(result);
			},
			(error) => {
			  setIsLoaded(true);
			  setError(error);
			}
		  )
	  }, [name])

  if (error) {
    return 
	<h2 className="TitleApp">Error: {error.message}</h2>;
  } 
  else 
	  if (!isLoaded) {
		return <h2 className="TitleApp">Loading...</h2>;
	  } 
	  else {
			return (
			
			 <section className="SelectDigimon"> 
				{items.map(item => (
				  <div key={item.name}>
						<h2 className="TitleApp"> Name {item.name} | Level {item.level}</h2>
						
						<center>
							<img src={item.img} with="200" height="200"/>
						</center>
					
					
				  </div>
				))}
				</section> 
			
		
			);
  }
}

export default DigimonSelect;

// https://github.com/blog-johnserrano/routes-react/blob/master/src/App.js