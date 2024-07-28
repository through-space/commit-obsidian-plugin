import {emptyRepo} from "@data/emptyRepo";
import {IRepo} from "@logic/entities/Repo/Repo";
import {IJsonRepoProviderConfig, IRepoProvider} from "../RepoProviderInterfaces";
import {IBranch} from "@logic/entities/Branch/Branch";
import {IBranchConnection, TBranchID} from "@logic/entities/Branch/BranchInterfaces";
import {CompletionRateMethodProvider} from "@logic/methods/completion/CompletionRateMethodProvider";
import {ECompletionRateMethod} from "@logic/methods/completion/CompletionRateMethodTypes";
import {getConnections} from "@logic/methods/branchMethods";

interface IBranchObject {
	id: TBranchID;
	name: string;
	connections: IBranchConnection[],
	contributionValue: number,
	completionRateMethod: ECompletionRateMethod,
}

const buildRepoFromString = (json: string): IRepo => {
	const parsed = JSON.parse(json);

	const repo: IRepo = {
		id: parsed.id,
		branches: {},
		commits: {},
		mainBranchID: parsed.mainBranchID
	};

	for (const branchID in parsed.branches) {
		repo.branches[branchID] = buildBranch(parsed.branches[branchID]);
	}

	return repo;
}


const buildBranch = (branchObject: IBranchObject): IBranch => {
	return {
		id: branchObject.id,
		name: branchObject.name,
		connections: branchObject.connections,
		contributionValue: branchObject.contributionValue,
		getCompletionRate: CompletionRateMethodProvider.getByMethodName(ECompletionRateMethod.PERCENTAGE),
		getConnections: getConnections
	}
}

export const JsonRepoProvider: IRepoProvider = {
	async getRepo(config: IJsonRepoProviderConfig) {
		const json = config?.json;

		if (!json) {
			return Promise.resolve(emptyRepo);
		}

		return buildRepoFromString(json);

		// console.log("hello");
		// console.log(repoExampleJson);
		//
		// return Promise.resolve(emptyRepo);
	}

	// async (json): Promise<IRepo> => {
	// console.log("hello");
	// console.log(repoExampleJson);
	//
	// return Promise.resolve(emptyRepo);
}
