import React from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../../redux/actions';
import { Input } from '../../components';

const Login = () => {



    return (
        <form>
            <h1>Login</h1>
            <Input 
                type='email' id='email' label='Email' placeholder='Email' required 
                onChange={e => emailChanged(e.target.value)}
            />
            <Input 
                type='password' id='password' label='Password' placeholder='Password' required 
                
            />
            <button type='submit'>Login</button>
        </form>
    )
}

export default connect(null, { emailChanged }) (Login);
