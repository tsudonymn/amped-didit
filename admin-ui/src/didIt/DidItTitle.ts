import { DidIt as TDidIt } from "../api/didIt/DidIt";

export const DIDIT_TITLE_FIELD = "id";

export const DidItTitle = (record: TDidIt): string => {
  return record.id || record.id;
};
