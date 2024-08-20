import { useState } from 'react';
import { Alert, Button, Container,} from "react-bootstrap"

const Welcome = function () {
    const [show, setShow] = useState(true);
    return (
        <Container fluid  bg='info' style={{marginTop: "100px"}} >
        <Alert show={show} variant="info" >
          <Alert.Heading>Welcome to EpiBooks!!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
            fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-dark">
              Close me
            </Button>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </ Container>
    )
}

export default Welcome