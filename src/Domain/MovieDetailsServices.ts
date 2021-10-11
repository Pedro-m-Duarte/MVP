import { GetMovieDetails } from "../Repository/Repository";

class MovieDetailsService {
	async getMovieDetails() {
		const repositoryResponse = await GetMovieDetails();
		if (repositoryResponse.status){
			return repositoryResponse;
		};
	}
}

export default MovieDetailsService;