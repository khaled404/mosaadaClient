import styled from 'styled-components/native';

export const Header = styled.Text(({theme}) => ({
  alignSelf: 'center',
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(35),
  color: theme.colors.main,
  paddingTop: theme.statusBarHeight + 15,
}));

export const Content = styled.View`
  background-color: #fff;
  height: 60%;
  width: 100%;
  border-bottom-left-radius: 180px;
  border-bottom-right-radius: 180px;
  align-items: center;
  z-index: -1;
`;

export const Amount = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(85),
  color: theme.colors.main,
  paddingTop: theme.pixel(70),
}));

export const Currency = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(35),
  color: theme.colors.main,
}));

export const AddButton = styled.TouchableOpacity(({theme}) => ({
  width: theme.pixel(162),
  height: theme.pixel(162),
  backgroundColor: theme.colors.main,
  borderRadius: 100,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.mediaQuery(788, theme.pixel(100), theme.pixel(135), 'h'),
}));

export const PlusText = styled.Text(({theme}) => ({
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(85),
  color: '#fff',
}));

export const RecordsContainer = styled.View`
  background-color: #fff;
  height: ${({theme}) => theme.mediaQuery(788, '47%', '48%', 'h')};
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

export const RecordsHeader = styled.Text(({theme}) => ({
  alignSelf: 'center',
  fontFamily: theme.fonts.bold,
  fontSize: theme.pixel(35),
  color: theme.colors.main,
  paddingTop: 10,
  paddingBottom: 10,
}));

export const RecordsScroll = styled.FlatList.attrs((props: any) => ({
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: props.theme.appPaddingHorizontal,
  },
}))``;
