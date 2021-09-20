import { User } from "../user/User";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userRelated?: User | null;
};
