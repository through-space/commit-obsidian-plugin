import {createContext, FC, useContext, useEffect, useState} from "react";
import {IMainContext, IMainContextProps} from "./MainContextTypes";
import {ObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProvider";
import {RepoProvider} from "../services/RepoProvider/RepoProvider";
import {defaultMainBranchID} from "../config/commonConsts";
import {IRepo} from "@logic/entities/Repo/Repo";

const MainContext = createContext<IMainContext>({});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({obsidianApp, children}) => {
	const [repo, setRepo] = useState<IRepo | null>(null);

	const fetchRepo = async () => {
		//TODO: add error handling
		const repoData = await RepoProvider.getRepoFromJson();
		setRepo(repoData);
	};

	useEffect(() => {
		fetchRepo();
	}, []);

	const context = {
		obsidianApp,
		obsidianFilesProvider: ObsidianFilesProvider(),
		repo,
		currentBranchID: repo ? repo.mainBranchID : defaultMainBranchID,
	};

	return (
		<MainContext.Provider value={context}>
			{children}
		</MainContext.Provider>
	);
};
