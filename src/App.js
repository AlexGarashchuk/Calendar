import React from 'react';
import './App.css';
import { SideBarList } from './Components/SideBar';
import { Container } from '@material-ui/core';
import {Calendar} from './Containers'

function App() {
  return (
    <div className="App">
     
        <SideBarList />
        <Container>
           <Calendar />
        </Container>
      
    </div>
  );
}

export default App;
