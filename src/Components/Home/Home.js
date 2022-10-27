import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import HomeImg from '../../assets/HomeImg.jpg'
import './Home.css'

const Home = () => {
    return (
        // <Container>
        //     <Row>
        //         <Col lg='6' className='border border-primary'>
        //            <img src={HomeImg} style={{ width: '30rem' }} alt="" srcset="" />
        //         </Col>
        //         <Col lg='6' className='border border-primary h1'>
        //             <h1 className='font-weight-bold'>Start your Online learning Journey</h1>
        //         </Col>
        //     </Row>
        // </Container>


        <div className='d-flex flex-lg-row flex-column justify-content-around align-items-center home-container'>
            <div className=''>
                <img src={HomeImg} style={{ width: '30rem' }} alt="" srcset="" />
            </div>
            <div  className=' home-text'>
                <h1 style={{ width: '30rem' }} className='display-1 mx-auto'>Start your Online learning Journey</h1>
            </div>
        </div>
    );
};

export default Home;