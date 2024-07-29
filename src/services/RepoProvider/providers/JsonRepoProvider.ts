import {emptyRepo} from "@data/emptyRepo";
import {IRepo} from "@logic/entities/Repo/Repo";
import {IJsonRepoProviderConfig, IRepoProvider} from "../RepoProviderInterfaces";
import {IBranch} from "@logic/entities/Branch/Branch";
import {IBranchConnection, TBranchID} from "@logic/entities/Branch/BranchInterfaces";
import {CompletionRateMethodProvider} from "@logic/methods/completion/CompletionRateMethodProvider";
import {ECompletionRateMethod} from "@logic/methods/completion/CompletionRateMethodTypes";
import {getConnections} from "@logic/methods/branchMethods";
import {ICommit} from "@logic/entities/Commit/Commit";
import {createBranchID, getBranch} from "../build-methods/repoMethods";

interface IBranchObject {
	id: TBranchID;
	name: string;
	connections: IBranchConnection[];
	commits: ICommit[];
	contributionValue: number;
	completionRateMethod: ECompletionRateMethod;
}

const buildRepoFromString = (json: string): IRepo => {
	const parsed = JSON.parse(json);

	const repo: IRepo = {
		id: parsed.id,
		branches: {},
		mainBranchID: parsed.mainBranchID,
		getBranch,
		createBranchID,
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
		connections: branchObject?.connections ?? [],
		commits: branchObject?.commits ?? [],
		contributionValue: branchObject?.contributionValue,
		getCompletionRate: CompletionRateMethodProvider.getByMethodName(ECompletionRateMethod.PERCENTAGE),
		getConnections
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
