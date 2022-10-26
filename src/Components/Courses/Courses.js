import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <Container >
            <Row className=' w-100 mx-auto gap-4 mt-4'>
                {
                    allCourses.map(course => <CourseSummery key={course._id} course={course}></CourseSummery>)
                }

            </Row>
        </Container>
    );
};

export default Courses;