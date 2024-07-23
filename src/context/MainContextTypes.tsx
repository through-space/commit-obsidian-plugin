import {App} from "obsidian";
import {IObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProviderTypes";
import {IRepo} from "@logic/entities/Repo/Repo";
import {TBranchID} from "@logic/entities/Branch/BranchInterfaces";

export interface IMainContextProps {
	obsidianApp: App;
	children: any;
}

export interface IMainContext {
	obsidianApp?: App;
	obsidianFilesProvider?: IObsidianFilesProvider;
	currentBranchID?: TBranchID;
	repo?: IRepo | null;
}
