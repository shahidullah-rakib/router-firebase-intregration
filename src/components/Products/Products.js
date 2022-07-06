import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Knock Knock who is there</h2>
            <p>Corrent User Is: {user ? user.displayName : "No One sigh-in"}</p>

        </div>
    );
};

export default Products;