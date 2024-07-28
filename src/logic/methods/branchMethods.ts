import {EBranchConnectionType, IBranchConnection} from "@logic/entities/Branch/BranchInterfaces";
import {IBranch} from "@logic/entities/Branch/Branch";

export function getConnections(this: IBranch, connectionType?: EBranchConnectionType): IBranchConnection[] {
	return this.connections.filter(connection => connection.type === connectionType);
}
