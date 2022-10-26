import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Main = () => {
    const {pathname} = useLocation()
    
    return (
        <div>
            <Header></Header>

            <Container>
                <Row >
                    {pathname !== ('/'|| '/home') && <Col lg='2' >
                        <LeftSideNav></LeftSideNav>
                    </Col> }
                    

                    <Col lg={pathname == ('/'|| '/home')?'12' : '10'}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;