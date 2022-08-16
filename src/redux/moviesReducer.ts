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
    copyMovies:Movies[];
    loading:boolean;
    error:string;
    type:string;
}

const initialState:MoviesSlice = {
    movies:[],
    copyMovies:[],
    loading:false,
    error:'',
    type:''
}

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        loadMovies(state){
            state.movies = moviesCollection
        },
        findMovies(state, { payload }){
            state.movies = state.copyMovies.filter(movie => movie.title.toLowerCase().includes(payload.toLowerCase()))
          }
          ,
        setType(state, { payload }){
            state.type = payload
          }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchMovies.pending, (state) => {
    //         state.loading = true;
    //     })
    //     builder.addCase(fetchMovies.fulfilled, (state, action:PayloadAction<Movies[]>) => {
    //         state.loading = false;
    //         state.movies = action.payload;
    //     })
    //     builder.addCase(fetchMovies.rejected, (state, action) => {
    //         state.loading = false;
    //         state.movies = [];
    //         state.error = action.error.message || 'Something went wrong'
    //     })
    // }
})

export const { loadMovies, findMovies, setType } = moviesSlice.actions
export default moviesSlice.reducer