import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerUpdateInput = {
  userRelated?: UserWhereUniqueInput | null;
};
