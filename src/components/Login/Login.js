import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h4>Please Login</h4>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign-in</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;