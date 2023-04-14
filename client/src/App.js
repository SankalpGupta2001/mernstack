import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/header'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from './screens/ProfileScreen';

function App() {
    return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
          <Routes >
          <Route path='/' component={HomeScreen} exact />      
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} /> 
          <Route path='/profile' component={ProfileScreen} />
          </Routes>
          </Container>
        </main>
      </Router>
    );
  }
  
  export default App;
  