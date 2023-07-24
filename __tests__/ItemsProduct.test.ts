import {validItemsProduct} from '../Validate/DropdownFunctions';
import jsonData from '../TestJson/ItemsProduct.json'; // Importing the data from the JSON file

describe('ItemsProduct', () => {
  it('should return true for valid items product', () => {
    // Choose a valid item directly, as we are not using jsonData
    const validItemProduct = 'Sản phẩm cho vay nhu cầu nhà ở';
    expect(validItemsProduct(validItemProduct, jsonData)).toBe(true);
  });

  it('should return false for invalid items product', () => {
    // Choose an invalid item that does not exist in the data.json file
    const invalidItemProduct = 'Invalid Item';
    expect(validItemsProduct(invalidItemProduct, jsonData)).toBe(false);
  });

  it('should return false for empty item product', () => {
    // Choose an empty string, which is not a valid item product
    const emptyItemProduct = '';
    expect(validItemsProduct(emptyItemProduct, jsonData)).toBe(false);
  });
});
