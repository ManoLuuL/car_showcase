export type CarProps = {
  city_mpg: number;
  className: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type CardCarProps = {
  car: CarProps;
};
