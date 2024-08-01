import {createContext, FC, useContext, useEffect, useState} from "react";
import {IMainContext, IMainContextProps} from "./MainContextTypes";
import {ObsidianFilesProvider} from "@services/ObsidianFilesProvider/ObsidianFilesProvider";
import {DEFAULT_MAIN_BRANCH_ID, DEFAULT_REPO_ID} from "@config/commonConsts";
import {IRepo} from "@logic/entities/Repo/Repo";
import {StorageProviderFactory} from "@services/StorageProvider/StorageProviderFactory";
import {activeStorageProviders} from "@config/storageConfig";
import {IStorageProviderConfig} from "@services/StorageProvider/StorageProviderInterfaces";

const MainContext = createContext<IMainContext>({});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC<IMainContextProps> = ({obsidianApp, children}) => {
	const [repo, setRepo] = useState<IRepo | null>(null);

	const fetchRepo = async () => {
		//TODO: add error handling
		const storageConfig: IStorageProviderConfig = {
			type: activeStorageProviders[0],
		};
		const storageProvider = StorageProviderFactory.getStorageProvider(storageConfig);

		const repo = await storageProvider.getRepo(DEFAULT_REPO_ID);
		setRepo(repo);
	};

	useEffect(() => {
		fetchRepo();
	}, []);

	const context = {
		obsidianApp,
		obsidianFilesProvider: ObsidianFilesProvider(),
		repo,
		currentBranchID: repo ? repo.mainBranchID : DEFAULT_MAIN_BRANCH_ID,
	};

	return (
		<MainContext.Provider value={context}>
			{children}
		</MainContext.Provider>
	);
};
