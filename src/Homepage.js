import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Homepage.css';

export class Homepage extends Component {
    render() {
        return (
            <Container className= 'homeLAYOUT'>
                <Row>
                <Col xs="6" sm="4">
                <img src= 'https://i.redd.it/8ypid6px47cz.jpg' alt= 'placeholder'></img>
                </Col>
                <Col xs="6" sm="4">
                <h1>Krystal Liang</h1>
                <br></br>
                <p>
                    Hello and welcome! I am a third year student at the University of Washington Seattle.
                    I am studying Informatics and minoring in entrepreneurship.
                    <br></br>
                    <br></br>
                    At the University of Washington, I've gained a passion for empowering children of varied
                    backgrounds to get involved in the tech industry, increasing the access and interest in the
                    field at a young age.
                </p>
                </Col>
                <Col sm="4">
                Social Medias Will Go Here

                <br></br>
                <br></br>
                <br></br>
                LinkedIn logo and link to linkedin
                <br>
                </br>
                Email logo and link to email
                <br>
                </br>
                foodig ig logo and link to eatwithher
                </Col>
                </Row>
            </Container>
        );
    }
}