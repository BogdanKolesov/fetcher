import React, { Component } from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from "react-router-dom";


import Header from '../header';
import RandomChar from '../randomChar/';
import ErrorMessage from '../errorMessage/';
import CharacterPage from '../pages/characterPage/';
import HousesPage from '../pages/housesPage/';
import { BooksPage, BooksItem } from '../pages/booksPage/';
import NotFound from '../pages/notFound/';

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
                    <Switch>
                        <Route path='/' component={() => <h1>Welcome to GOT DB</h1>} exact />
                        <Route path='/characters' component={CharacterPage} />
                        <Route path='/books' component={BooksPage} exact />
                        <Route path='/books/:id' render={({ match }) => {
                            const { id } = match.params;
                            return <BooksItem bookId={id} />
                        }} />
                        <Route path='/houses' component={HousesPage} />
                        <Route component={NotFound} />
                    </Switch>
                </AppContainer>

            </Router>

        )
    }
}