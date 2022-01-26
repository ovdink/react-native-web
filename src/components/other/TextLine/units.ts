import styled from '@emotion/native';

export const Wrapper = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    width: 100%;
    margin: 10px 0;
`;

export const Line = styled.View`
    flex: 1;

    width: 100%;
    height: 1px;

    background: rgba(206, 206, 208, 0.5);
`;

export const Text = styled.Text`
    flex: 0;

    width: 100%;
    margin: 0 10px;

    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: #d1d1d6; ;
`;
