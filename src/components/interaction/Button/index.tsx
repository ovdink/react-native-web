import React, { FC } from 'react';

// import { S } from './units';
import * as S from './units';
import * as T from './types';

export const Button: FC<T.IButton> = (props) => {
    return (
        // <TouchableOpacity style={S.button}>
        //     <Text>{children}</Text>
        // </TouchableOpacity>

        <S.Button
            onPress={props.onClick}
            width={props.width}
            colorSheme={props.colorSheme}
            {...props}
        >
            {props.iconPosition === 'left' && props.icon && (
                // @ts-ignore: source prop
                <S.Image source={{ uri: props.icon }} w={props.iconSize?.w} h={props.iconSize?.h} />
            )}

            <S.Text colorSheme={props.colorSheme}>{props.children}</S.Text>

            {props.iconPosition === 'right' && props.icon && (
                // @ts-ignore: source prop
                <S.Image source={{ uri: props.icon }} w={props.iconSize?.w} h={props.iconSize?.h} />
            )}
        </S.Button>
    );
};

Button.defaultProps = { iconPosition: 'left' };
