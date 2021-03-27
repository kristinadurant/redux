import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../redux/actions';
import { Input } from '../../components';

const Login = (props) => {
    const { email, pass } = props;

    const handleSubmit = e => {
        e.preventDefault();
        props.loginUser({ email, pass});
    }

    return (
        <>
            <Link to='/'>Back</Link>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Input 
                    type='email' id='email' label='Email' placeholder='Email' required 
                    onChange={e => props.emailChanged(e.target.value)}
                    value={email}
                />
                <Input 
                    type='password' id='password' label='Password' placeholder='Password' required 
                    onChange={e => props.passwordChanged(e.target.value)}
                    value={pass}
                />
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

const mapStateToProps = state => ({
    email: state.auth.email,
    pass: state.auth.pass
})

const mapDispatchToProps = { emailChanged, passwordChanged, loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
