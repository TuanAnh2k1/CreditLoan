export interface FormInputData {
  prefix: string;
  fullName: string;
  identification: string;
  address: string;
  phoneNumber: string;
  email: string;
  occupation: string;
  income: string;
  products: string;
  price: string;
  date: string;
  isCheckedAddress: boolean;
  isCheckedTerm: boolean;
}

export interface FormSubmissionData {
  prefix: string;
  fullName: string;
  identification: string;
  address: string;
  phoneNumber: string;
  email: string;
  occupation: string;
  income: string;
  products: string;
  price: string;
  date: string;
  isCheckedAddress: boolean;
  isCheckedTerm: boolean;
}

export interface FormState {
  loading: boolean;
  error: string;
  successMessage: string;
}

export interface DropdownState {
  isLoading: boolean;
  data: any[];
  error: string | null;
}
