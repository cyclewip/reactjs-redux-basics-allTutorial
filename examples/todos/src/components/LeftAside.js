import React from "react";
import styled from "styled-components"
import Car from './Car'
import AddCar from "../containers/AddCar";
import VisibleCarList from "../containers/VisibleCarList";
import RemoveCar from "../containers/RemoveCar";

const Div = styled.div`

    border: 5px outset pink;
    height: 250px;
    width: 25%;
    margin-top: 5%;
    &:hover {
        background-color: yellow;
    }
`;

const FlexBox = styled.div `

    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const LeftAside = (props) => {
    return (
        
            <Div>
                <VisibleCarList/>
                  <AddCar/>
                  <RemoveCar/>
            </Div>
        
    );
}

export default LeftAside