import { Data } from 'src/app/shared/service/models/data.interface';

export interface FormObj extends Data {
  address: string;
  apartment: string;
  email: string;
  confirmEmail: string;
}
