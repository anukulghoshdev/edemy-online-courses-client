import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Checkout = () => {
    const selectedCourse = useLoaderData();
    const { _id, details, lavel, rating, thumbnail_url, title, total_view } = selectedCourse;
    console.log(selectedCourse);
    return (
        <div>
            <Header></Header>
            <h1>{title}</h1>
        </div>
    );
};

export default Checkout;