import { GetSessionResponseTransformed } from 'api';

export interface EmailPassword {
	email: string;
	password: string;
}

export interface AuthSliceInterface {
	firebaseToken?: string;
	employeeID?: string;
	session?: GetSessionResponseTransformed;
	restrictions?: any;
	mode: string;
	isSocialLogin?: boolean;
	firebaseUser?: any;
	ip?: string;
	isConnected?: boolean;
	user?: any;
}

export interface LoginBody {
	memberID: string;
	domainID: string | null;
}
