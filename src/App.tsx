import React, { useEffect } from 'react';
import { loadMovies } from './redux/moviesReducer';
import { useAppDispatch } from './redux/redux-hooks/hooks';
import { AppRouter } from './router/AppRouter';

export const App:React.FC = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadMovies())
  }, [dispatch])

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}


