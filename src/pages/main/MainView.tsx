import {useMainContext} from "context/MainContext";
import {BasicLayout} from "@components/organisms/layouts/BasicLayout/BasicLayout";

export const MainView = () => {
	const {obsidianFilesProvider, repo, currentBranchID} = useMainContext();

	if (currentBranchID) {
		console.log("cur branch", repo?.getBranch(currentBranchID));
	}

	if (!obsidianFilesProvider) {
		return null;
	}

	console.log("repo", repo);

	return <BasicLayout/>;
};
