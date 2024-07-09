import {createContext, FC, useContext} from "react";
import {IMainContext, IMainContextProps} from "./MainContextTypes";
import {ObsidianFilesProvider} from "../services/ObsidianFilesProvider/ObsidianFilesProvider";

const MainContext = createContext<IMainContext|undefined>(undefined);

export const useMainContext = (): IMainContext | undefined => {
	return useContext(MainContext);
};

export const MainContextProvider: FC <IMainContextProps> = ({obsidianApp, children}) => {
	const context = {
		obsidianFilesProvider: ObsidianFilesProvider({app: obsidianApp}),
	};

	return (
		<MainContext.Provider value={context}>
			{children}
		</MainContext.Provider>
	);
};
