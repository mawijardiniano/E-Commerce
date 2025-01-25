export interface BaseAuth {
  userId: string;
  exp: number;
  iat: number;
}

export interface UserData extends BaseAuth {
  name: string;
  email: string;
  userId: string;
}
