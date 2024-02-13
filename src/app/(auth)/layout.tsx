import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <div className='bg-gray-900 p-10 rounded-md max-w-[480px] mx-auto my-10'>{children}</div>;
};

export default AuthLayout;