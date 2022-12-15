import React, { createContext, FC, ReactNode, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export interface IAuthContextProps {
	user: any;
	setUser?(...args: unknown[]): unknown;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthContextProviderProps {
	children: ReactNode;
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
	const data: string | null = localStorage.getItem('user');
	const [user, setUser] = useState<string>(data ? JSON.parse(data) : "");

	const value = useMemo(
		() => ({
			user,
			setUser
		}),
		[user],
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
