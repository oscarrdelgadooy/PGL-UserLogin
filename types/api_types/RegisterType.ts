export type RegisterData = {
  fullname: string;
  email: string;
  pswd: string;
};

export type LoginData = {
  email: string;
  pswd: string;
};

export type LoginResult = {
  object: {
    ok: boolean;
    status: number;
    token: string;
  };
};
