import styled from 'styled-components/native';

export const SettingsContainer = styled.View`
  background-color: #fff;
  height: ${({theme}) => theme.mediaQuery(788, '67%', '73%', 'h')};
  width: 90%;
  align-self: center;
  border: solid 1px rgba(112, 112, 112, 0.17);
  border-radius: ${({theme}) => theme.pixel(35)};
  transform: ${({theme}) => `translateY(${theme.pixel(-20)})`};
  position: absolute;
  bottom: 0;
  overflow: hidden;
  padding: ${({theme}) => theme.pixel(5)} 0;
`;

export const SettingsScroll = styled.ScrollView.attrs((props: any) => ({
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: props.theme.appPaddingHorizontal,
  },
}))``;
