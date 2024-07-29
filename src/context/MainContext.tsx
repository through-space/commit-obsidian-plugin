import {createContext, FC, useContext, useEffect, useState} from "react";
import {IMainContext, IMainContextProps} from "./MainContextTypes";
import {ObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProvider";
import {defaultMainBranchID} from "../config/commonConsts";
import {IRepo} from "@logic/entities/Repo/Repo";
import {RepoProviderFactory} from "../services/RepoProvider/RepoProviderFactory";
import {
	ERepoProviderType,
	IJsonRepoProviderConfig,
} from "../services/RepoProvider/RepoProviderInterfaces";
import {repoExampleJson} from "@data/repoExampleJson";

const MainContext = createContext<IMainContext>({});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({obsidianApp, children}) => {
	const [repo, setRepo] = useState<IRepo | null>(null);

	const fetchRepo = async () => {
		//TODO: add error handling
		const repoConfig: IJsonRepoProviderConfig = {
			type: ERepoProviderType.JSON,
			json: repoExampleJson
		};

		const repoProvider = RepoProviderFactory.getRepoProvider(repoConfig);
		const repoData = await repoProvider.getRepo(repoConfig);
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
