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
import DropDownPicker from 'react-native-dropdown-picker';
import GetColors from '../../utils/CommonColors';
import {ScrollView} from 'react-native-gesture-handler';
import {NavBar} from '../../components';
import CheckBox from '../../components/CheckBox';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {register} from '../../store/actions/formActions';

const connector = connect(
  (state: RootState) => ({
    isLoading: state.registration,
    error: state.registration,
  }),
  {register},
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  navigation: any;
};

const FormRegister: React.FC<Props> = ({
  navigation,
  isLoading,
  error,
  register,
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
  const [isCheckedInternet, setIsCheckedInternet] = useState(false);
  const [isCheckedSMS, setIsCheckedSMS] = useState(false);
  const [isCheckedTelevision, setIsCheckedTelevision] = useState(false);
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
  }, []);

  const [itemsPrefix, setItemsPrefix] = useState([
    {label: 'Ông', value: 'ong'},
    {label: 'Bà', value: 'ba'},
  ]);
  const [openPrefix, setOpenPrefix] = useState(false);

  const [itemsOccupation, setItemsOccupation] = useState([
    {label: 'Lập trình viên', value: 'developer'},
    {label: 'Kỹ sư', value: 'engineer'},
    {label: 'Giáo viên', value: 'teacher'},
  ]);
  const [openOccupation, setOpenOccupation] = useState(false);

  const [itemsIncome, setItemsIncome] = useState([
    {label: 'Dưới 5 triệu', value: 'under_5m'},
    {label: 'Từ 5 triệu đến 10 triệu', value: '5m_to_10m'},
    {label: 'Trên 10 triệu', value: 'above_10m'},
  ]);
  const [openIncome, setOpenIncome] = useState(false);

  const [itemsProducts, setItemsProducts] = useState([
    {label: 'Sản phẩm cho vay nhu cầu nhà ở', value: '1'},
    {label: 'Sản phẩm cho vay sản xuất kinh doanh', value: '2'},
    {label: 'Sản phẩm cho vay mua ô tô', value: '3'},
    {label: 'Sản phẩm cho vay bằng bất dộng sản', value: '4'},
    {label: 'Sản phẩm cho vay tiêu dùng không có tài sản nào', value: '5'},
  ]);
  const [openProducts, setOpenProducts] = useState(false);

  const handleRegistration = () => {
    switch (true) {
      case fullName === '':
        setIsFullNameValid(false);
        break;
      case identification === '':
        setIsIdentification(false);
        break;
      case address === '':
        setIsAddress(false);
        break;
      case phoneNumber === '':
        setIsPhoneNumber(false);
        break;
      case email === '':
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

  const handleChangeInternet = () => {
    setIsCheckedInternet(!isCheckedInternet);
  };

  const handleChangeSMS = () => {
    setIsCheckedSMS(!isCheckedSMS);
  };

  const handleChangeTelevision = () => {
    setIsCheckedTelevision(!isCheckedTelevision);
  };

  const handleChangeTerm = () => {
    setIsCheckedTerm(!isCheckedTerm);
  };

  const handlePressTerm = async () => {
    const url = 'https://ebank.bidv.com.vn/DKNHDT/term.htm'; // Thay thế bằng URL điều khoản của bạn

    // Kiểm tra xem thiết bị có hỗ trợ WebView hay không
    if (await Linking.canOpenURL(url)) {
      // Mở WebView để hiển thị liên kết
      return Linking.openURL(url);
    }

    // Thiết bị không hỗ trợ WebView, xử lý theo cách khác
    // Ví dụ: mở liên kết trong trình duyệt mặc định
    return Linking.openURL(url);
  };

  return (
    <>
      <NavBar title="Form Đăng Ký" onPressLeft={() => navigation.goBack()} />
      <ScrollView style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.menuId}>1</Text>
          <Text style={styles.menuText}>Thông tin cá nhân</Text>
        </View>
        <View style={styles.formGroup}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Danh xưng </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder="Ông"
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
            <Text style={styles.labelText}>Họ và tên </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={fullName}
            onChangeText={text => {
              setFullName(text);
              setIsFullNameValid(text.trim() !== ''); // Kiểm tra giá trị không rỗng
            }}
            placeholder="Nhập họ và tên"
            style={[styles.input, !isFullNameValid && styles.invalidInput]}
          />
          {!isFullNameValid && (
            <Text style={styles.errorText}>Vui lòng nhập họ và tên</Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Số CMT/hộ chiếu </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={identification}
            onChangeText={text => {
              setIdentification(text);
              setIsIdentification(text.trim() !== ''); // Kiểm tra giá trị không rỗng
            }}
            placeholder="Nhập số CMT/hộ chiếu"
            keyboardType="numeric"
            style={[styles.input, !isIdentification && styles.invalidInput]}
          />
          {!isIdentification && (
            <Text style={styles.errorText}>Vui lòng nhập số CMT/hộ chiếu</Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Địa chỉ </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={address}
            onChangeText={text => {
              setAddress(text);
              setIsAddress(text.trim() !== ''); // Kiểm tra giá trị không rỗng
            }}
            placeholder="Nhập địa chỉ"
            style={[styles.input, !isAddress && styles.invalidInput]}
          />
          <View style={styles.fomart}>
            <Image
              source={require('../../assets/info.png')}
              style={styles.fomartImage}
            />
            <Text style={styles.fomartText}>
              Định dạng: "Số nhà - Đường - Phường/Xã - Quận/Huyện - Tỉnh/thành"
            </Text>
          </View>
          {!isAddress && (
            <Text style={styles.errorText}>Vui lòng nhập địa chỉ</Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Số điện thoại liên hệ </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
              setIsPhoneNumber(text.trim() !== ''); // Kiểm tra giá trị không rỗng
            }}
            placeholder="Nhập số điện thoại"
            keyboardType="numeric"
            style={[styles.input, !isPhoneNumber && styles.invalidInput]}
          />
          {!isPhoneNumber && (
            <Text style={styles.errorText}>Vui lòng nhập số điện thoại</Text>
          )}
        </View>

        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Email </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <TextInput
            value={email}
            onChangeText={text => {
              setEmail(text);
              setIsEmail(text.trim() !== ''); // Kiểm tra giá trị không rỗng
            }}
            placeholder="Nhập email"
            style={[styles.input, !isEmail && styles.invalidInput]}
          />
          {!isEmail && (
            <Text style={styles.errorText}>Vui lòng nhập email</Text>
          )}
        </View>

        <View style={styles.formGroup}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Nghề nghiệp </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder="Chọn"
            open={openOccupation}
            value={occupation}
            items={itemsOccupation}
            setValue={setOccupation}
            setItems={setItemsOccupation}
            setOpen={setOpenOccupation}
          />
        </View>

        <View style={styles.formGroupIncome}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Thu nhập bình quân </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder="Chọn"
            open={openIncome}
            value={income}
            items={itemsIncome}
            setValue={setIncome}
            setItems={setItemsIncome}
            setOpen={setOpenIncome}
          />
        </View>
        <View style={styles.menu2}>
          <Text style={styles.menuId}>2</Text>
          <Text style={styles.menuText}>Thông tin đăng ký dịch vụ</Text>
        </View>
        <View style={styles.formGroupProducts}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Sản phẩm vay </Text>
            <Text style={styles.labelStar}>*</Text>
          </View>
          <DropDownPicker
            containerStyle={styles.pickerContainer}
            placeholder="Chọn"
            open={openProducts}
            value={products}
            items={itemsProducts}
            setValue={setProducts}
            setItems={setItemsProducts}
            setOpen={setOpenProducts}
          />
        </View>
        <View style={styles.formGroupText2}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Số tiền vay dự kiến </Text>
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
            <Text style={styles.labelText}>Thời gian vay </Text>
          </View>
          <TextInput
            value={date}
            keyboardType="numeric"
            onChangeText={text => setDate(text)}
            style={styles.input}
          />
          <Text style={styles.labelText}>tháng </Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.menuId}>3</Text>
          <Text style={styles.menuText}>Thông tin khác</Text>
        </View>
        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>Lựa chọn chi nhánh tư vấn </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Cùng khu vực với địa chỉ liên lạc"
              value={isCheckedAddress}
              onValueChange={handleCheckboxChange}
            />
          </View>
          <TextInput
            value={date}
            placeholder="Địa chỉ khác"
            onChangeText={text => setAddressBrand(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <Text style={styles.labelText}>
              Quý khách biết đến SP vay của BIDV từ kênh thông tin nào?
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Internet"
              value={isCheckedInternet}
              onValueChange={handleChangeInternet}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Tin nhắn SMS"
              value={isCheckedSMS}
              onValueChange={handleChangeSMS}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              title="Tivi/Radio"
              value={isCheckedTelevision}
              onValueChange={handleChangeTelevision}
            />
          </View>
        </View>
        <View style={styles.formGroupText}>
          <View style={styles.labelContent}>
            <View style={styles.labelContent}>
              <Text style={styles.labelText}>Mã CAPTCHA (MÃ xác thực) </Text>
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
                Tôi đồng ý với{' '}
                <Text style={styles.highlightedText}>điều khoản điều kiện</Text>{' '}
                đăng ký dịch vụ
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <Pressable onPress={handleRegistration} style={styles.button}>
        <Text style={styles.buttonText}>Đăng ký</Text>
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
