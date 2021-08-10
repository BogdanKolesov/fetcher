import React, { Component } from 'react'
import styled from 'styled-components'
import GotService from '../../services/gotService';



///Styled Components

const CharBlock = styled.div`

`
const CharName = styled.h4`

`
const CharUnorderedList = styled.ul`

`

const CharListItem = styled.li`

`

const CharSpan = styled.span`

`

const SelectError = styled.span`
    color: #ff0000;
    border: 2px solid #ff0000;
    padding: 3px;
`
///End of Styled Components


export default class CharDetails extends Component {
    gotService = new GotService();
    state = {
        char: null
    }
    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    updateChar() {
        const { charId } = this.props;
        if (!charId) {
            return;
        }
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({ char })
            })
    }
    render() {
        if (!this.state.char) {
            return (<SelectError>Please select a character</SelectError>)
        }
        const { name, gender, born, died, culture } = this.state.char;

        return (
            <CharBlock>
                <CharName>{name}</CharName>
                <CharUnorderedList>
                    <CharListItem>
                        <CharSpan>Gender</CharSpan>
                        <CharSpan>{gender}</CharSpan>
                    </CharListItem>
                    <CharListItem>
                        <CharSpan>Born</CharSpan>
                        <CharSpan>{born}</CharSpan>
                    </CharListItem>
                    <CharListItem>
                        <CharSpan>Died</CharSpan>
                        <CharSpan>{died}</CharSpan>
                    </CharListItem>
                    <CharListItem>
                        <CharSpan>Culture</CharSpan>
                        <CharSpan>{culture}</CharSpan>
                    </CharListItem>
                </CharUnorderedList>
            </CharBlock>
        )
    }
}