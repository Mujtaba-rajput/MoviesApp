import {createSlice} from '@reduxjs/toolkit';

export interface IState {
  movieDetails: {
    title: string;
    rating: string;
    score: number;
    year: number;
    image: string;
    mal_id: number;
    synopsis: string;
    background: string;
  };
}

const initialState: IState = {
  movieDetails: {
    title: '',
    rating: '',
    score: 0,
    year: 0,
    image: '',
    mal_id: 0,
    synopsis: '',
    background: '',
  },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setMovieDetails: (state: IState, {payload}) => {
      state.movieDetails = payload;
    },
  },
});

export const {setMovieDetails} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
