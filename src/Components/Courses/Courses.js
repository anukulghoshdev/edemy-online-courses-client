import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <Container >
            <Row className='border border-secondary'>
                {
                    allCourses.map(course => <CourseSummery key={course._id} course={course}></CourseSummery>)
                }

            </Row>
        </Container>
    );
};

export default Courses;