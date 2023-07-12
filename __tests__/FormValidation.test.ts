import {validateName} from '../Validate/ValidationFunctions';
import {validateID} from '../Validate/ValidationFunctions';
import {normalizeAddress} from '../Validate/ValidationFunctions';
import {normalizePhoneNumber} from '../Validate/ValidationFunctions';
import {validateEmail} from '../Validate/ValidationFunctions';
import {validateProfession} from '../Validate/DropdownFunctions';
import {validateIncomeLevel} from '../Validate/DropdownFunctions';

describe('Form Validation', () => {
  it('should validate the "Họ và tên" field', () => {
    const validName = 'John Doe';
    const invalidName = 'John123';

    expect(validateName(validName)).toBe(true);
    expect(validateName(invalidName)).toBe(false);
  });

  it('should validate the "CCCD/Hộ chiếu" field', () => {
    const validID = '123456789';
    const invalidID = 'ABC123';

    expect(validateID(validID)).toBe(true);
    expect(validateID(invalidID)).toBe(false);
  });

  it('should normalize the "Địa chỉ" field', () => {
    const address = '   123 Street, City   ';
    const normalizedAddress = '123 Street, City';

    expect(normalizeAddress(address)).toBe(normalizedAddress);
  });

  it('should normalize the "Số điện thoại liên hệ" field', () => {
    const phoneNumber = '  0123456789   ';
    const normalizedPhoneNumber = '0123456789';

    expect(normalizePhoneNumber(phoneNumber)).toBe(normalizedPhoneNumber);
  });

  it('should validate the "Email" field', () => {
    const validEmail = 'test@example.com';
    const invalidEmail = 'invalidemail';

    expect(validateEmail(validEmail)).toBe(true);
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  it('should validate the selected "Nghề nghiệp" from dropdown', () => {
    const validProfession = 'Lập trình viên';
    const invalidProfession = 'Lập trình';

    expect(validateProfession(validProfession)).toBe(true);
    expect(validateProfession(invalidProfession)).toBe(false);
  });

  it('should validate the selected "Thu nhập bình quân" from dropdown', () => {
    const validIncomeLevel = 'Dưới 5 triệu';
    const invalidIncomeLevel = 'Dưới 5';

    expect(validateIncomeLevel(validIncomeLevel)).toBe(true);
    expect(validateIncomeLevel(invalidIncomeLevel)).toBe(false);
  });
});
