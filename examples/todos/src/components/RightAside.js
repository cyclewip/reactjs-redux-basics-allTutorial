import React from "react";
import styled from "styled-components"

const Div = styled.div`

    border: 5px outset pink;
    height: 250px;
    margin-top: 5%;
    width: 25%;
    &:hover {
        background-color: yellow;
    }
`;

const FlexBox = styled.div `

    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const RightAside = (props) => {
    return (
        
            <Div>
           
            </Div>
        
    );
}

export default RightAside