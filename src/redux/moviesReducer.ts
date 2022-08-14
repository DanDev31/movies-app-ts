import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', 
    async() => {

        try {
           const response = await axios.get('data.json')
           console.log("me ejecuto")
           return response.data
        } catch (error) {
            console.log("error")
            console.error(error)
        }
})

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
    movies:[],
    loading:false,
    error:''
}

const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchMovies.fulfilled, (state, action:PayloadAction<Movies[]>) => {
            state.loading = false;
            state.movies = action.payload;
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.error = action.error.message || 'Something went wrong'
        })
    }
})

export default moviesSlice.reducer