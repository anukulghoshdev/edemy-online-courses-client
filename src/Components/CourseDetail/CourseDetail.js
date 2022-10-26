import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const singleCourse = useLoaderData();
    const {details, lavel, rating, thumbnail_url, title, total_view   } = singleCourse;
    return (
        <div>
    

            <Card className="bg-dark text-white ">
                <Card.Img style={{ height: '23rem' }} src={thumbnail_url} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title><h2>{title}</h2></Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default CourseDetail;