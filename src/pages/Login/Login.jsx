import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../../redux/actions';
import { Input } from '../../components';

const Login = (props) => {
    console.log(props.email)
    return (
        <form>
            <h1>Login</h1>
            <Input 
                type='email' id='email' label='Email' placeholder='Email' required 
                onChange={e => props.emailChanged(e.target.value)}
                value={props.email}
            />
            <Input 
                type='password' id='password' label='Password' placeholder='Password' required 
                onChange={e => props.passwordChanged(e.target.value)}
                value={props.pass}
            />
            <button type='submit'>Login</button>
        </form>
    )
}

const mapStateToProps = state => ({
    email: state.auth.email,
    pass: state.auth.pass
})

const mapDispatchToProps = { emailChanged, passwordChanged };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
