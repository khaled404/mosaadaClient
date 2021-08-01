export interface IButton {
  style?: string;
  onPress?: () => void;
  textStyle?: string;
  title: string;
  isLoading?: boolean;
}

export interface IQueryErorr {
  response: {
    data: any;
    config: any;
  };
}

export interface NavigationProps {
  goBack?: () => void;
  openDrawer?: () => void;
  navigate?: any;
  replace?: any;
  reset?: any;
  params?: any;
  name?: string;
}
