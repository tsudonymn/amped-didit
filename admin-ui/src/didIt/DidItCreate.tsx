import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DoItTitle } from "../doIt/DoItTitle";

export const DidItCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="doit.id" reference="DoIt" label="doit">
          <SelectInput optionText={DoItTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
