import {DEFAULT_BRANCH_PALETTE, DEFAULT_MAIN_BRANCH_ID} from "../config/commonConsts";
import {IRepo} from "@logic/entities/Repo/Repo";
import {
	CompletionScoreCalculationMethodProvider
} from "@logic/methods/completion/CompletionScoreCalculationMethodProvider";
import {ECompletionScoreCalculationMethod} from "@logic/methods/completion/CompletionScoreCalculationMethodTypes";
import {createBranchID, getBranch} from "@services/StorageProvider/common/repoMethods";

export const emptyRepo: IRepo = {
	id: "empty_repo_1",
	branches: {
		[DEFAULT_MAIN_BRANCH_ID]: {
			id: DEFAULT_MAIN_BRANCH_ID,
			name: DEFAULT_MAIN_BRANCH_ID,
			connections: [],
			contributionValue: 0,
			commits: {},
			getCompletionRate: CompletionScoreCalculationMethodProvider.getByMethodName(ECompletionScoreCalculationMethod.PERCENTAGE),
			getConnections: () => [],
			palette: DEFAULT_BRANCH_PALETTE,
		}
	},
	getBranch,
	createBranchID,
	mainBranchID: DEFAULT_MAIN_BRANCH_ID
}
