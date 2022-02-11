import { DoIt as TDoIt } from "../api/doIt/DoIt";

export const DOIT_TITLE_FIELD = "name";

export const DoItTitle = (record: TDoIt): string => {
  return record.name || record.id;
};
