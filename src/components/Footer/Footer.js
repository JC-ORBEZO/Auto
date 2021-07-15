import React from 'react';
import {Container,Row,Col} from "react-bootstrap";
import styled from 'styled-components';
const AppContainer=styled(Container)`
height:35px;
`;

const AppRow=styled(Row)`

`;

const AppCol=styled(Col)`
font-size:30px;
display:flex;
justify-content:space-around;
`;

function Footer() {
    return (
        <AppContainer>
            <AppRow className="justify-content-center mt-5">
                <AppCol md={6}>
                    <a href="https://github.com/" className="text-dark"><i className="fab fa-github"></i></a>
                    <a href="https://www.facebook.com/" className="text-primary"><i className="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/" className="text-danger"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/home" className="text-primary"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.twitch.tv/" className="text-secondary"><i className="fab fa-twitch"></i></a>
                    <a href="https://www.youtube.com/" className="text-danger"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/feed/" className="text-primary"><i className="fab fa-linkedin-in"></i></a>
                </AppCol>
            </AppRow>
        </AppContainer>
    )
}

export default Footer
