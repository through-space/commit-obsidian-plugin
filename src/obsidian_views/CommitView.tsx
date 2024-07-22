import {ItemView, WorkspaceLeaf} from "obsidian";
import {Root, createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {MainView} from "../pages/main/MainView";
import {MainContextProvider} from "../context/MainContext";
import {VIEW_TYPE_EXAMPLE} from "./ViewsConsts";

export class CommitView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_EXAMPLE;
	}

	getDisplayText() {
		return "Commit";
	}

	async onOpen() {
		// const container = this.containerEl.children[1];
		// container.empty();
		// container.createEl("h4", { text: "Example view" });

		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<MainContextProvider obsidianApp={this.app}>
					<MainView/>
				</MainContextProvider>
			</StrictMode>
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}
