import {ERepoProviderType, IRepoProvider, IRepoProviderConfig, IRepoProviderFactory} from "./RepoProviderInterfaces";
import {JsonRepoProvider} from "./providers/JsonRepoProvider";

const getRepoProviderByType = (repoProviderType: ERepoProviderType): IRepoProvider => {
	switch (repoProviderType) {
		case ERepoProviderType.JSON:
			return JsonRepoProvider;
		case ERepoProviderType.MOCKUP:
			return JsonRepoProvider;
		default:
			throw new Error("Invalid repo provider type");
	}
}

export const RepoProviderFactory: IRepoProviderFactory = {
	getRepoProvider: (config: IRepoProviderConfig) => {
		return getRepoProviderByType(config.type);
	},
}
