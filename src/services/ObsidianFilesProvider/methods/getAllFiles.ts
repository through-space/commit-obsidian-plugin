import {TFile} from "obsidian";
import {useMainContext} from "../../../context/MainContext";
import {getProjectsPath} from "./getProjectsPath";

export const getAllFiles = (): TFile [] => {
	const {obsidianApp} = useMainContext()

	if (!obsidianApp) {
		return [];
	}

	const projectPath = getProjectsPath();
	return obsidianApp?.vault.getFiles().filter(file =>
		file.path.startsWith(projectPath)
	);
}
