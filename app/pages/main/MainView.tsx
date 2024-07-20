import {useMainContext} from "context/MainContext";
import {BranchNameTitle} from "components/atoms/headers/titles";
import {TopInfoSection} from "components/organisms/view-sections/TopInfoSection/TopInfoSection";

export const MainView = () => {
	const {obsidianFilesProvider} = useMainContext();

	if (!obsidianFilesProvider) {
		return null;
	}

	return (
		<>
			<BranchNameTitle>
				I am the title!
				*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
				Hello again! (exclamation sign from AI)
			</BranchNameTitle>
			<h4>Hello, React!</h4>
			<TopInfoSection/>
		</>
	);
};
