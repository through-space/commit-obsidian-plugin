import {useMainContext} from "context/MainContext";
import {BasicLayout} from "@components/organisms/layouts/BasicLayout/BasicLayout";

export const MainView = () => {
	const {obsidianFilesProvider, repo} = useMainContext();

	if (!obsidianFilesProvider) {
		return null;
	}

	console.log(repo);

	return <BasicLayout/>;
};
