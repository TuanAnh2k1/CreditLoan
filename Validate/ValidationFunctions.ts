// ValidationFunctions.ts

export const NAME_REGEX = /^[a-zA-Z ]+$/;
export const ID_REGEX = /^\d+$/;
export const PHONE_REGEX = /\s/g;
export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
export const AMOUNT_REGEX = /^\d+$/;
export const DURATION_REGEX = /^\d+$/;

export function validateName(name: string): boolean {
  return NAME_REGEX.test(name);
}

export function validateID(id: string): boolean {
  return ID_REGEX.test(id);
}

export function normalizeAddress(address: string): string {
  return address.trim();
}

export function normalizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(PHONE_REGEX, '');
}

export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function validateAmount(amount: string): boolean {
  return AMOUNT_REGEX.test(amount);
}

export function validateDuration(duration: string): boolean {
  return DURATION_REGEX.test(duration);
}
