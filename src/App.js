import React, {useState, useEffect} from 'react';
import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Volcano from './assets/volcano.png';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();
      
    useEffect(()=>{
      console.log('this is window', window)
      dispatch(getPosts());
    });

    
  return (
    <Container maxWidth= 'lg'>
      <AppBar className={classes.AppBar} position = 'static' color= 'inherit'>
        <Typography className={classes.heading} variant = 'h2' align= 'center'>
          Volcanoes
        </Typography>
        <img className= {classes.image} src={Volcano} alt='Volcanoes' height= '80'  />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify= 'space-between' alignItems= 'stretch' spacing= {3}>
            <Grid item xs={12} sm={7}>
              <Posts />
           </Grid>
           <Grid item xs={12} sm={4}> 
            <Form />
           </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
