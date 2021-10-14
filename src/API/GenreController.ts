import GenreService from '../Domain/GenreServices';
import { Request, Response } from 'express';

class GenreController{
	async getGenreList(request: Request, response: Response){
		try {
			const genreListData = new GenreService();
			const genreList = await genreListData.getGenresList();
			if (genreList != null) {
				return response.send(genreList);
			}

			return response.send({ err: "Err" });

		} catch (err) {
			throw err;
		}
	};
};

export default GenreController;