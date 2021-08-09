import React, { Component } from 'react'
import styled from 'styled-components'

import CharDetails from '../charDetails';
import CharDetail from '../charDetails/charDetails';
import Header from '../header';
import ItemList from '../itemList';
import RandomChar from '../randomChar/';
import Loader from '../loader/';
import ErrorMessage from '../errorMessage';


///Styled Components


const AppContainer = styled.div`
    width: 80%;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    
`
const ToggleButton = styled.button`
    padding: 5px;
    background-color: #1E90FF;
    border: none;
    margin-top: 15px;
    color: #fff;
`
///End of Styled Components

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });

    }
    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        return (
            <AppContainer>
                {char}
                <ToggleButton onClick={this.toggleRandomChar}>Toggle random character</ToggleButton>
            </AppContainer>
        )
    }
}