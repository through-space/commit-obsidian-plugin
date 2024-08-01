import {IBranch} from "@logic/entities/Branch/Branch";
import {
	CompletionScoreCalculationMethodProvider
} from "@logic/methods/completion/CompletionScoreCalculationMethodProvider";
import {ECompletionScoreCalculationMethod} from "@logic/methods/completion/CompletionScoreCalculationMethodTypes";
import {TBranchID} from "@logic/entities/Branch/BranchInterfaces";
import {ICommit} from "@logic/entities/Commit/Commit";
import {defaultBranch} from "./defaultBranch";
import {IBranchConnection} from "@logic/entities/Connection/ConnectionInterfaces";

export interface IRawBranchObject {
	id: TBranchID;
	name: string;
	connections: IBranchConnection[];
	commits: {
		[date: string]: ICommit[]
	};
	contributionValue: number;
	completionRateMethod: ECompletionScoreCalculationMethod;
}

export const buildBranch = (branchObject: IRawBranchObject): IBranch => {
	return {
		...defaultBranch,
		id: branchObject.id,
		name: branchObject.name,
		connections: branchObject?.connections ?? [],
		commits: branchObject?.commits ?? {},
		contributionValue: branchObject?.contributionValue || 0,
		getCompletionRate: CompletionScoreCalculationMethodProvider.getByMethodName(branchObject.completionRateMethod),
	}
}
