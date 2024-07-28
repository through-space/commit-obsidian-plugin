import {ERepoProviderType, IRepoProvider} from "./RepoProviderInterfaces";
import {JsonRepoProvider} from "./providers/JsonRepoProvider";

export const RepoProvider = {
	getRepoProvider: (config: repoType: ERepoProviderType) => {
		if (repoType === repoType) {
			return JsonRepoProvider;
		}
	},
	getRepo: async () => {
		return JsonRepoProvider.getRepo();
	}
}

export const getRepoProvider = (): IRepoProvider => {
	return RepoProvider;
}
