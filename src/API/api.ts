import { Request, response, Response } from 'express';
import GenreService from '../Domain/GenreServices';

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

export default GenreController;