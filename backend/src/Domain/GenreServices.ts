import {GetGenresList} from "../Repository/Repository";

class GenreService{
  async getGenresList(){
    const repositoryResponse = await GetGenresList();
    if(repositoryResponse.status){
      return repositoryResponse;
    };
		return {message: "Failed to make the request"};
  };
};

export default GenreService;