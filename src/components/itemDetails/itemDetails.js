import React, { Component } from 'react'
import styled from 'styled-components'



///Styled Components

const ItemBlock = styled.div`
    border: 1px solid ${props => props.theme.colors.borders};
    border-radius: 5px;
    max-width: 500px;
    min-width: 300px;
    padding: 5px;
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
    color: ${props => props.theme.colors.error};
    border: 2px solid ${props => props.theme.colors.accent};
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

        if (!this.state.item) {
            return <SelectError>Please select item in the list</SelectError>
        }
        const { item } = this.state;
        const { name } = item;
        return (
            <ItemBlock>
                <ItemName>{name}</ItemName>
                <ItemUnorderedList className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ItemUnorderedList>
            </ItemBlock>
        )
    }
}