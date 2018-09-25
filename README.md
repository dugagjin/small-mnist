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
    "input": number[][];
    "output": number[][];
    "label": number;
}[];
```

Input and output fields are in binary label not.

## Author

Dugagjin Lashi

## License

MIT
