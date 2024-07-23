import * as dayjs from "dayjs";

export interface ICommit {
	message: string;
	timestamp: dayjs.Dayjs
	value: number;
}
