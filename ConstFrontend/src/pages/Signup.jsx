import React from 'react';
import SignupForm from '../components/SignupForm';
import Container from '../components/Container'
import './Signup.css'

const Signup = () => {
    return (
        <div className='page-layout'>
            <Container>
                <h1>Fazer cadastro</h1>
                <SignupForm />
            </Container>
        </div>
    );
};

export default Signup;