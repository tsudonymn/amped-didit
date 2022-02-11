import { DidIt } from "../didIt/DidIt";

export type DoIt = {
  createdAt: Date;
  description: string | null;
  didIts?: Array<DidIt>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
