import testCompressed from './test';
import trainCompressed from './train';
import { decode } from 'run-length';

interface compressedLetter {
    input: number[][];
    output: number[][];
    label: number;
}

const format = ({ input, output, label }: compressedLetter) => ({
    input: decode(input as [number, number][]),
    output: decode(output as [number, number][]),
    label
});

const test = testCompressed.map(format);
const train = trainCompressed.map(format);

export { test, train };
