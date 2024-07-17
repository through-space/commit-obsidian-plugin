import * as dayjs from "dayjs";

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

export interface IBranch {
	id: number;
	name: string;

	value: number;

	connections: IBranchConnection[];

	doCommit: IDoCommit;

	commits: ICommit[];

	getValue: () => number;


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
