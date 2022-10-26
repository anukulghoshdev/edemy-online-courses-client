import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseSummery = ({course}) => {
    const {title, thumbnail_url, details} = course;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={190} src={thumbnail_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length >= 50 ? details.slice(0,40) : details}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default CourseSummery;