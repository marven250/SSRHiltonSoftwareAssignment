import * as api from '../api';

export const getPosts = () => async (dispatch)=>{
    try{
        const {data} = await api.fetchVolcanoes();
        if(data){
            dispatch({type: 'FETCH_ALL', payload: data});
        };
    } catch (error){
        console.error(error);
    };
};


export const createVolcano = (volcano)=> async (dispatch)=>{
    try{
        const {data} = await api.createVolcano(volcano);
        if(data){
        dispatch({type: 'CREATE', payload: data});
        };
    }catch(error){
        console.error(error);
    };
};

export const updateVolcano = (name, updatedVolcano) => async (dispatch) =>{
    try{
         await api.updateVolcano(name, updatedVolcano);
            dispatch({type: 'UPDATE', payload: updatedVolcano});

    }catch(error){
        console.error(error);
    };
};

export const deleteVolcano = (name) => async (dispatch) =>{
    try{
        await api.deleteVolcano(name);
        dispatch({type: 'DELETE', payload: name});
    }catch(error){
        console.error(error);
    };
};

export const searchVolcano = (volcano)=> async (dispatch) =>{
    try{
      let selectedVolcanoes =  await api.searchVolcano(volcano);
        if(selectedVolcanoes){
            dispatch({type: 'SEARCH', payload: selectedVolcanoes});
        }
    }catch(error){
        console.error(error);
    };
};