import {repoExampleJson} from "@data/repoExampleJson";
import {emptyRepo} from "@data/emptyRepo";
import {IRepo} from "@logic/entities/Repo/Repo";
import {IRepoProvider} from "../RepoProviderInterfaces";

export const JsonRepoProvider: IRepoProvider = {
	getRepo
}

	// async (json): Promise<IRepo> => {
	// console.log("hello");
	// console.log(repoExampleJson);
	//
	// return Promise.resolve(emptyRepo);
}
