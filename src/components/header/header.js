import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

///Styled Components
const HeaderBlock = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #303F9F;
    padding-left: 20px;
    padding-right: 20px;
`
const HeaderTitle = styled.h3`
    a{
        color: #FFFFFF;
        text-decoration: none;
    }
`

const HeaderList = styled.ul`
    display: flex;
    justify-content: space-between;
`

const HeaderItem = styled.li`
    margin: 5px;
    list-style-type: none;
    a{
        color: #FFFFFF;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`
///End of Styled Components

export default class Header extends Component {

    render() {
        return (
            <HeaderBlock>
                <HeaderTitle> <Link to='/' exact >GoT Details</Link></HeaderTitle>
                <HeaderList>
                    <HeaderItem><Link to='/characters/' exact>Characters</Link></HeaderItem>
                    <HeaderItem><Link to='/books/'>Books</Link></HeaderItem>
                    <HeaderItem><Link to='/houses/' exact>Houses</Link></HeaderItem>
                </HeaderList>
            </HeaderBlock>
        )
    }
}