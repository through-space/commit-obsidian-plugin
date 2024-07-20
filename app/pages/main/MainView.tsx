import {useMainContext} from "context/MainContext";
import {BasicLayout} from "@components/organisms/layouts/BasicLayout/BasicLayout";

export const MainView = () => {
	const {obsidianFilesProvider} = useMainContext();

	if (!obsidianFilesProvider) {
		return null;
	}

	return (
		<>
			<BasicLayout/>
		</>
	);
};
