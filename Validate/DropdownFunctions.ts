// DropdownFunctions.ts

import {validIncomeLevels, validProfessions} from './Validate';

export function validateProfession(profession: string): boolean {
  return validProfessions.includes(profession);
}

export function validateIncomeLevel(incomeLevel: string): boolean {
  return validIncomeLevels.includes(incomeLevel);
}

export function validItemsProduct(
  itemsProduct: string,
  jsonData: Array<any>,
): boolean {
  const validItemsProducts = jsonData.map(item => item.value);
  return validItemsProducts.includes(itemsProduct);
}
