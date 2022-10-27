import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from '../Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <Accordion defaultActiveKey="0" className='container mt-4'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header
                        based mechanism that allows a server to indicate any origins
                        (domain, scheme, or port) other than its own from which a
                        browser should permit loading resources. CORS also relies
                        on a mechanism by which browsers make a "preflight" request
                        to the server hosting the cross-origin resource, in order to
                        check that the server will permit the actual request.
                        In that preflight, the browser sends headers that indicate
                        the HTTP method and headers that will be used in the actual request.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication provides backend services,
                        easy-to-use SDKs, and ready-made UI libraries to
                        authenticate users to your app. It supports authentication
                        using passwords, phone numbers, popular federated identity
                        providers like Google, Facebook and Twitter, and more.
                        Firebase Authentication integrates tightly with other
                        Firebase services, and it leverages industry standards
                        like OAuth 2.0 and OpenID Connect, so it can be easily
                        integrated with your custom backend.
                        I have implement google, github, facebook authentications.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components
                        (children) if the user is logged in. If not logged in the
                        user is redirected to the /login page with the return url
                        passed in the location state property.
                        he current logged in user (authUser) is retrieved from
                        Redux state with a call to the useSelector() hook. Redux
                        is used in this example however it is not required to
                        implement a Private Route component in React Router 6.
                        You could use a different state management library or any
                        approach you prefer to get the logged in status of the user.
                        The App component is the root component of the example app, it contains the outer html,
                        main nav and routes for the application. The /login route is public, and the home
                        route (/) is protected by the private route component that uses Redux to check
                        if the user is logged in.The last route is a catch-all redirect route that redirects
                        any unmatched paths to the home page.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Node.js is an open-source backend javascript runtime environment. 
                        It is a used as backend service where javascript works on the 
                        server-side of the application. This way javascript is used on 
                        both frontend and backend. Node.js runs on chrome v8 engine which 
                        converts javascript code into machine code, it is highly scalable, 
                        lightweight, fast, and data-intensive.
                        ode.js accepts the request from the clients and sends the response, 
                        while working with the request node.js handles them with a single 
                        thread. To operate I/O operations or requests node.js use the concept 
                        of threads. Thread is a sequence of instructions that the server needs 
                        to perform. It runs parallel on the server to provide the information to 
                        multiple clients. Node.js is an event loop single-threaded language. 
                        It can handle concurrent requests with a single thread without blocking 
                        it for one request.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    );
};

export default Blogs;