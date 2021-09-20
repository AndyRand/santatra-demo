import { Customer } from "../customer/Customer";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: Array<string>;
  customers?: Array<Customer>;
};
