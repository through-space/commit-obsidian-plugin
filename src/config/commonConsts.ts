import {getCompletionRateByPercentage} from "@logic/methods/completion/CompletionRateMethods";
import {BranchPalettes, EBranchPalette} from "@logic/entities/BranchPalette/BranchPalettes";

export const commitKeyDateFormat = "YYYY-MM-DD";
export const DEFAULT_COMPLETION_RATE_METHOD = getCompletionRateByPercentage;
export const DEFAULT_MAIN_BRANCH_ID = "master";
export const DEFAULT_REPO_ID = "JsonTestRepo";
export const DEFAULT_BRANCH_PALETTE = BranchPalettes[EBranchPalette.GREEN];
