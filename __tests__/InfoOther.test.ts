import {validBranch, validChannel} from '../Validate/DropdownFunctions';
import jsonDataBranch from '../TestJson/Branch.json'; // Importing the data from the JSON file
import jsonDataChannel from '../TestJson/Channel.json'; // Importing the data from the JSON file

describe('InfoOther', () => {
  //Branch

  it('should return true for valid branchs', () => {
    // Choose a valid item directly, as we are not using jsonDataBranch
    const validBranchs = 'Chi nhánh Thái Bình';
    expect(validBranch(validBranchs, jsonDataBranch)).toBe(true);
  });

  it('should return false for invalid branchs', () => {
    // Choose an invalid item that does not exist in the data.json file
    const invalidBranch = 'Invalid Item';
    expect(validBranch(invalidBranch, jsonDataBranch)).toBe(false);
  });

  it('should return false for empty branchs', () => {
    // Choose an empty string, which is not a valid branchs
    const emptyBranch = '';
    expect(validBranch(emptyBranch, jsonDataBranch)).toBe(false);
  });

  //Channel

  it('should return true for valid channels', () => {
    // Choose a valid item directly, as we are not using jsonDataChannel
    const validChannels = 'Mail';
    expect(validChannel(validChannels, jsonDataChannel)).toBe(true);
  });

  it('should return false for invalid channels', () => {
    // Choose an invalid item that does not exist in the data.json file
    const invalidChannel = 'Invalid Item';
    expect(validChannel(invalidChannel, jsonDataChannel)).toBe(false);
  });

  it('should return false for empty channels', () => {
    // Choose an empty string, which is not a valid channels
    const emptyChannel = '';
    expect(validChannel(emptyChannel, jsonDataChannel)).toBe(false);
  });
});
