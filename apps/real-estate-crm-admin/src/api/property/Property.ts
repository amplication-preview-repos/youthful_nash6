import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  id: string;
  listedDate: Date | null;
  price: number | null;
  updatedAt: Date;
};
