import {IBranch} from "./Branch";

export interface Repo {
	id: string;
	branches: IBranch[];
}
