import {IBranchConnection, IBranchCompletionRateMethod, TBranchID, EBranchConnectionType} from "./BranchInterfaces";
import {ICommit} from "@logic/entities/Commit/Commit";


/**
 * The way the Branch is committed.
 * - Daily Tasks: like main->mind->read.
 *
 *
 * Can be fully committed VS Option to choose partial 3 out of 7
 *
 */


//TODO: ICommit should hold current values of the branch

export interface IBranch {
	id: TBranchID;
	name: string;

	/**
	 * How much value is passed to parent
	 */
	contributionValue: number;

	connections: IBranchConnection[];
	commits: ICommit[];

	// doCommit: IDoCommit;

	// //TODO: check whether Dayjs object contains time. I need only date here, without time
	// getCommits: (dateStart?: Dayjs, dateEnd?: Dayjs) => {
	// 	[date: string]: ICommit
	// };

	// getValue: () => IBranchGetValue;
	getCompletionRate: IBranchCompletionRateMethod;

	//TODO: add filters? by date, priority, time
	// getParents: () => IBranch[];
	getConnections: (type?: EBranchConnectionType) => IBranchConnection[]

	frequency?: number;

	// status: string;
	// createdAt: string;
	// updatedAt: string;
	// deletedAt: string;
	// companyId: number;
	// company: ICompany;
	// branchType: IBranchType;
	// branchStatus: IBranchStatus;
	// branchUsers: IBranchUser[];
	// branchServices: IBranchService[];
	// branchSchedules: IBranchSchedule[];
}
