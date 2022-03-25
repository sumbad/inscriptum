interface UserInfo {
  uid: string;
  email: string | null;
}

export type Auth = {
  /** access token */
  accessToken: string;
  /** token expiration date */
  expiresAt: number;
  /** get user info */
  userInfo: UserInfo;
};
