import {IBranch, ICommit, TBranchID} from "../Branch/Branch";

export interface Repo {
	id: string;
	branches: {
		[branchID: TBranchID]: IBranch
	}
	commits: {
		[branchID: TBranchID]: ICommit[]
	}
	loadFromStorage: () => void
}
