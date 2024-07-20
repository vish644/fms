import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { emailRegex } from './Register';



function Login() {
    const [email, setemail] = useState();
    const [pswd, setpswd] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidEmail = emailRegex.test(email);
        
        if(email && pswd && isValidEmail){
            console.log("Logedin");
        }
    }

    return (
        <div className='w-6' >
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange = {(e)=>{setpswd(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick = {handleSubmit}>
                    Submit
                </Button>
                <p>New user?<span><a href="/register">Register</a></span></p>
            </Form>
        </div>
    )
} 

export default Login