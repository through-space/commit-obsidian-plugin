import {IObsidianFilesProvider, IObsidianFilesProviderProps} from "./ObsidianFilesProviderTypes";
import {getFileByNameProperty} from "./methods/getFileByNameProperty";

export const ObsidianFilesProvider = (props: IObsidianFilesProviderProps): IObsidianFilesProvider => {
	const {app} = props;

	return {
		app,
		getFileByNameProperty: getFileByNameProperty(app)
	};
}
