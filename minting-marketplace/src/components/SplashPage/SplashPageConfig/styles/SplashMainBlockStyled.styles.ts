import styled from 'styled-components';

export type TDefaultThemeType = {
  colors: {
    mainBlock: string;
  };
  mobile: string;
};

export type ISplashMainBlockWrapper = {
  widthDiff?: string;
  heightDiff?: string;
  bgColor?: string;
  borderRadius: string;
};

export type IImageBlock = {
  widthDiff?: string;
  heightDiff?: string;
  marginLeft?: string;
};

export const SplashMainBlockWrapper = styled.div<ISplashMainBlockWrapper>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius || '24px'};
  background-color: ${({ bgColor }) => bgColor || 'none'};
  width: ${({ widthDiff }) => widthDiff || '1200px'};
  height: ${({ heightDiff }) => heightDiff || '694px'};
`;

export const ImageBlock = styled.img<IImageBlock>`
  width: ${({ widthDiff }) => widthDiff || '1200px'};
  height: ${({ heightDiff }) => heightDiff || '694px'};
  margin-right: ${({ marginLeft }) => marginLeft || '35px'};
`;
