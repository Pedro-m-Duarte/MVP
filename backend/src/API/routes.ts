import { Router } from "express";
const router = Router();
import MovieController from "./MovieController";
import GenreController from "./GenreController";

const GenreList = new GenreController();
const Movie = new MovieController();

router.get('/genreList', GenreList.getGenreList);
router.get('/upcomingList', Movie.getUpcomingList);
router.get('/movieDetails/:movie_id', Movie.getMovieDetails);
router.get('/movieVideo/:movie_id', Movie.getMovieVideo);
router.get('/movieByGenre/:genre',Movie.getMovieByGenre);

export default router; 