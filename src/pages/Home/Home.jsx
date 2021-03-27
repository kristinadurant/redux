import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ email }) => {
    return (
        <>
            <h1>Welcome {email}</h1>
            <Link to='/login'>Login</Link>
        </>
    )
}

const mapStateToProps = state => ({ email: state.auth.email });

export default connect(mapStateToProps)(Home);
