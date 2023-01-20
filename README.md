Chain

This project is a simple blockchain project.
First, a blockchain is created. New blocks are added to this created chain.

npm install

npm run build

npm run start

Example Result

```json
[
  {
    index: 0,
    hash: '0',
    previousHash: '0',
    data: { data: 'Genesis Block' },
    sender: { id: '0' },
    receiver: { id: '0' },
    timestamp: 1674239261687
  },
  {
    index: 1,
    hash: '8f2792628b25223451ccbc7a5fa5137fb14a95803086ed174296afa97c5ca68a',
    previousHash: '0',
    data: { data: 'Hello World' },
    sender: { id: '2810fa5c-062c-4cc5-b252-def3ba65f298' },
    receiver: { id: '29ffadc5-8890-4649-9f27-379cc470360a' },
    timestamp: 1674239261688
  },
  {
    index: 2,
    hash: '3cca7ed486486168be606f2cbe41a9ee9404dc30d61d043d92bbbfd37a84c6a3',
    previousHash: '8f2792628b25223451ccbc7a5fa5137fb14a95803086ed174296afa97c5ca68a',
    data: { data: 'Hello World' },
    sender: { id: '2810fa5c-062c-4cc5-b252-def3ba65f298' },
    receiver: { id: '29ffadc5-8890-4649-9f27-379cc470360a' },
    timestamp: 1674239261688
  }
]
```