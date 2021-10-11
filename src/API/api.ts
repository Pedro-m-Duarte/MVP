import { Request, Response } from 'express';
import GenreService from '../Domain/GenreServices';
import UpcomingService from '../Domain/UpcomingService';
import MovieDetailsService from '../Domain/MovieDetailsServices';
import MovieVideoService from '../Domain/MovieVideoService';

class GenreController {
	async getGenreList(request: Request, response: Response) {
		try {
			const genreData = new GenreService();
			const genreList = await genreData.getGenresList();
			if (genreList != null) {
				return response.send(genreList);
			}

			return response.send({ err: "Err" });

		} catch (err) {
			throw err;
		}
	}
}
class UpcomingController {
	async getUpcomingList(request: Request, response: Response) {
		try {
			const upcomingData = new UpcomingService();
			const upcomingList = await upcomingData.getUpcomingList();
			if (upcomingData != null) {
				return response.send(upcomingList);
			};

			return response.send({ err: "Err" });

		} catch (err) {
			throw err;
		};
	};
};

class MovieDetailsController {
	async getMovieDetails(request: Request, response: Response) {
		try {
			const movieDetailsData = new MovieDetailsService();
			const movieDetails = await movieDetailsData.getMovieDetails();
			if (movieDetailsData != null) {
				return response.send(movieDetails);
			}

			return response.send({ err: "Err" });

		} catch (err) {
			throw err;
		}
	}
}

class MovieVideoController{
	async getMovieVideo(request: Request, response: Response) {
		try {
			const movieVideoData = new MovieVideoService();
			const movieVideo = await movieVideoData.getMovieVideo();
			if (movieVideoData != null) {
				return response.send(movieVideo);
			}

			return response.send({ err: "Err" });

		} catch (err) {
			throw err;
		}
	}
}

export  {GenreController, UpcomingController, MovieDetailsController, MovieVideoController};