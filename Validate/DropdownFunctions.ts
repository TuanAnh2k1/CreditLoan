// DropdownFunctions.ts

import {
  validIncomeLevels,
  validItemsProducts,
  validProfessions,
} from './Validate';

export function validateProfession(profession: string): boolean {
  return validProfessions.includes(profession);
}

export function validateIncomeLevel(incomeLevel: string): boolean {
  return validIncomeLevels.includes(incomeLevel);
}

export function validItemsProduct(itemsProduct: string): boolean {
  return validItemsProducts.includes(itemsProduct);
}
