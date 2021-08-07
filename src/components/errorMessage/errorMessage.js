import React from 'react'
import styled from 'styled-components';

const ErrorSpan = styled.span`
    font-size: 15px;
`

const ErrorMessage = () => {
    return <ErrorSpan>Error!</ErrorSpan>
}

export default ErrorMessage;