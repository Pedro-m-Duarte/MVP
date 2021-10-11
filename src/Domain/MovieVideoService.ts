import { GetMovieVideo } from "../Repository/Repository";

class MovieVideoService{
	async getMovieVideo(){
		const repositoryResponse = await GetMovieVideo();
		if(repositoryResponse.status){
			return repositoryResponse;
		};
	}
}

export default MovieVideoService;