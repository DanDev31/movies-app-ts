import { createSlice } from "@reduxjs/toolkit";
import moviesCollection from '../data/data.json'


interface Movies {
  id:number
  img:string;
  trailer:string;
  sinopsis:string;
  title:string;
  category:string;
  year:string;
  type:string;
}

interface MoviesSlice {
    movies:Movies[];
    loading:boolean;
    error:string;
}

const initialState:MoviesSlice = {
    movies:moviesCollection,
    loading:false,
    error:''
}

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{}
})

export default moviesSlice.reducer