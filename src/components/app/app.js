import React, { Component } from 'react'
import styled from 'styled-components'

import CharDetails from '../charDetails';
import CharDetail from '../charDetails/charDetails';
import Header from '../header';
import ItemList from '../itemList';
import RandomChar from '../randomChar/';
import Loader from '../loader/';


///Styled Components


const AppContainer = styled.div`
    width: 80%;
`
///End of Styled Components

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
            <AppContainer>
                <RandomChar />
            </AppContainer>
        )
    }
}