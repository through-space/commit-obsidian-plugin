import {useMainContext} from "../../context/MainContext";

export const MainView = () => {
	const context = useMainContext();

	if (!context) {
		return null;
	}

	const {obsidianFilesProvider} = context;
	console.log("obsidianFilesProvider");
	console.log(obsidianFilesProvider);
	console.log("obsidianFilesProvider");

	return <h4>Hello, React!</h4>;
};
