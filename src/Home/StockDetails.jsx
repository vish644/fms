import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';


function Stock() {
    return (
        <div className='w-6' >
            <h1>Stock Details</h1>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">

                <Button variant="primary">
                    Add Fruit
                </Button><br />

                    <Form.Label>Fruit ID</Form.Label>
                    <Form.Control type="text"  />

                    <Form.Label>Fruit Name</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Fruit Name
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Apple</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Banana</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Mango</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" />

                    <Form.Label>Price per kg/dozen</Form.Label>
                    <Form.Control type="number" />
            
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Stock