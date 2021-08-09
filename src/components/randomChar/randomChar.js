import React, { Component } from 'react'
import styled from 'styled-components'
import GotService from '../../services/gotService';
import Loader from '../loader';
import ErrorMessage from '../errorMessage';



///Styled Components

const RandomContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const RandomBlock = styled.div`
    display: inline-flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 4px;
    padding: 4px;
    margin-top: 10px;
`
const RandomTitle = styled.h4`

`

const RandomList = styled.ul`

`
const RandomItem = styled.li`

`
const RandomSpan = styled.span`

`

///End of Styled Components


export default class RandomChar extends Component {
    gotService = new GotService();

    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
        char: {},
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onCharLoaded = (char) => {
        this.setState({ char, loading: false })
    }
    updateChar = () => {
        const id = Math.floor(Math.random() * 2000 + 1); //11-200
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }
    render() {

        const { char, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const loader = loading ? <Loader /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;


        return (
            <RandomContainer>
                <RandomBlock>
                    {errorMessage}
                    {loader}
                    {content}
                </RandomBlock>

            </RandomContainer>
        );
    }
}
const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <RandomTitle>Random Character: {name}</RandomTitle>
            <RandomList>
                <RandomItem >
                    <RandomSpan>Gender: </RandomSpan>
                    <RandomSpan>{gender}</RandomSpan>
                </RandomItem >
                <RandomItem>
                    <RandomSpan>Born: </RandomSpan>
                    <RandomSpan>{born}</RandomSpan>
                </RandomItem>
                <RandomItem >
                    <RandomSpan>Died: </RandomSpan>
                    <RandomSpan>{died}</RandomSpan>
                </RandomItem>
                <RandomItem >
                    <RandomSpan>Culture: </RandomSpan>
                    <RandomSpan>{culture}</RandomSpan>
                </RandomItem>
            </RandomList>
        </>
    )
}
