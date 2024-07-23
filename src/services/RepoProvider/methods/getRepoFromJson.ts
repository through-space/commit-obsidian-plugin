import {repoExample} from "@data/repoExample";
import {emptyRepo} from "@data/emptyRepo";
import {IRepo} from "@logic/entities/Repo/Repo";

export const getRepoFromJson = async (): Promise<IRepo> => {
	console.log(repoExample);

	return Promise.resolve(emptyRepo);
}
