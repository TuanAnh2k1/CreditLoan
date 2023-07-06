import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import GetColors from '../../utils/CommonColors';
import {ScrollView} from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerNavbar}>
        <Text style={styles.navbar}>Thông tin cá nhân</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>GIỚI THIỆU</Text>
          {/* <Image
            source={require('../../assets/edit.png')}
            style={styles.imageEdit}
          /> */}
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/gift-box.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Ngày sinh: </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Giới tính: </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>THÔNG TIN LIÊN HỆ</Text>
          <Image
            source={require('../../assets/edit.png')}
            style={styles.imageEdit}
          />
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/locator.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Địa chỉ thường chú: </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/locator.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Địa chỉ hiện tại: </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/email.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Email: </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>THÔNG TIN GIẤY TỜ TÙY THÂN</Text>
          {/* <Image
            source={require('../../assets/edit.png')}
            style={styles.imageEdit}
          /> */}
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/document.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>
            Loại giấy tờ: Căn cước công dân/Số hộ chiếu
          </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/document.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Số giấy tờ: </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/calendar.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Ngày cấp: </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/locator.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Nơi cấp: </Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../assets/calendar.png')}
            style={styles.image}
          />
          <Text style={styles.textContent}>Ngày hết hạn: </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerNavbar: {
    borderBottomWidth: 1,
    borderBottomColor: '#eef0f1',
  },
  navbar: {
    color: GetColors().BLACK900,
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    paddingVertical: 16,
  },
  content: {
    marginHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eef0f1',
  },
  imageEdit: {
    width: 24,
    height: 24,
    tintColor: '#0873ee',
  },
  image: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
  textHeader: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  textContent: {
    paddingLeft: 16,
    color: GetColors().BLACK900,
  },
});

export default Profile;
