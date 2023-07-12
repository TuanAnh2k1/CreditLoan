// ValidationFunctions.ts

export function validateName(name: string): boolean {
  // Kiểm tra logic và trả về true hoặc false tùy thuộc vào sự hợp lệ của tên
  // Ví dụ:
  return /^[a-zA-Z ]+$/.test(name);
}

export function validateID(id: string): boolean {
  // Kiểm tra logic và trả về true hoặc false tùy thuộc vào sự hợp lệ của CCCD/Hộ chiếu
  // Ví dụ:
  return /^\d+$/.test(id);
}

export function normalizeAddress(address: string): string {
  // Chuẩn hóa địa chỉ và trả về địa chỉ đã chuẩn hóa
  // Ví dụ:
  return address.trim();
}

export function normalizePhoneNumber(phoneNumber: string): string {
  // Chuẩn hóa số điện thoại và trả về số điện thoại đã chuẩn hóa
  // Ví dụ:
  return phoneNumber.replace(/\s/g, '');
}

export function validateEmail(email: string): boolean {
  // Kiểm tra logic và trả về true hoặc false tùy thuộc vào sự hợp lệ của email
  // Ví dụ:
  return /^\S+@\S+\.\S+$/.test(email);
}
