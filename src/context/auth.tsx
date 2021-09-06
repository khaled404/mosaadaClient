import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {getItem, removeItem, saveItem} from '../constants/helpers';
import {AsyncKeys} from '../types/enums';

type User = {
  email: string;
  avatar: string;
  name: string;
  phone: string;
  active: number;
  api_token: string;
};

type AuthContextType = {
  user?: User;
  login: (user: any, cb?: () => void) => Promise<any>;
  logout: (cb: () => void) => Promise<any>;
  isLogin: boolean | null;
  setIsLogin: (status: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element | null => {
  const [user, setUser] = useState<AuthContextType['user']>(undefined);
  const [isLogin, setIsLogin] = useState<AuthContextType['isLogin']>(null);

  useEffect(() => {
    getItem(AsyncKeys.USER_DATA).then(data => {
      setUser(data);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLogin,
      setIsLogin: (status: boolean) => {
        setIsLogin(status);
      },
      login: async (userData: any, cb = () => {}) => {
        cb();
        await saveItem(AsyncKeys.USER_DATA, userData);
        setUser(userData);
        console.log(userData);
      },
      logout: async (cb: () => void) => {
        cb();
        await removeItem(AsyncKeys.USER_DATA);
        setUser(undefined);
      },
    }),
    [user, isLogin],
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw Error('useAuth should be used within <AuthProvider />');
  return context;
};
