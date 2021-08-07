import React, { Component } from 'react'
import styled from 'styled-components'
import GotService from '../../services/gotService';



///Styled Components


///End of Styled Components


export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar();
    }

    state = {
        char: {}
    }


    render() {

        return (
            <div></div>
        )
    }
}