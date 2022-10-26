import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseSummery from '../CourseSummery/CourseSummery';

const Category = () => {
    const categoryCourses = useLoaderData()
    console.log(categoryCourses);
    return (
        <Container>
            <Row>
                {
                    categoryCourses.map(course => <CourseSummery
                        key={course._id}
                        course={course}
                    ></CourseSummery>)
                }
            </Row>
        </Container>
    );
};

export default Category;