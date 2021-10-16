interface ICreateUserDTO {
  id?: string;
  name?: string;
  password: string;
  email: string;
  admin?: boolean;
}

export { ICreateUserDTO }
