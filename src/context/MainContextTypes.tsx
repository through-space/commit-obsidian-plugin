import {App} from "obsidian";
import {IObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProviderTypes";
import {TBranchID} from "../logic/Branch";

export interface IMainContextProps {
	obsidianApp: App;
	children: any;
}

export interface IMainContext {
	obsidianFilesProvider?: IObsidianFilesProvider;
	obsidianApp?: App;
	currentBranchID: TBranchID;
}