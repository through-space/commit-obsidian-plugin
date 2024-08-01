import {
	CompletionRateMethodsMap,
	ECompletionRateMethod,
	ICompletionRateMethodProvider
} from "./CompletionRateMethodTypes";
import {defaultCompletionRateMethod} from "../../../config/commonConsts";

export const CompletionRateMethodProvider: ICompletionRateMethodProvider = {
	getByMethodName: (methodName: ECompletionRateMethod) => {
		const method = CompletionRateMethodsMap.get(methodName);
		return method || defaultCompletionRateMethod;
	}
};
