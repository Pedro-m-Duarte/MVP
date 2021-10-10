import { GetUpcomingList } from "../Repository/Repository";

class UpcomingService{
	async getUpcomingList(){
		const repositoryResponse = await GetUpcomingList();
		if(repositoryResponse.status){
			return repositoryResponse;
		};
	}
}

export default UpcomingService;