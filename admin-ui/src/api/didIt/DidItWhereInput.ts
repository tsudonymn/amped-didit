import { DoItWhereUniqueInput } from "../doIt/DoItWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DidItWhereInput = {
  doit?: DoItWhereUniqueInput;
  id?: StringFilter;
};
