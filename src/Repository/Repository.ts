import api from '../config/axios';
import api_key from '../config/env';

//need to build a function to identify the movie id 
const movie_id = "580489";

async function GetGenresList() {
	try {
    const response = await api.get(`/3/genre/movie/list?api_key=${api_key}&language=en-US`);
    if(response.status >= 200 && response.status < 300){
      const genreList = response.data;
      return{
        status:true,
        data:genreList,
      };
    };

    return{
      status: false,
      data:"Falied the request"
    };
	} catch (err) {
    throw(err);
	};
};

async function GetUpcomingList(){
	try {
		const response = await api.get(`/3/movie/upcoming?api_key=${api_key}&language=en-US`);
		if(response.status >= 200 && response.status<300){
			const upcoming = response.data;
			return{
				status: true,
				data: upcoming,
			};
		};
			return{
				status: false,
				data:"Falied the request",
			};
	} catch (err) {
			throw (err);
	}
}

async function GetMovieDetails(){
	try {
		const response = await api.get(`3/movie/${movie_id}?api_key=${api_key}&language=en-US`);
		if(response.status >= 200 && response.status<300){
			const movieDetails = response.data;
			return{
				status: true,
				data: movieDetails,
			};
		};
			return{
				status: false,
				data:"Falied the request",
			};
	} catch (err) {
			throw (err);
	}
}

async function GetMovieVideo(){
	try {
		const response = await api.get(`3/movie/${movie_id}/videos?api_key=${api_key}&language=en-US`);
		if(response.status >= 200 && response.status<300){
			const movieVideo= response.data;
			return{
				status: true,
				data: movieVideo,
			};
		};
			return{
				status: false,
				data:"Falied the request",
			};
	} catch (err) {
			throw (err);
	}
}

export   {GetGenresList, GetUpcomingList, GetMovieDetails, GetMovieVideo};