import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { HiStar } from "react-icons/hi";


const CourseSummery = ({ course }) => {
    const { _id, title, thumbnail_url, details } = course;
    return (
        <Card style={{ width: '19rem' }} className='ms-2 p-0 border-0 shadow bg-image hover-zoom' >
            <Card.Img variant="top" height={190} src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length >= 50 ? details.slice(0, 40) : details}
                </Card.Text>
                <Link to={`/course/${_id}`}>
                    <Button variant="primary">Go somewhere</Button>
                </Link>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago <HiStar></HiStar></small>
            </Card.Footer>
        </Card>

    );
};

export default CourseSummery;