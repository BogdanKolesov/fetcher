import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(0deg) }
    50% { transform: rotate(180deg) }
    100% { transform: rotate(360deg) }
`


const Spinner = styled.div`
    width: 203px;
    height: 203px;
    display: inline-block;
    overflow: hidden;
    background: none;
    margin: 0 auto;
`
const SpinnerInside = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
`
const SpinnerInsideInside = styled.div`
    position: absolute;
    animation: ${rotate} 0.73s linear infinite;
    width: 109.61999999999999px;
    height: 109.61999999999999px;
    top: 46.69px;
    left: 46.69px;
    border-radius: 50%;
    box-shadow: 0 2.8419999999999996px 0 0 #1c4595;
    transform-origin: 54.809999999999995px 56.230999999999995px;
    box-sizing: content-box;
`

export default class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    render() {
        return (
            <Spinner>
                <SpinnerInside>
                    <SpinnerInsideInside>
                    </SpinnerInsideInside>
                </SpinnerInside>
            </Spinner>
        )
    }
}