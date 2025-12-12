export type RegisterData = {
  fullname: string;
  email: string;
  pswd: string;
};

export type LoginData = {
  email: string;
  pswd: string;
};

export type WelcomeDataGet = {
  status: number;
  object: string;
};