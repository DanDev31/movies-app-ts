import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import moviesCollection from '../data/data.json'
import axios from "axios";


// export const fetchMovies = createAsyncThunk('movies/fetchMovies', 
//     async() => {

//         try {
//            const response = await axios.get('data.json',{
//                 headers : { 
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 }
//            }
//            )
//            console.log("me ejecuto")
//            return response.data
//         } catch (error) {
//             console.log("error")
//             console.error(error)
//         }
// })

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
}

const initialState:MoviesSlice = {
    movies:[],
    copyMovies:[],
    loading:false,
    error:''
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

export const { loadMovies, findMovies } = moviesSlice.actions
export default moviesSlice.reducer