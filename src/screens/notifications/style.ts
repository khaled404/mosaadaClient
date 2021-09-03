import styled from 'styled-components/native';

export const NotificationsContainer = styled.View`
  height: 85%;
  position: absolute;
  bottom: 0;
`;

export const NotificationsScroll = styled.FlatList.attrs((props: any) => ({
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: props.theme.appPaddingHorizontal,
  },
}))``;
