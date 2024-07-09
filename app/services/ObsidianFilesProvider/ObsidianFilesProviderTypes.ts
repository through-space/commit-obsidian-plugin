import {App, TFile} from "obsidian";


export interface IObsidianFilesProvider {
	app: App;
	getFileByNameProperty: (name: string) => TFile | null;
}

export interface IObsidianFilesProviderProps {
	app: App;
}
