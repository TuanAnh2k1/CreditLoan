import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import NavBar from '../../../components/NavBar';
import Autocomplete from 'react-native-autocomplete-input';
import DropDownPicker from 'react-native-dropdown-picker';

const provinces = [
  {id: 1, name: 'Hà Nội'},
  {id: 2, name: 'Hồ Chí Minh'},
  {id: 3, name: 'Đà Nẵng'},
  // Thêm các tỉnh/thành phố khác vào đây
];

const districts = [
  {id: 1, provinceId: 1, name: 'Quận Ba Đình'},
  {id: 2, provinceId: 1, name: 'Quận Hoàn Kiếm'},
  {id: 3, provinceId: 1, name: 'Quận Tây Hồ'},
  {id: 4, provinceId: 2, name: 'Quận 1'},
  {id: 5, provinceId: 2, name: 'Quận 2'},
  {id: 6, provinceId: 2, name: 'Quận 3'},
  // Thêm các quận/huyện khác vào đây
];

const ContactInfo = (props: {navigation: any}) => {
  const {navigation} = props;

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [address, setAddress] = useState('');

  const handleProvinceChange = value => {
    const province = provinces.find(p => p.id === value);
    setSelectedProvince(province);
    setSelectedDistrict(null);
  };

  const handleDistrictChange = value => {
    const district = districts.find(d => d.id === value);
    setSelectedDistrict(district);
  };

  const renderDistricts = () => {
    if (selectedProvince) {
      const filteredDistricts = districts.filter(
        district => district.provinceId === selectedProvince.id,
      );
      return (
        <DropDownPicker
          items={filteredDistricts.map(district => ({
            label: district.name,
            value: district.id,
          }))}
          defaultValue={selectedDistrict ? selectedDistrict.id : null}
          placeholder="Chọn quận/huyện"
          onChangeValue={value => handleDistrictChange(value)}
        />
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <NavBar
        title="Cập nhật thông tin cá nhân"
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <DropDownPicker
          items={provinces.map(province => ({
            label: province.name,
            value: province.id,
          }))}
          defaultValue={selectedProvince ? selectedProvince.id : null}
          placeholder="Chọn tỉnh/thành phố"
          onChangeValue={value => handleProvinceChange(value)}
        />
        {renderDistricts()}
        {selectedDistrict && (
          <TextInput
            value={address}
            onChangeText={text => setAddress(text)}
            placeholder="Nhập địa chỉ"
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
});

export default ContactInfo;
