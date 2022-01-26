import { ReactElement, ReactNode } from 'react';

export type TColorSheme = 'primary' | 'secondary';

export interface IButton {
    children?: ReactElement | string;
    onClick?: () => void;
    width?: string;
    colorSheme?: TColorSheme;
    icon?: ReactNode | string;
    iconPosition?: 'left' | 'right';
    iconSize?: { w: number; h: number };
}
