import {IRepoProvider} from "./RepoProviderInterfaces";
import {getRepoFromJson} from "./methods/getRepoFromJson";

export const RepoProvider: IRepoProvider = {
	getRepoFromJson
	// getRepoFromObsidian(): Promise<IRepo> {
	// 	return Promise.resolve(undefined);
	// }

}
