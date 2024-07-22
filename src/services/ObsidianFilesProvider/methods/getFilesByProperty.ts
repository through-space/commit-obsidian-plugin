import {TFile} from "obsidian";
import {getAllFiles} from "./getAllFiles";
import {useMainContext} from "../../../context/MainContext";

export const getFilesByProperty = (propertyName: string, propertyValue: string): TFile [] => {
	const {obsidianApp} = useMainContext()

	if (!obsidianApp) {
		return [];
	}

	return getAllFiles().filter(file => {
		const fileCache = obsidianApp.metadataCache.getFileCache(file);

		return fileCache
			&& fileCache.frontmatter?.hasOwnProperty(propertyName)
			&& fileCache.frontmatter[propertyName] === propertyValue;
	});
}
