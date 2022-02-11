import { DoItWhereInput } from "./DoItWhereInput";
import { DoItOrderByInput } from "./DoItOrderByInput";

export type DoItFindManyArgs = {
  where?: DoItWhereInput;
  orderBy?: DoItOrderByInput;
  skip?: number;
  take?: number;
};
