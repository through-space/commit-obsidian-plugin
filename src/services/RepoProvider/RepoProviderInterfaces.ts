import {IRepo} from "@logic/entities/Repo/Repo";

export interface IRepoProvider {
	getRepoFromJson?: () => Promise<IRepo>
	getRepoFromObsidian?: () => Promise<IRepo>
}
