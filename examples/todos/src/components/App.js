import React from 'react'
import Footer from './Footer'
import LeftAside from './LeftAside'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import RightAside from './RightAside';
import styled from "styled-components"
import AddCar from '../containers/AddCar';

const FlexBox = styled.div `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const App = () => (
  <div>
    
    <AddCar/>
    <FlexBox>
      <LeftAside/>
      <RightAside/>
    </FlexBox>
    
    <Footer />
  </div>
)

export default App
