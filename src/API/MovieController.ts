import MovieService from "../Domain/MovieService";
import { Request, Response } from 'express';

class MovieController{
	async getMovieByGenre (request: Request, response:Response) {
		try {
				const genreMovieData = new MovieService();
				const genres = request.params.genre;
				const genreMovie = await genreMovieData.getMoviesByGenre(parseInt(genres));

				if(Number.isInteger(parseInt(genres)) && genreMovie != null){
						return response.send(genreMovie)
				};

				return response.status(500).send({ err: 'Err' });
		} catch(err) {	
				throw err;
		};
	};

	async getMovieVideo (request: Request, response:Response) {
		try {
				const movieVideoData = new MovieService();
				const movie_id = request.params.movie_id;
				const movieVideo = await movieVideoData.getMoviesByGenre(parseInt(movie_id));

				if(Number.isInteger(parseInt(movie_id)) && movieVideo != null){
						return response.send(movieVideo);
				};

				return response.status(500).send({ err: 'Err' });
		} catch(err) {
				throw err;
		};
	};

	async getMovieDetails (request: Request, response:Response) {
		try {
				const movieDetailData = new MovieService();
				const movie_id = request.params.movie_id;
				const movieDetail = await movieDetailData.getMovieDetails(parseInt(movie_id));

				if(Number.isInteger(parseInt(movie_id)) && movieDetail != null){
						return response.send(movieDetail);
				};

				return response.status(500).send({ err: 'Err' });
		} catch(err) {
				throw err;
		};
	};

	async getUpcomingList (request: Request, response:Response) {
		try {
				const upcomingMoviesData = new MovieService();
				const upcomingMovies = await upcomingMoviesData.getUpcomingMovies();

				if(upcomingMovies != null){
						return response.send(upcomingMovies);
				};

				return response.status(500).send({ err: 'Err' });
		} catch(err) {
				throw err;
		};
	};

};

export default MovieController;