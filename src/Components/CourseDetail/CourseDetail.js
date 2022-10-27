import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { HiStar } from "react-icons/hi";
import { HiEye } from "react-icons/hi";
import { HiCheckCircle } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const CourseDetail = () => {
    const singleCourse = useLoaderData();
    const { _id, details, lavel, rating, thumbnail_url, title, total_view } = singleCourse;
    return (
        <div className='my-4 p-0 border-0 shadow '>
            <Card>
                <div className='d-flex justify-content-between p-3'>
                    <h1>{title}</h1>
                    <button type="button" class="btn btn-primary btn-floating">
                        <i className="fas fa-download"></i>
                    </button>
                </div>
                <Card.Img variant="top" style={{ height: '30rem' }} src={thumbnail_url} />
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <Card.Text>
                        <ul>
                            <h4><li>Level: {lavel}</li></h4>
                            <h4><li><HiStar className='text-warning me-2'></HiStar>{rating.number}</li></h4>
                            <h4><li><HiCheckCircle className='text-success me-2'></HiCheckCircle>{rating.badge}</li></h4>
                            <h4><li><HiEye className='text-primary me-2'></HiEye>{total_view}</li></h4>
                        </ul>
                    </Card.Text>
                </Card.Body>
                {/* <Card.Img variant="bottom" src="holder.js/100px180" /> */}

            </Card>
            <Link to={`/checkout/${_id}`}>
                <button type="button" class="btn btn-warning btn-rounded btn-lg btn-block">Get premium access</button>
            </Link>
        </div>
    );
};

export default CourseDetail;