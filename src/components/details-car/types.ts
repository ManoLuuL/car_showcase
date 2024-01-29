import { CarProps } from "../card-car";

export type DetailsCarProps = {
  isOpen: boolean;
  onClose(): void;
  car: CarProps;
};
