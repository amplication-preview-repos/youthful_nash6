import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  description?: string | null;
  listedDate?: Date | null;
  price?: number | null;
};
