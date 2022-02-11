import { DoIt } from "../doIt/DoIt";

export type DidIt = {
  createdAt: Date;
  doit?: DoIt | null;
  id: string;
  updatedAt: Date;
};
