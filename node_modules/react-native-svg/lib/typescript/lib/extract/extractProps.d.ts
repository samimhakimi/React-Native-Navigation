import { ClipProps, FillProps, NumberProp, ResponderProps, StrokeProps, TransformProps } from './types';
import { Component } from 'react';
export declare function propsAndStyles(props: Object & {
    style?: [] | {};
}): any;
export default function extractProps(props: {
    id?: string;
    mask?: string;
    marker?: string;
    markerStart?: string;
    markerMid?: string;
    markerEnd?: string;
    clipPath?: string;
    display?: string;
    opacity?: NumberProp;
    onLayout?: () => void;
    transform?: number[] | string | TransformProps;
} & TransformProps & ResponderProps & StrokeProps & FillProps & ClipProps, ref: Object): {
    name?: string | undefined;
    mask?: string | undefined;
    opacity: number;
    matrix: number[];
    propList: string[];
    onLayout?: (() => void) | undefined;
    ref?: ((instance: Component<{}, {}, any> | null) => void) | undefined;
    markerStart?: string | undefined;
    markerMid?: string | undefined;
    markerEnd?: string | undefined;
    clipPath?: string | undefined;
    clipRule?: number | undefined;
    display?: string | undefined;
};
export declare function extract(instance: Object, props: Object & {
    style?: [] | {};
}): {
    name?: string | undefined;
    mask?: string | undefined;
    opacity: number;
    matrix: number[];
    propList: string[];
    onLayout?: (() => void) | undefined;
    ref?: ((instance: Component<{}, {}, any> | null) => void) | undefined;
    markerStart?: string | undefined;
    markerMid?: string | undefined;
    markerEnd?: string | undefined;
    clipPath?: string | undefined;
    clipRule?: number | undefined;
    display?: string | undefined;
};
export declare function withoutXY(instance: Object, props: Object & {
    style?: [] | {};
}): {
    name?: string | undefined;
    mask?: string | undefined;
    opacity: number;
    matrix: number[];
    propList: string[];
    onLayout?: (() => void) | undefined;
    ref?: ((instance: Component<{}, {}, any> | null) => void) | undefined;
    markerStart?: string | undefined;
    markerMid?: string | undefined;
    markerEnd?: string | undefined;
    clipPath?: string | undefined;
    clipRule?: number | undefined;
    display?: string | undefined;
};
