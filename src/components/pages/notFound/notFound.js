import React, { Component } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";

const Title = styled.h2`
    color: #0000ff;
`
export default class NotFound extends Component {

    render() {
        return (
            <Title>No match</Title>
        )
    }
}
