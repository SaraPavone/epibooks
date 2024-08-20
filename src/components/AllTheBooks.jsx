import { Component } from 'react'
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import books from "../data/fantasy.json";



class AllTheBooks extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className='mb-3'>
                        <h1>Fantasy</h1>
                    </Col>
                </Row>
                <Row>
                    {books.map((book) => {
                        return (
                            <Col xs={12} md={8} lg={4} xl={2} className="justify-content-center" key={book.asin}>
                                <Card className='mb-3' style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={book.img} style={{height: "400px", objectFit: "cover"}} />
                                    <Card.Body>
                                        <Card.Title style={{height: "100px", alignContent: "center"}}>{book.title}</Card.Title>
                                        <Card.Text>{book.category.toUpperCase()}</Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>Price: {book.price} $</ListGroup.Item>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}

                </Row>
            </Container>
        );
    }
}

export default AllTheBooks