import React, { Component } from 'react'
import styled from 'styled-components'
import ItemDetails from '../itemDetails/';
import Loader from '../loader';
///Styled Components

const UnorderedList = styled.ul`

`

const ListItem = styled.li`

`

///End of Styled Components

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;

            const label = this.props.renderItem(item);

            return (
                <ListItem
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </ListItem>
            )
        })
    }

    render() {
        const { itemList } = this.state;

        if (!itemList) {
            return <Loader />
        }

        const items = this.renderItems(itemList);


        return (
            <UnorderedList >
                {items}
            </UnorderedList>
        );
    }
}