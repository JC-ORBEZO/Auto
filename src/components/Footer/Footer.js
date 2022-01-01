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
                <AppCol md={1}>
                    <a href="https://github.com/JC-ORBEZO" className="text-dark"><i className="fab fa-github"></i></a>                    
                    <a href="https://www.linkedin.com/in/jose-orbezo" className="text-primary"><i className="fab fa-linkedin-in"></i></a>
                </AppCol>
            </AppRow>
        </AppContainer>
    )
}

export default Footer
