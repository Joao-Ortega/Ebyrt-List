import { string } from "joi"

export interface IUserFromDb extends IInfosToCreate {
  id: number,
};

export interface IInfosToCreate {
  username: string,
  email: string,
  password: string,
}