import {useMainContext} from "../../../context/MainContext";
import {BranchNameTitle} from "../../styled_components/atoms/titles";

export const MainView = () => {
	const {obsidianFilesProvider} = useMainContext();

	if (!obsidianFilesProvider) {
		return null;
	}
	
	console.log("obsidianFilesProvider");
	console.log(obsidianFilesProvider.getFilesByProperty('name', 'test1'));
	console.log("obsidianFilesProvider");

	return (
		<>
			<BranchNameTitle>
				I am the title
			</BranchNameTitle>
			<h4>Hello, React!</h4>
		</>
	);
};
