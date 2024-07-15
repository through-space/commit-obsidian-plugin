export enum EBranchConnectionType {
	PARENT = 'PARENT',
	CHILD = 'CHILD',
}

// export enum EBranchTime

export interface IBranchConnection {
	name: string;
	type: EBranchConnectionType;
}

export interface ICommitProps {
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
export interface ICommit {
	(props: ICommitProps): void;
}

export interface IBranch {
	id: number;
	name: string;

	value: number;

	connections: IBranchConnection[];

	commit: ICommit;

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
