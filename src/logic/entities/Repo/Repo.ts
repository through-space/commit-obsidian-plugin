import {IBranch} from "../Branch/Branch";
import {TBranchID} from "../Branch/BranchInterfaces";

export interface IRepo {
	id: string;
	branches: {
		[branchID: TBranchID]: IBranch
	}
	mainBranchID: TBranchID;

	getBranch: (branchID: TBranchID) => IBranch | null;
	createBranchID: () => TBranchID;
}
