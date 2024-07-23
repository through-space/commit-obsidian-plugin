import {IBranchCompletionRateMethod} from "../../entities/Branch/BranchInterfaces";
import {getCompletionRateByPercentage} from "./CompletionRateMethods";

export enum ECompletionRateMethod {
	PERCENTAGE = "PERCENTAGE",
	AVERAGE = "AVERAGE",
	AT_LEAST_ONE = "AT_LEAST_ONE",
}

export interface ICompletionRateMethodProvider {
	getByMethodName: (methodName: ECompletionRateMethod) => IBranchCompletionRateMethod;
}

export const CompletionRateMethodsMap = new Map<ECompletionRateMethod, IBranchCompletionRateMethod>(
	[
		[ECompletionRateMethod.PERCENTAGE, getCompletionRateByPercentage]
	]
);
