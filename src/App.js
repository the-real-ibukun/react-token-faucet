import Faucet from './components/Faucet.js'
import './App.css'
import FCTToken from './FCTToken.sol'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

function App() {

  const Token = FCTToken;

  return (
    <div className="App">
    <Container>
    <Row className="justify-content-md-center">
      <Col>
      <div>Our faucet</div>
      </Col>
      <Col>
      <div>Our send area</div>
      </Col>
    </Row>
    <Faucet  tokenContract={Token}/>
    </Container>
    

 
    </div>
  );
}

export default App;
