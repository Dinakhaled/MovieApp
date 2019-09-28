import { combineReducers } from 'redux'
import topMovies from './TopMovies';

export default combineReducers({
    topMovies: topMovies,
})