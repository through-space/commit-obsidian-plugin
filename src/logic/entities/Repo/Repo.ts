import {IBranch} from "../Branch/Branch";
import {TBranchID} from "../Branch/BranchInterfaces";
import {ICommit} from "../Commit/Commit";

export interface IRepo {
	id: string;
	branches: {
		[branchID: TBranchID]: IBranch
	}
	commits: {
		[branchID: TBranchID]: ICommit[]
	}
	mainBranchID: TBranchID
}
