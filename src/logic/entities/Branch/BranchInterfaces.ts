export type TBranchID = string;

export interface IBranchCompletionRateMethod {
	(): number;
}

export enum EBranchConnectionType {
	PARENT = "PARENT",
	CHILD = "CHILD",
}

export interface IBranchConnection {
	branch: TBranchID;
	type: EBranchConnectionType;
}

export interface IDoCommitProps {
	message: string;
	value?: number;
}
