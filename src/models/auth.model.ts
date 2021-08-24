import { SubjectModel } from './$.model';

interface UserInfo {
  auth0Id: string;
  email?: string;
}

export type Auth = {
  /** access token */
  accessToken: string;
  /** token id */
  idToken: string;
  /** token expiration date */
  expiresAt: number;
  /** get user info */
  userInfo: UserInfo;
};

export type AuthSubject = SubjectModel<Auth | undefined>;

// const subject: AuthSubject = new BehaviorSubject({
//   data: undefined,
//   status: undefined,
//   error: null,
// });

// const service = new AuthService(subject, document.location.origin);

// export const globalAuth = {
//   subject,
//   service
// };
