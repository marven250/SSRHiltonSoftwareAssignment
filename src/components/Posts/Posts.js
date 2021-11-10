import React, {useState} from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import {getPosts } from '../../actions/posts';


const Posts = ()=>{
    const volcanoes = useSelector((state)=> state.posts);
    const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const indexOfLastVolcano = currentPage * postsPerPage;
    const indexOfFirstVolcano = indexOfLastVolcano - postsPerPage;
    const currentVolcanoes = volcanoes.slice(indexOfFirstVolcano, indexOfLastVolcano);
    const paginate = (pageNumber)=> setCurrentPage(pageNumber); 
        

    return (
       !currentVolcanoes.length ? <CircularProgress /> : (
           <Grid className= {classes.containter} container alignItems='stretch' spacing='5'>
               {currentVolcanoes.map((volcano)=>(
                   <Grid key={volcano._id} item xs={12} sm={6}>
                       <Post getPosts={getPosts} volcano={volcano}  />
                   </Grid>

               ))}
                <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={volcanoes.length} paginate={paginate} />
           </Grid>
       )
    )
};

export default Posts;