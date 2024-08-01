export enum EBranchPalette {
	GREEN = "GREEN",
	RED = "RED",
	BLUE = "BLUE",
	OCEAN = "OCEAN",
}

export type IBranchPalette = Record<EBranchPalette, string[]>;

export const BranchPalettes: IBranchPalette = {
	[EBranchPalette.GREEN]: ["#003300", "#006600", "#009900", "#00CC00", "#00FF00"],
	[EBranchPalette.RED]: ["#330000", "#660000", "#990000", "#CC0000", "#FF0000"],
	[EBranchPalette.BLUE]: ["#000033", "#000066", "#000099", "#0000CC", "#0000FF"],
	[EBranchPalette.OCEAN]: ["#003333", "#006666", "#009999", "#00CCCC", "#00FFFF"],
};
