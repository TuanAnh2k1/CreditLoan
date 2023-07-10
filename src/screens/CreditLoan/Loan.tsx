import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import GetColors from '../../utils/CommonColors';
import Swiper from 'react-native-swiper';

const Loan = (props: {navigation: any}) => {
  const {navigation} = props;
  const handleEditInfo = () => {
    navigation.navigate('FormRegister');
  };
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Pressable style={styles.itemMenu} onPress={handleEditInfo}>
          <View style={styles.viewImage}>
            <Image
              source={require('../../assets/loan.png')}
              style={styles.imagePay}
            />
          </View>
          <Text style={styles.textItem}>Vay Online</Text>
        </Pressable>
        <View style={styles.itemMenu}>
          <View style={styles.viewImage}>
            <Image
              source={require('../../assets/online-payment.png')}
              style={styles.imageOnline}
            />
          </View>
          <Text style={styles.textItem}>Thanh toán</Text>
        </View>
        <View style={styles.itemMenu}>
          <View style={styles.viewImage}>
            <Image
              source={require('../../assets/customer-support.png')}
              style={styles.imagePay}
            />
          </View>
          <Text style={styles.textItem}>Hỗ trợ</Text>
        </View>
        <View style={styles.itemMenu} />
      </View>
      <View style={styles.slideShow}>
        <Swiper style={styles.wrapper} autoplay={true}>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/slide_1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/slide_1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/slide_1.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.questions}>
        <Text style={styles.textQuestion}>Câu hỏi thường gặp</Text>
        <View style={styles.contentOther}>
          <Image
            source={require('../../assets/question.png')}
            style={styles.imageQuestion}
          />
          <View>
            <Text style={styles.totalText}>
              Tổng hợp những câu hỏi thắc mắc của khách hàng liên quan tới sản
              phẩm và dịch vụ của Mcredit
            </Text>
            <Text style={styles.next}>Xem ngay</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#f2f2f2',
  },
  menuContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    flex: 1,
  },
  itemMenu: {
    flex: 1,
    alignItems: 'center',
  },
  viewImage: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePay: {
    width: 32,
    height: 32,
    tintColor: '#0873ee',
  },
  imageOnline: {
    width: 32,
    height: 32,
    tintColor: '#fe821e',
  },
  imageQuestion: {
    width: 50,
    height: 50,
    tintColor: '#0873ee',
  },
  textItem: {
    justifyContent: 'center',
    alignItems: 'center',
    color: GetColors().BLACK900,
  },
  slideShow: {flex: 1, paddingHorizontal: 16},
  wrapper: {
    borderRadius: 16,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  questions: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  textQuestion: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 16,
    color: GetColors().BLACK900,
  },
  contentOther: {
    flexDirection: 'row',
    backgroundColor: '#f3f9ff',
    paddingHorizontal: 32,
    paddingVertical: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalText: {paddingHorizontal: 16},
  next: {paddingHorizontal: 16, color: '#0873ee', paddingVertical: 4},
});

export default Loan;
