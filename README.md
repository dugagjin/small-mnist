# Small mnist dataset

600 training data and 100 test data of the mnist dataset. Meant to be small for quick demonstrations.

## Install

```bash
npm install --save small-mnist
```

## How to load

```ts
import { test, train } from 'small-mnist';
```

type of test and train is:
```ts
{
    "input": number[];      // monochrome pixels of e.g. letter 2 (1 or 0)
    "output": number[];     // e.g. [0, 0, 1, 0, 0, 0, 0, 0, 0, 0] (means 2)
    "label": number;        // e.g. 2
}[];
```

Input and output fields are in binary label not.

## Author

Dugagjin Lashi

## License

MIT
