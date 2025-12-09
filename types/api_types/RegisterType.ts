export type RegisterData = {
  fullname: string;
  email: string;
  pswd: string;
};

export type RegisterResponse = {
  ok: boolean;
  status: number;
  data: {
    message: string;
    token?: string;
  };
};