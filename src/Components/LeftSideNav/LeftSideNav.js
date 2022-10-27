import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://edemy-server-kohl.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    
    return (
        <div className=' p-3 border-3 shadow mt-4 ' >
            {
                categories.map(category=><p className='border border-light px-3 '><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;