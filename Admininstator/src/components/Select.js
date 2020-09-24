import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import styled from "styled-components";
import { Row } from "react-bootstrap";
export default class Select extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }
    render() {
        return (
            <>

                <SelectContainer>
                    <h3>Welcome to Additive Solutions</h3>
                    <h4>Select your role</h4>
                    <Row>
                        <Link
                            to="/admin"
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Admin
            </Link>
                        <Link
                            to="/customer"
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Customer
            </Link>

                    </Row>

                </SelectContainer>
            </>
        );
    }
}

const SelectContainer = styled.div`
  margin: 5rem auto;
  padding: 3rem;
  width: 30rem;

  h3 {
    margin: 0 0 3rem;
  }

  .text {
    text-align: left;
  }
`;
