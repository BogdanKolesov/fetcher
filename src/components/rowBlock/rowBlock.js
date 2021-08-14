import React from 'react';
import styled from 'styled-components';


const RowItems = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

const RowItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `
const RowBlock = ({ left, right }) => {
    return (
        <RowItems>
            <RowItem>
                {left}
            </RowItem>
            <RowItem>
                {right}
            </RowItem>
        </RowItems>
    )
}

export default RowBlock;