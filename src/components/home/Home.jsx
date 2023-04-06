import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData()
    return (
        <div>
            <h1>This is home {tshirt.length}</h1>
        </div>
    );
};

export default Home;