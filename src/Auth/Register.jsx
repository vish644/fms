import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Register() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [cPassword, setcPassword] = useState();


    const isValidEmail = emailRegex.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = emailRegex.test(email);
        const isValidPaswd = password == cPassword;

        if (isValidEmail && isValidPaswd) {
            console.log("Registered");
        }

    }

    return (
        <div className='w-6' >
            <h1>Register</h1>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => { setpassword(e.target.value) }} />
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-enter password" onChange={(e) => { setcPassword(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
                <p>Existing user? <span><a href="/login">Login</a></span></p>
            </Form>
        </div>
    )
}

export default Register