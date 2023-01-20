import IData from "./IData";
import IUser from "./IUser";

export default interface IBlock {
    index: number;
    hash: string;
    previousHash: string;
    sender: IUser;
    receiver: IUser;
    data: IData;
    timestamp: number;
}