import CryptoJS from "crypto-js";
import IBlock from "./interfaces/IBlock";
import IData from "./interfaces/IData";
import IUser from "./interfaces/IUser";

class Block {
    constructor(public block: IBlock) { }

    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: IData, sender: IUser, receiver: IUser): string => CryptoJS.SHA256(index + previousHash + timestamp + data.data + sender.id + receiver.id).toString();

    static validateBlock = (currentBlock: IBlock, previousBlock: IBlock): boolean => {
        if (currentBlock.index !== previousBlock.index + 1) {
            return false;
        } else if (currentBlock.previousHash !== previousBlock.hash) {
            return false;
        } else if (currentBlock.hash !== Block.calculateBlockHash(currentBlock.index, currentBlock.previousHash, currentBlock.timestamp, currentBlock.data, currentBlock.sender, currentBlock.receiver)) {
            return false;
        }
        return true;
    }

    calculateHash = (): string => Block.calculateBlockHash(this.block.index, this.block.previousHash, this.block.timestamp, this.block.data, this.block.sender, this.block.receiver);

    getTimestampForBlock = (timestamp: number): string => new Date(timestamp).toLocaleString("en-US", { hour12: false });

}

export default Block;