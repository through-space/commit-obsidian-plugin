import {IBranch} from "@logic/entities/Branch/Branch";
import {
	CompletionScoreCalculationMethodProvider
} from "@logic/methods/completion/CompletionScoreCalculationMethodProvider";
import {getConnections} from "@logic/methods/branchMethods";
import {ECompletionScoreCalculationMethod} from "@logic/methods/completion/CompletionScoreCalculationMethodTypes";
import {DEFAULT_BRANCH_PALETTE} from "@config/commonConsts";

export const defaultBranch: IBranch = {
	id: "",
	name: "",
	connections: [],
	commits: {},
	palette: DEFAULT_BRANCH_PALETTE,
	contributionValue: 0,
	getCompletionRate: CompletionScoreCalculationMethodProvider.getByMethodName(ECompletionScoreCalculationMethod.PERCENTAGE),
	getConnections
}
