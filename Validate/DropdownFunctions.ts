// DropdownFunctions.ts

import {validIncomeLevels, validProfessions} from './Validate';

export function validateProfession(profession: string): boolean {
  return validProfessions.includes(profession);
}

export function validateIncomeLevel(incomeLevel: string): boolean {
  return validIncomeLevels.includes(incomeLevel);
}
