import React, { Component } from 'react'
import {Layout, Row, Col} from 'antd';

const Footer = Layout;
export default class Bottombar extends Component {
    render() {
        return (
            <Footer className="footer">

            <Row>
                <Col lg={8}>
                    <b> <h1 className="footer-logo"> TH </h1> </b>
                </Col>
                <Col lg={8}>
                    <p className="footer-middle-text text-center"> Handling task made easy. </p>
                </Col>
                <Col lg={8}>
                    <p className="float-right footer-right-text"> copyright &copy; {new Date().getFullYear()}  </p>
                </Col>
            </Row>
            </Footer>
        )
    }
}
