import Block from "./block";
import IBlock from "./interfaces/IBlock";

class Blockchain {
    blockchain: IBlock[] = []
    constructor() {
        this.blockchain.push(this.createGenesisBlock().block);
    }

    createGenesisBlock() {
        return new Block({
            index: 0,
            hash: "0",
            previousHash: "0",
            data: {
                data: "Genesis Block"
            },
            sender: {
                id: "0"
            },
            receiver: {
                id: "0"
            },
            timestamp: new Date().getTime()
        });
    }

    getLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    addBlock(newBlock: Block) {
        newBlock.block.previousHash = this.getLatestBlock().hash;
        newBlock.block.hash = newBlock.calculateHash();
        this.blockchain.push(newBlock.block);
    }

    isChainValid() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];

            if (!Block.validateBlock(currentBlock, previousBlock)) {
                return false;
            }
        }
        return true;
    }
}

export default Blockchain;