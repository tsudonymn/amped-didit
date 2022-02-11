import { DidItWhereInput } from "./DidItWhereInput";
import { DidItOrderByInput } from "./DidItOrderByInput";

export type DidItFindManyArgs = {
  where?: DidItWhereInput;
  orderBy?: DidItOrderByInput;
  skip?: number;
  take?: number;
};
