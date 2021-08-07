import React, { Component } from 'react'
import styled from 'styled-components'

import CharDetails from '../charDetails';
import Header from '../header';
import ItemList from '../itemList';
import RandomChar from '../randomChar/';

const AppContainer = styled.div`
    width: 80%;
`


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

            ]
        }

    }
    render() {
        return (
            <AppContainer>Hello</AppContainer>
        )
    }
}