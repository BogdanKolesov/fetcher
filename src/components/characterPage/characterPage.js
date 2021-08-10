import React, { Component } from 'react'
import styled from 'styled-components'
import ItemList from '../itemList';
import CharDetails from '../charDetails/charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {
    state = {
        selectedChar: 130,
        error: false

    }
    componentDidCatch() {
        console.log('error')
        this.setState({
            error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        return (
            <>
                <ItemList onCharSelected={this.onCharSelected} />
                <CharDetails charId={this.state.selectedChar} />
            </>
        );
    }
}