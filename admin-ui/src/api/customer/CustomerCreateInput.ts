import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  userRelated?: UserWhereUniqueInput | null;
};
