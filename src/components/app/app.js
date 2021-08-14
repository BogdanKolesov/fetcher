import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../header';
import ItemList from '../itemList';
import RandomChar from '../randomChar/';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/';
import { BrowserRouter as Router, Route } from 'react-router-dom'

///Styled Components


const AppContainer = styled.div`
    width: 100%;
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
        error: false,
        onToggleMessage: 'Toggled',
        onOpenMessage: 'Opened',
        error: false
    }

    componentDidCatch() {
        console.log('error')
        this.setState({
            error: true
        })
    }
    componentDidMount() {

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
        const message = this.state.showRandomChar ? this.state.onToggleMessage : this.state.onOpenMessage;
        return (
            <Router>
                <Header />
                <AppContainer>
                    {char}
                    <ToggleButton onClick={this.toggleRandomChar}>{message}</ToggleButton>
                    <Route path='/characters' component={CharacterPage} />
                    {/* <Route path='/characters/:id' component{} /> */}
                    {/* <Route path='/books' component={BooksPage} />
                    <Route path='/houses' component={HousesPage} /> */}
                </AppContainer>
            </Router>

        )
    }
}