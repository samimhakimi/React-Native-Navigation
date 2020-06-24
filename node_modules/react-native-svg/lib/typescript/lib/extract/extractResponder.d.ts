import { ResponderInstanceProps, ResponderProps } from './types';
export default function extractResponder(props: {
    [x: string]: any;
} & ResponderProps, ref: ResponderInstanceProps): {
    [touchableProperty: string]: unknown;
};
