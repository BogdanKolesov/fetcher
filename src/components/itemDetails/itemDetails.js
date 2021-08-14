import React, { Component } from 'react'
import styled from 'styled-components'



///Styled Components

const ItemBlock = styled.div`

`
const ItemName = styled.h4`

`
const ItemUnorderedList = styled.ul`

`

const ItemListItem = styled.li`

`

const ItemSpan = styled.span`

`

const SelectError = styled.span`
    color: #ff0000;
    border: 2px solid #ff0000;
    padding: 3px;
`
///End of Styled Components

const Field = ({ item, field, label }) => {
    return (
        <ItemListItem>
            <ItemSpan>{label}</ItemSpan>
            <ItemSpan>{item[field]}</ItemSpan>
        </ItemListItem>
    )
}

export {
    Field
};
export default class ItemDetails extends Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({ item })
            })
    }
    render() {
        if (!this.state.char) {
            return (<SelectError>Please select a character</SelectError>)
        }
        const { name, gender, born, died, culture } = this.state.char;

        return (
            <ItemBlock>
                <ItemName>{name}</ItemName>
                <ItemUnorderedList>
                    <ItemListItem>
                        <ItemSpan>Gender</ItemSpan>
                        <ItemSpan>{gender}</ItemSpan>
                    </ItemListItem>
                    <ItemListItem>
                        <ItemSpan>Born</ItemSpan>
                        <ItemSpan>{born}</ItemSpan>
                    </ItemListItem>
                    <ItemListItem>
                        <ItemSpan>Died</ItemSpan>
                        <ItemSpan>{died}</ItemSpan>
                    </ItemListItem>
                    <ItemListItem>
                        <ItemSpan>Culture</ItemSpan>
                        <ItemSpan>{culture}</ItemSpan>
                    </ItemListItem>
                </ItemUnorderedList>
            </ItemBlock>
        )
    }
}