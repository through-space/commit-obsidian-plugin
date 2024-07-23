import * as dayjs from "dayjs";

export interface IDoCommitProps {
	message: string;
	value?: number;
}

export interface ICommit {
	message: string;
	occurredAt: dayjs.Dayjs
	value: number;
}
