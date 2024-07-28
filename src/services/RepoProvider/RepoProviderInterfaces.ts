import {IRepo} from "@logic/entities/Repo/Repo";

export enum ERepoProviderType {
	JSON = "JSON",
	MOCKUP = "MOCKUP",
	OBSIDIAN = "OBSIDIAN"
}

export interface IRepoProviderProps {
	type: ERepoProviderType;
}

export interface IJsonRepoProviderProps extends IRepoProviderProps {
	path: string;
}

export interface IMockupRepoProviderProps extends IRepoProviderProps {
	repo: IRepo;
}

export type IObsidianRepoProviderProps = IRepoProviderProps


export interface IRepoProviderConfig {
	type: ERepoProviderType;
}

export interface IRepoProvider {
	getRepo: (config: IRepoProviderConfig) => Promise<IRepo>
}

export interface IJsonRepoProviderConfig extends IRepoProviderConfig {
	json: string;
}

export interface IRepoProviderFactory {
	getRepoProvider: (config: IRepoProviderConfig) => IRepoProvider
}
