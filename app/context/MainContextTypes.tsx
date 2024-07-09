import {App} from "obsidian";
import {IObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProviderTypes";

export interface IMainContextProps {
	obsidianApp: App;
	children: any;
}

export interface IMainContext {
	obsidianFilesProvider: IObsidianFilesProvider;
}
