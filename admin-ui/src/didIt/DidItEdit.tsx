import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DoItTitle } from "../doIt/DoItTitle";

export const DidItEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="doit.id" reference="DoIt" label="doit">
          <SelectInput optionText={DoItTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
