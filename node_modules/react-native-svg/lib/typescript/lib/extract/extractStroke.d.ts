import { StrokeProps } from './types';
export default function extractStroke(props: StrokeProps, styleProperties: string[]): {
    stroke: number | (string | number)[] | null;
    strokeOpacity: number;
    strokeLinecap: number;
    strokeLinejoin: number;
    strokeDasharray: (string | number)[] | null;
    strokeWidth: string | number;
    strokeDashoffset: number | null;
    strokeMiterlimit: string | number;
    vectorEffect: number;
};
