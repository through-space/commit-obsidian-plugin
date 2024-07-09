import {useMainContext} from "../../../context/MainContext";
import {BranchNameTitle} from "../../styled_components/atoms/titles";

export const MainView = () => {
	const context = useMainContext();

	if (!context) {
		return null;
	}

	const {obsidianFilesProvider} = context;
	console.log("obsidianFilesProvider");
	console.log(obsidianFilesProvider);
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
