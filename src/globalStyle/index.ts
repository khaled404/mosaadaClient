import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.appBackground};
  ${(props: any) => props.style}
`;
export const Content = styled.ScrollView.attrs((props: any) => ({
  contentContainerStyle: {
    paddingVertical: props.theme.appPaddingVertical,
    paddingHorizontal: props.theme.appPaddingHorizontal,
    ...props?.contentContainerStyle,
  },
}))`
  ${(props: any) => props.style}
`;
