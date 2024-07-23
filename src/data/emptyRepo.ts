import {defaultMainBranchID} from "../config/commonConsts";
import {IRepo} from "@logic/entities/Repo/Repo";
import {CompletionRateMethodProvider} from "@logic/methods/completion/CompletionRateMethodProvider";
import {ECompletionRateMethod} from "@logic/methods/completion/CompletionRateMethodTypes";

export const emptyRepo: IRepo = {
	id: "1",
	branches: {
		[defaultMainBranchID]: {
			id: defaultMainBranchID,
			name: defaultMainBranchID,
			connections: [],
			contributionValue: 0,
			getCompletionPercentage: CompletionRateMethodProvider.getByMethodName(ECompletionRateMethod.PERCENTAGE),
			getParents: () => [],
		}
	},
	commits: {},
	mainBranchID: defaultMainBranchID
}