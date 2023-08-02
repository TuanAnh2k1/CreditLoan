import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
  LogBox,
  Linking,
} from 'react-native';
import _ from 'lodash';
import DropDownPicker from 'react-native-dropdown-picker';
import GetColors from '../../utils/CommonColors';
import {ScrollView} from 'react-native-gesture-handler';
import {NavBar} from '../../components';
import CheckBox from '../../components/CheckBox';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {register} from '../../store/actions/formActions';
import {TERM_URL} from '../../AppConstants/AppConstants';
import i18 from '../../i18n';
import {getProfessions} from '../../store/actions/occupationActions';
import {getIncome} from '../../store/actions/incomeActions';
import {getProduct} from '../../store/actions/productActions';
import {getChannel} from '../../store/actions/channelAction';

const mapStateToProps = (state: RootState) => ({
  isLoading: state.registration.isLoading,
  error: state.registration.error,
  itemsOccupation: state.occupation.data,
  itemsIncome: state.income.data,
  itemsProduct: state.product.data,
  itemsChannel: state.channel.data,
});

const mapDispatchToProps = {
  register,
  getProfessions,
  getIncome,
  getProduct,
  getChannel,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  navigation: any;
};

const FormRegister: React.FC<Props> = ({
  navigation,
  isLoading,
  error,
  register,
  itemsOccupation,
  getProfessions,
  itemsIncome,
  getIncome,
  itemsProduct,
  getProduct,
  itemsChannel,
  getChannel,
}) => {
  const [prefix, setPrefix] = useState('');
  const [fullName, setFullName] = useState('');
  const [identification, setIdentification] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [income, setIncome] = useState('');
  const [products, setProducts] = useState('');
  const [price, setPrice] = useState('');
  const [addressBranch, setAddressBrand] = useState('');
  const [date, setDate] = useState('');
  const [code, setCode] = useState('');
  const [isCheckedAddress, setIsCheckedAddress] = useState(false);

  const [isCheckedTerm, setIsCheckedTerm] = useState(false);

  //check isNull

  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [isIdentification, setIsIdentification] = useState(true);
  const [isAddress, setIsAddress] = useState(true);
  const [isPhoneNumber, setIsPhoneNumber] = useState(true);
  const [isEmail, setIsEmail] = useState(true);

  //data
  const [formData, setFormData] = useState({
    fullName: '',
    identification: '',
    address: '',
    phoneNumber: '',
    email: '',
    occupation: '',
    income: '',
    products: '',
    price: '',
    date: '',
    isCheckedAddress: false,
    isCheckedTerm: false,
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getProfessions();
    getIncome();
    getProduct();
    getChannel();
  }, []);

  const [itemsPrefix, setItemsPrefix] = useState([
    {label: 'Ông', value: 'ong'},
    {label: 'Bà', value: 'ba'},
  ]);
  const [openPrefix, setOpenPrefix] = useState(false);

  const [openOccupation, setOpenOccupation] = useState(false);

  const [openIncome, setOpenIncome] = useState(false);

  const [openProducts, setOpenProducts] = useState(false);

  const [checkedItems, setCheckedItems] = useState({});

  const handleRegistration = () => {
    switch (true) {
      case _.isEmpty(fullName):
        setIsFullNameValid(false);
        break;
      case _.isEmpty(identification):
        setIsIdentification(false);
        break;
      case _.isEmpty(address):
        setIsAddress(false);
        break;
      case _.isEmpty(phoneNumber):
        setIsPhoneNumber(false);
        break;
      case _.isEmpty(email):
        setIsEmail(false);
        break;
      default:
        register(formData);
        break;
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckedAddress(!isCheckedAddress);
  };

  const handleChangeTerm = () => {
    setIsCheckedTerm(!isCheckedTerm);
  };

  const handlePressTerm = async () => {
    const url = TERM_URL;

    if (await Linking.canOpenURL(url)) {
      return Linking.openURL(url);
    }

    return Linking.openURL(url);
  };

  const handleCheckboxChangeChannel = (value: any, checked: any) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [value]: checked,
    }));
  };

  return (
    <>
      <NavBar
        title={i18.t('text.form_register')}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menuId}>1</Text>
          <Text style={styles.menuText}>{i18.t('text.info_profile')}</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.mr_mrs')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder={i18.t('text.mr')}
            open={openPrefix}
            value={prefix}
            items={itemsPrefix}
            setValue={setPrefix}
            setItems={setItemsPrefix}
            setOpen={setOpenPrefix}
          />
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.full_name')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={fullName}
            onChangeText={text => {
              setFullName(text);
              setIsFullNameValid(!_.isEmpty(text.trim()));
            }}
            placeholder={i18.t('text.full_name')}
            style={[styles.input, !isFullNameValid && styles.invalidInput]}
          />
          {!isFullNameValid && (
            <Text style={styles.errorText}>
              {i18.t('text.error_full_name')}
            </Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.identification')}</Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={identification}
            onChangeText={text => {
              setIdentification(text);
              setIsIdentification(!_.isEmpty(text.trim()));
            }}
            placeholder={i18.t('text.input_identification')}
            keyboardType="numeric"
            style={[styles.input, !isIdentification && styles.invalidInput]}
          />
          {!isIdentification && (
            <Text style={styles.errorText}>
              {i18.t('text.error_identification')}
            </Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.address')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={address}
            onChangeText={text => {
              setAddress(text);
              setIsAddress(!_.isEmpty(text.trim()));
            }}
            placeholder={i18.t('text.input_address')}
            style={[styles.input, !isAddress && styles.invalidInput]}
          />
          <View style={styles.fomart}>
            <Image
              source={require('../../assets/info.png')}
              style={styles.fomartImage}
            />
            <Text style={styles.fomartText}>
              {i18.t('text.format_address')}
            </Text>
          </View>
          {!isAddress && (
            <Text style={styles.errorText}>{i18.t('text.error_address')}</Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.phone_number')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
              setIsPhoneNumber(!_.isEmpty(text.trim()));
            }}
            placeholder={i18.t('text.input_phone_number')}
            keyboardType="numeric"
            style={[styles.input, !isPhoneNumber && styles.invalidInput]}
          />
          {!isPhoneNumber && (
            <Text style={styles.errorText}>
              {i18.t('text.error_phone_number')}
            </Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.email')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
              setIsEmail(!_.isEmpty(text.trim()));
            }}
            placeholder={i18.t('text.input_email')}
            style={[styles.input, !isEmail && styles.invalidInput]}
          />
          {!isEmail && (
            <Text style={styles.errorText}>{i18.t('text.error_email')}</Text>
          )}
        </View>

        <View style={styles.formGroup}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.job')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder={i18.t('text.choose')}
            open={openOccupation}
            value={occupation}
            items={itemsOccupation}
            setValue={setOccupation}
            setOpen={setOpenOccupation}
          />
        </View>

        <View style={styles.formGroupIncome}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>
              {i18.t('text.average_income')}{' '}
            </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder={i18.t('text.choose')}
            open={openIncome}
            value={income}
            items={itemsIncome}
            setValue={setIncome}
            setOpen={setOpenIncome}
          />
        </View>
        <View style={styles.menu2}>
          <Text style={styles.menuId}>2</Text>
          <Text style={styles.menuText}>{i18.t('text.service_info')}</Text>
        </View>
        <View style={styles.formGroupProducts}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.loan_products')} </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder={i18.t('text.choose')}
            open={openProducts}
            value={products}
            items={itemsProduct}
            setValue={setProducts}
            setOpen={setOpenProducts}
          />
        </View>
        <View style={styles.formGroupText2}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>
              {i18.t('text.estimated_loan')}{' '}
            </Text>
          </View>
          <TextInput
            value={price ? parseInt(price, 10).toLocaleString('vi-VN') : ''}
            keyboardType="numeric"
            onChangeText={text => setPrice(text.replace(/[^0-9]/g, ''))}
            style={styles.input}
          />
          <Text style={styles.labelText}>VNĐ </Text>
        </View>
        <View style={styles.formGroupText2}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.borrowed_time')} </Text>
          </View>
          <TextInput
            value={date}
            keyboardType="numeric"
            onChangeText={text => setDate(text)}
            style={styles.input}
          />
          <Text style={styles.labelText}>{i18.t('text.month')} </Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuId}>3</Text>
          <Text style={styles.menuText}>{i18.t('text.other_info')}</Text>
        </View>
        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>
              {i18.t('text.choosing_branch')}{' '}
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title={i18.t('text.same_contacts')}
              value={isCheckedAddress}
              onValueChange={handleCheckboxChange}
            />
          </View>
          <TextInput
            value={date}
            placeholder={i18.t('text.address_other')}
            onChangeText={text => setAddressBrand(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>{i18.t('text.you_know_info')}</Text>
          </View>
          {itemsChannel.map((item: any) => (
            <View key={item.value} style={styles.checkboxContainer}>
              <CheckBox
                title={item.label}
                value={checkedItems[item.value]}
                onValueChange={checked =>
                  handleCheckboxChangeChannel(item.value, checked)
                }
              />
            </View>
          ))}
        </View>
        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>
                {i18.t('text.code_captcha')}{' '}
              </Text>
              <Text style={styles.labelStar}>*</Text>
            </View>
          </View>
          <TextInput
            value={code}
            onChangeText={text => setAddressBrand(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.contentCaptcha}>
          <Image
            source={require('../../assets/captcha.png')}
            style={styles.captcha}
          />
          <Pressable>
            <Image
              source={require('../../assets/sync.png')}
              style={styles.reload}
            />
          </Pressable>
        </View>
        <View style={styles.contentCaptcha}>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title=""
              value={isCheckedTerm}
              onValueChange={handleChangeTerm}
            />
            <Pressable style={styles.contentTerm} onPress={handlePressTerm}>
              <Text style={styles.text}>
                {i18.t('text.my_agree')}{' '}
                <Text style={styles.highlightedText}>{i18.t('text.term')}</Text>{' '}
                {i18.t('text.service_register')}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Pressable onPress={handleRegistration} style={styles.button}>
        <Text style={styles.buttonText}>{i18.t('text.register')}</Text>
      </Pressable>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexGrow: 1},
  formGroup: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: GetColors().WHITE,
    paddingBottom: 10,
  },
  formGroupText: {
    paddingHorizontal: 16,
    backgroundColor: GetColors().WHITE,
    paddingBottom: 10,
    zIndex: -5,
  },
  formGroupIncome: {
    paddingHorizontal: 16,
    backgroundColor: GetColors().WHITE,
    paddingBottom: 10,
    zIndex: -4,
  },
  formGroupProducts: {
    paddingHorizontal: 16,
    backgroundColor: GetColors().WHITE,
    paddingBottom: 10,
    zIndex: -6,
  },
  formGroupText2: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: GetColors().WHITE,
    paddingBottom: 10,
    zIndex: -7,
  },
  menu: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    backgroundColor: GetColors().WHITE,
  },
  menu2: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    backgroundColor: GetColors().WHITE,
    zIndex: -5,
  },
  menuId: {
    backgroundColor: GetColors().BORDER,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    color: GetColors().BLACK900,
    padding: 8,
    borderBottomColor: GetColors().BORDER,
    borderBottomWidth: 1,
  },
  menuText: {
    flex: 1,
    color: GetColors().BLACK900,
    padding: 8,
    borderBottomColor: GetColors().BORDER,
    borderBottomWidth: 1,
  },
  labelContent: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  labelText: {
    color: GetColors().BLACK900,
  },
  labelStar: {
    color: GetColors().RED500,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 8,
  },
  invalidInput: {
    borderColor: GetColors().RED500,
  },
  errorText: {
    color: GetColors().RED500,
  },
  pickerContainer: {
    marginBottom: 8,
    height: 40,
  },
  button: {
    backgroundColor: '#00524e',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contentCaptcha: {
    flexDirection: 'row',
    backgroundColor: GetColors().WHITE,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  captcha: {
    width: 108,
    height: 48,
  },
  reload: {
    width: 28,
    height: 28,
  },
  fomart: {
    flexDirection: 'row',
    paddingTop: 6,
  },
  fomartImage: {
    width: 24,
    height: 24,
  },
  fomartText: {
    fontSize: 12,
    paddingHorizontal: 4,
  },
  contentTerm: {
    flex: 1,
    paddingRight: 4,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  highlightedText: {
    color: '#0873ee',
    fontWeight: 'bold',
  },
});

export default connector(FormRegister);
