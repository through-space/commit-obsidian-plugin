import {App, TFile} from "obsidian";


export interface IObsidianFilesProvider {
	getFilesByProperty: (propertyName: string, propertyValue: string) => TFile [];
}

export interface IObsidianFilesProviderProps {
	app: App;
}
