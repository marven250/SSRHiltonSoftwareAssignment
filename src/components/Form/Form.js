import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts } from '../../actions/posts';
import { searchVolcano , updateVolcano, createVolcano, updateSearchBoolean } from '../../actions/posts';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';

const Form = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    var currentName = useSelector(state=>state.currentVolcano)
    var searchBoolean = useSelector(state=>state.searchBoolean)
    const currentVolcano = useSelector((state)=> currentName? state.posts.find((v)=> v.name === currentName): null);
    const [volcanoData, setVolcanoData] = useState({
        _id: "",
        index: null,
        isActive: null,
        population: "",
        name: "",
        description: "",
        discovered: "",
        latitude: null,
        longitude: null,
        type: ""
    });

    

    useEffect(()=>{
        if(currentVolcano){
            setVolcanoData(currentVolcano)
        };
    }, [currentName]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(currentName){
            dispatch(updateVolcano(currentName, volcanoData));
        }else if(searchBoolean){
            dispatch(searchVolcano(volcanoData));
        }else{
        dispatch(createVolcano(volcanoData));
        }
        clear();
    }

    const clear = ()=>{
        dispatch(updateVolcano(currentName, null));
        setVolcanoData({
            _id: "",
            index: "",
            isActive: "",
            population: "",
            name: "",
            description: "",
            discovered: "",
            latitude: "",
            longitude: "",
            type: ""
        });
    };

    const resetVolcanoes = ()=>{
        dispatch(getPosts())
    };

    const flipIcon = ()=>{
        dispatch(updateSearchBoolean(!searchBoolean))
    };

    return (
        <Paper id='form' className={classes.paper}>
            {searchBoolean? <AddIcon onClick={flipIcon} /> : <SearchIcon id='searchIcon' onClick={flipIcon}/>}
                <HomeIcon id='homeIcon' onClick={resetVolcanoes} />
            <form autoComplete= 'off' noValidate className= {`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant= 'h6'>{currentName? 'Editing': (searchBoolean? 'Searching':'Creating') } a Volcano</Typography>
                {searchBoolean? <></>:<TextField
                    name= 'isActive'
                    variant= 'outlined'
                    label = 'isActive'
                    fullWidth
                    value={volcanoData.isActive}
                    onChange= {(e)=>setVolcanoData({...volcanoData, isActive: e.target.value})}
                /> }
                 {searchBoolean? <></>:<TextField
                    name= 'population'
                    variant= 'outlined'
                    label = 'Population'
                    fullWidth
                    value={volcanoData.population}
                    onChange= {(e)=>setVolcanoData({...volcanoData, population: e.target.value})}
                /> }
                
                 <TextField
                    name= 'name'
                    variant= 'outlined'
                    label = 'Name'
                    fullWidth
                    value={volcanoData.name}
                    onChange= {(e)=>setVolcanoData({...volcanoData, name: e.target.value})}
                />
                {searchBoolean? <></>: <TextField
                    name= 'description'
                    variant= 'outlined'
                    label = 'Description'
                    fullWidth
                    value={volcanoData.description}
                    onChange= {(e)=>setVolcanoData({...volcanoData, description: e.target.value})}
                />}
                
                {searchBoolean? <></>: <TextField
                    name= 'discovered'
                    variant= 'outlined'
                    label = 'Discovered'
                    fullWidth
                    value={volcanoData.discovered}
                    onChange= {(e)=>setVolcanoData({...volcanoData, discovered: e.target.value})}
                />}

                {searchBoolean? <></>: <TextField
                    name= 'latitude'
                    variant= 'outlined'
                    label = 'Latitude'
                    fullWidth
                    value={volcanoData.latitude}
                    onChange= {(e)=>setVolcanoData({...volcanoData, latitude: e.target.value})}
                />}

                {searchBoolean? <></>:<TextField
                    name= 'longitude'
                    variant= 'outlined'
                    label = 'Longitude'
                    fullWidth
                    value={volcanoData.longitude}
                    onChange= {(e)=>setVolcanoData({...volcanoData, longitude: e.target.value})}
                />}
                 
                 
                 
                {searchBoolean? <Button className= {classes.buttonSubmit} variant = 'contained' color='primary' size='small' type= 'submit' fullWidth>
                    Search
                </Button>: <Button className= {classes.buttonSubmit} variant = 'contained' color='primary' size= 'large' fullWidth type= 'submit'>
                    Submit
                </Button> }
                <Button className= {classes.buttonSubmit} variant = 'contained' color='secondary' size='small' onClick={clear} fullWidth>
                    Clear
                </Button>
                
            </form>
        </Paper>
    )
}

export default Form;