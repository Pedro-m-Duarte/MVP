import { GetMovieDetails, GetMovieVideo, GetMoviesByGenre, GetUpcomingMovies } from "../Repository/Repository";

class MovieService{
	//Trailer do filme
	async getMovieVideo(movie_id:number){
		const repositoryResponse = await GetMovieVideo(movie_id);
		if(repositoryResponse.status){
			return repositoryResponse;
		};
	};
	//Filmes em estréia
	async getUpcomingMovies(){
		const repositoryResponse = await GetUpcomingMovies();
		if(repositoryResponse.status){
			return repositoryResponse;
		};
	};
	//Filmes de um determinado genero
	async getMoviesByGenre(genre:number){
		const repositoryResponse = await GetMoviesByGenre(genre);
		if(repositoryResponse.status){
			return repositoryResponse;
		};
	};
	// Detalhes do filme
	async getMovieDetails(movie_id:number){
		const repositoryResponse = await GetMovieDetails(movie_id);
		if(repositoryResponse.status){
			return repositoryResponse;
		};
	};
};

export default MovieService;