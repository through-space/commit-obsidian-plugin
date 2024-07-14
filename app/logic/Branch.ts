export enum EBranchConnectionType {
	PARENT = 'PARENT',
	CHILD = 'CHILD',
}


export interface IBranchConnection {
	name: string;
	type: EBranchConnectionType;
}

export interface ICommitProps {
	message: string;
	value?: number;
}

export interface ICommit {
	(props: ICommitProps): void;
}

export interface IBranch {
	id: number;
	name: string;

	weight: number;

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
