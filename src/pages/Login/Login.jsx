import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../redux/actions';
import { Input } from '../../components';

const Login = (props) => {
    const { email, pass, error } = props;

    const handleSubmit = e => {
        e.preventDefault();
        props.loginUser({ email, pass});
    }

    const renderError = _ => {
        if(error) return <p className='error'>{error}</p>
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
                {renderError()}
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

const mapStateToProps = state => ({
    email: state.auth.email,
    pass: state.auth.pass,
    error: state.auth.error
})

const mapDispatchToProps = { emailChanged, passwordChanged, loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
