import { TransformedProps, TransformProps } from './types';
export declare function props2transform(props: TransformProps): TransformedProps;
export declare function transformToMatrix(props: TransformedProps, transform: number[] | string | TransformProps | void | undefined): [number, number, number, number, number, number];
export default function extractTransform(props: number[] | string | TransformProps): number[];
