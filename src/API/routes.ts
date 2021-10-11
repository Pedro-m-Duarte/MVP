import { Router } from "express";
const router = Router();
import {GenreController,UpcomingController, MovieDetailsController, MovieVideoController} from "./api";

const GenreList = new GenreController();
const upcomingList = new UpcomingController();
const movieDetails = new MovieDetailsController();
const movieVideo = new MovieVideoController();

router.get('/genreList', GenreList.getGenreList);
router.get('/upcomingList', upcomingList.getUpcomingList);
router.get('/movieDetails', movieDetails.getMovieDetails);
router.get('/movieVideo', movieVideo.getMovieVideo);

export default router;