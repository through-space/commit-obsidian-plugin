export type TBranchID = string;

export interface IBranchCompletionScoreCalculationMethod {
	(): number;
}

export interface IDoCommitProps {
	message: string;
	value?: number;
}
