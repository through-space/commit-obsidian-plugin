import {createContext, FC, useContext} from "react";
import {IMainContext, IMainContextProps} from "./MainContextTypes";
import {ObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProvider";

const MainContext = createContext<IMainContext>({});

export const useMainContext = (): IMainContext => {
	return useContext(MainContext);
};

export const MainContextProvider: FC <IMainContextProps> = ({obsidianApp, children}) => {
	const context = {
		obsidianApp,
		obsidianFilesProvider: ObsidianFilesProvider(),
	};

	return (
		<MainContext.Provider value={context}>
			{children}
		</MainContext.Provider>
	);
};
