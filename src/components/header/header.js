import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

///Styled Components
const HeaderBlock = styled.header`
    display: flex;
    justify-content: space-between;
`
const HeaderTitle = styled.h3`

`

const HeaderList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const HeaderItem = styled.li`
    margin: 5px;
    list-style-type: none;
`
///End of Styled Components

export default class Header extends Component {

    render() {
        return (
            <HeaderBlock>
                <HeaderTitle> <Link to='/' exact >Title</Link></HeaderTitle>
                <HeaderList>
                    <HeaderItem><Link to='/characters' exact>Characters</Link></HeaderItem>
                    <HeaderItem><Link to='/books' exact>Books</Link></HeaderItem>
                    <HeaderItem><Link to='/houses' exact>Houses</Link></HeaderItem>
                </HeaderList>
            </HeaderBlock>
        )
    }
}