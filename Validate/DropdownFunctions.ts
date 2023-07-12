// DropdownFunctions.ts

export function validateProfession(profession: string): boolean {
  // Kiểm tra logic và trả về true hoặc false tùy thuộc vào sự hợp lệ của nghề nghiệp
  // Ví dụ:
  const validProfessions = ['Lập trình viên', 'Kỹ sư', 'Giáo viên'];
  return validProfessions.includes(profession);
}

export function validateIncomeLevel(incomeLevel: string): boolean {
  // Kiểm tra logic và trả về true hoặc false tùy thuộc vào sự hợp lệ của mức thu nhập
  // Ví dụ:
  const validIncomeLevels = [
    'Dưới 5 triệu',
    'Từ 5 triệu đến 10 triệu',
    'Trên 10 triệu',
  ];
  return validIncomeLevels.includes(incomeLevel);
}
