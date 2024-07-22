import {IObsidianFilesProvider} from "./ObsidianFilesProviderTypes";
import {getFilesByProperty} from "./methods/getFilesByProperty";

export const ObsidianFilesProvider = (): IObsidianFilesProvider => {
	return {
		getFilesByProperty
	};
}
