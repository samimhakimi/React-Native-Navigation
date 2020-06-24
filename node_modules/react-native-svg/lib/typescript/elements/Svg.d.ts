/// <reference types="react" />
import { MeasureOnSuccessCallback, MeasureLayoutOnSuccessCallback, MeasureInWindowOnSuccessCallback } from 'react-native';
import { Color, ClipProps, FillProps, NumberProp, StrokeProps, ResponderProps, TransformProps } from '../lib/extract/types';
import Shape from './Shape';
export default class Svg extends Shape<{
    color?: Color;
    style?: [] | {};
    viewBox?: string;
    opacity?: NumberProp;
    onLayout?: () => void;
    preserveAspectRatio?: string;
} & TransformProps & ResponderProps & StrokeProps & FillProps & ClipProps> {
    static displayName: string;
    static defaultProps: {
        preserveAspectRatio: string;
    };
    measureInWindow: (callback: MeasureInWindowOnSuccessCallback) => void;
    measure: (callback: MeasureOnSuccessCallback) => void;
    measureLayout: (relativeToNativeNode: number, onSuccess: MeasureLayoutOnSuccessCallback, onFail: () => void) => void;
    setNativeProps: (props: Object & {
        width?: string | number | undefined;
        height?: string | number | undefined;
        bbWidth?: string | number | undefined;
        bbHeight?: string | number | undefined;
    }) => void;
    toDataURL: (callback: () => void, options?: Object | undefined) => void;
    render(): JSX.Element;
}
export declare const RNSVGSvg: any;
