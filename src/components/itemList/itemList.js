import React, { Component } from 'react'
import styled from 'styled-components'
import GotService from '../../services/gotService';
import Loader from '../loader';
///Styled Components

const UnorderedList = styled.ul`

`

const ListItem = styled.li`

`

///End of Styled Components


export default class ItemList extends Component {
    GotService = new GotService();
    state = {
        charList: null
    }

    componentDidMount() {
        this.GotService.getAllCharacters()
            .then((charList) => { this.setState({ charList }) })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (

                //сделать формирование id
                <ListItem key={i} onClick={() => this.props.onCharSelected(41 + i)}>{item.name}</ListItem>
            )
        })
    }

    render() {

        const { charList } = this.state;


        if (!charList) {
            return <Loader />
        }
        const items = this.renderItems(charList);
        return (
            <UnorderedList>
                {items}
            </UnorderedList>
        )
    }
}