import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import GetColors from '../../utils/CommonColors';
import Swiper from 'react-native-swiper';
import i18, {setI18nLanguage} from '../../i18n';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store';
import {changeLanguage} from '../../store/actions/actions';

const Loan = (props: {navigation: any}) => {
  const {navigation} = props;
  const language = useSelector((state: RootState) => state.auth.language);
  const dispatch = useDispatch();

  const handleEditInfo = () => {
    navigation.navigate('FormRegister');
  };
  const handleLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSupport = () => {
    navigation.navigate('Support');
  };

  const handleChangeLanguage = () => {
    let newLanguage = language === 'en' ? 'vn' : 'en';
    dispatch(changeLanguage(newLanguage));
    setI18nLanguage({auth: {language: newLanguage}});
  };

  const buttonBackgroundColor =
    language === 'vn' ? GetColors().MAIN : GetColors().REDNOTI;
  const buttonTextColor =
    language === 'vn' ? GetColors().WHITE : GetColors().BLACK900;

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
          <Text style={styles.textItem}>{i18.t('text.online_loan')}</Text>
        </Pressable>
        <Pressable style={styles.itemMenu} onPress={handleLogin}>
          <View style={styles.viewImage}>
            <Image
              source={require('../../assets/online-payment.png')}
              style={styles.imageOnline}
            />
          </View>
          <Text style={styles.textItem}>{i18.t('text.pay')}</Text>
        </Pressable>
        <Pressable style={styles.itemMenu} onPress={handleSupport}>
          <View style={styles.viewImage}>
            <Image
              source={require('../../assets/customer-support.png')}
              style={styles.imagePay}
            />
          </View>
          <Text style={styles.textItem}>{i18.t('text.support')}</Text>
        </Pressable>
        <View style={styles.itemMenu}>
          <TouchableOpacity
            onPress={handleChangeLanguage}
            style={[
              styles.languageButton,
              {backgroundColor: buttonBackgroundColor},
            ]}>
            <Text style={[styles.languageButtonText, {color: buttonTextColor}]}>
              {language === 'en' ? 'VN' : 'EN'}
            </Text>
          </TouchableOpacity>
        </View>
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
        <Text style={styles.textQuestion}>{i18.t('text.ask_question')}</Text>
        <View style={styles.contentOther}>
          <Image
            source={require('../../assets/question.png')}
            style={styles.imageQuestion}
          />
          <View>
            <Text style={styles.totalText}>
              {i18.t('text.all_ask_question')}
            </Text>
            <Text style={styles.next}>{i18.t('text.watch_now')}</Text>
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
  totalText: {
    paddingHorizontal: 16,
  },
  next: {
    paddingHorizontal: 16,
    color: '#0873ee',
    paddingVertical: 4,
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  languageButtonText: {
    fontSize: 16,
  },
});

export default Loan;
