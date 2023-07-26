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

export function validBranch(
  itemsProduct: string,
  jsonData: Array<any>,
): boolean {
  const validBranchs = jsonData.map(item => item.value);
  return validBranchs.includes(itemsProduct);
}

export function validChannel(
  itemsProduct: string,
  jsonData: Array<any>,
): boolean {
  const validChannels = jsonData.map(item => item.value);
  return validChannels.includes(itemsProduct);
}
