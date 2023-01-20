import Block from "./block";
import Blockchain from "./blockchain";
import {v4 as uuidv4} from 'uuid';

const blockchain = new Blockchain();

const user1 = {
    id: uuidv4()
}

const user2 = {
    id: uuidv4()
}

const data = {
    data: "Hello World"
}

const block1 = new Block({
    index: 1,
    hash: "",
    previousHash: "",
    data,
    sender: user1,
    receiver: user2,
    timestamp: new Date().getTime()
});

const block2 = new Block({
    index: 2,
    hash: "",
    previousHash: "",
    data,
    sender: user1,
    receiver: user2,
    timestamp: new Date().getTime()
});

blockchain.addBlock(block1);
blockchain.addBlock(block2);

console.log(blockchain.isChainValid());

console.log(blockchain.blockchain);
