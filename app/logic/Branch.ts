import * as dayjs from "dayjs";
import {Dayjs} from "dayjs";

export enum EBranchConnectionType {
	PARENT = 'PARENT',
	CHILD = 'CHILD',
}

// export enum EBranchTime

export interface IBranchConnection {
	branchName: string;
	type: EBranchConnectionType;
}

export interface IDoCommitProps {
	message: string;
	value?: number;
}

/**
 * The way the Branch is committed.
 * - Daily Tasks: like main->mind->read.
 *
 *
 * Can be fully committed VS Option to choose partial 3 out of 7
 *
 */
export interface IDoCommit {
	(props: IDoCommitProps): void;
}


//TODO: ICommit should hold current values of the branch
export interface ICommit {
	message: string;
	occurredAt: dayjs.Dayjs
	value: number;
}

export type TBranchID = string;

export interface IBranch {
	id: TBranchID;
	name: string;

	/**
	 * How much value is passed to parent
	 */
	contributionValue: number;

	connections: IBranchConnection[];

	doCommit: IDoCommit;

	//TODO: check whether Dayjs object contains time. I need only date here, without time
	getCommits: (dateStart: Dayjs, dateEnd: Dayjs) => {
		[date: string]: ICommit
	};

	getValue: () => number;

	getParents: () => IBranch[];

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
