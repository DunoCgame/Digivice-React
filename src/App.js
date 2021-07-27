import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonGroup, Button, Container, Row, Col  } from 'react-bootstrap';
import  DigiviceNameList from './components/ListDigivice';
import  Search from './components/Search';
import  DigimonSelect from './components/DigimonSelect';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



import logo from './logo.svg';

import './App.css';


const Home = () => (
  <section className="Home">
    <h3>Hello Home</h3>
  </section>
)



function App() {
  return ( 
    <div className="App">
				<Container>
				<h1 className="TitleApp">Digivice Data</h1>
				<Router>
					  <Row>
						<Col sm={4} className="AreaSelect">
						<h3 className="TitleApp">List Digivice</h3>
						
						<DigiviceNameList/>
						
						</Col>
						<Col sm={8} className="DataSelect">
							<Switch>
							  <Route exact path="/:name" component={DigimonSelect}></Route>          
							</Switch>
						</Col>
					  </Row>
					  <Row>
							<footer className="footer"><h3>App Digivice React Boostrap</h3></footer>
					  </Row>
				</Router>
				</Container>
    </div>
  );
}

export default App;
