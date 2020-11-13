import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import server from '../serverInterface/server';

class Place extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            city: "",
            state: "",
            rating: 0,
            rev: ""
        };
    }

    handleAddPlace = (event) => {
        server.addPlace(this.state.name, this.state.city, this.state.state, this.state.rating);
        event.preventDefault();


    }
    
    onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name of place" value={this.state.name}
                                onChange={this.onInputChange} />

                        </Form.Group>

                        <Form.Group controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="City of place" value={this.state.city}
                                onChange={this.onInputChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicState">
                            <Form.Label>State</Form.Label>

                            <Form.Control type="text" placeholder="State of place" value={this.state.state}
                                onChange={this.onInputChange} />
                        </Form.Group>
                            <Form.Group as={Row} value={this.state.rating} onChange={this.onInputChange}>
                                <Form.Label as="legend" column sm={2}>
                                    Rating:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="1 star "
                                        name="formHorizontalRadios"
                                        id="starOne"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="2 stars"
                                        name="formHorizontalRadios"
                                        id="starTwo"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="3 stars"
                                        name="formHorizontalRadios"
                                        id="starThree"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="4 stars"
                                        name="formHorizontalRadios"
                                        id="starFour"
                                    /> 
                                    <Form.Check
                                        type="radio"
                                        label="5 stars"
                                        name="formHorizontalRadios"
                                        id="starFive"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="formBasicReview">
                            <Form.Label>Review:</Form.Label>

                            <Form.Control type="text" placeholder="Your thoughts on this place" value={this.state.rev}
                                onChange={this.onInputChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleAddPlace}>
                            Add place
                         </Button>
                    </Form></Col>
                </Row>
            </Container>
        );
    }
}

export default Place;