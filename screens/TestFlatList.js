//This an auto generated file for Artboard Name = OnboardingGuide And Supports ReactNative Ver. = 0.62
import react from 'react';
import {
  SafeAreaView,
  Dimensions,
  PixelRatio,
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
//Artboard Dimension
let artBoardHeightOrg = 896;
let artBoardWidthOrg = 414;
//Re calculated Artboard Dimension
let artBoardWidth = isSameRatio() ? artBoardWidthOrg : screenWidth;
let artBoardHeight = isSameRatio() ? artBoardHeightOrg : screenHeight;
// To check if Artboard and Device screen has same ratio
function isSameRatio() {
  return (
    artBoardWidthOrg / artBoardHeightOrg < 1 && screenWidth / screenHeight < 1
  );
}

//Top or Bottom nav spaces or any extra space occupied by os e.g Status bar, Notch
let extraSpace = 0;
const Web3 = require('web3');
function deviceBasedDynamicDimension(
  originalDimen,
  compareWithWidth,
  resizeFactor,
) {
  if (originalDimen != null) {
    if (resizeFactor != null) {
      originalDimen *= resizeFactor;
    }
    const compareArtBoardDimenValue = compareWithWidth
      ? artBoardWidth
      : artBoardHeight;
    const artBoardScreenDimenRatio =
      (originalDimen * 100) / compareArtBoardDimenValue;
    let compareCurrentScreenDimenValue = compareWithWidth
      ? screenWidth
      : screenHeight - extraSpace;
    if (Platform.OS === 'web') {
      return (
        responsiveWidth(originalDimen / compareCurrentScreenDimenValue) * 100
      );
    }
    return PixelRatio.roundToNearestPixel(
      (artBoardScreenDimenRatio * compareCurrentScreenDimenValue) / 100,
    );
  }
  return null;
}

const INITIAL_DATA = [
  {name: 'A'},
  {name: 'B'},
  {name: 'C'},
  {name: 'D'},
  {name: 'E'},
  {name: 'F'},
  {name: 'A'},
  {name: 'B'},
  {name: 'C'},
  {name: 'D'},
  {name: 'E'},
  {name: 'F'},
];

export default class TestFlatList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidMount() {}

  renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: screenWidth / 2 - 30,
          height: 200,
          borderWidth: 1,
          elevation: 2,
          marginVertical: 10,
        }}>
        <Text>{item.name}</Text>
      </View>
    );
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.OnboardingGuideView}>
          <FlatList
            data={INITIAL_DATA}
            // horizontal
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          />
          <Text> ADARSH SHARMA</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  OnboardingGuideView: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
  },

  image_BgImage: {
    height: screenHeight,
    width: screenWidth,
    opacity: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  closeView: {
    position: 'absolute',
    width: deviceBasedDynamicDimension(30, true, 1),
    height: deviceBasedDynamicDimension(30, false, 1),
    justifyContent: 'center',
    top: deviceBasedDynamicDimension(55, false, 1),
    left: deviceBasedDynamicDimension(22, true, 1),
    // zIndex: 5,
  },

  image_CloseImage: {
    width: deviceBasedDynamicDimension(24, true, 1),
    height: deviceBasedDynamicDimension(24, false, 1),
    resizeMode: 'contain',
  },
  middleView: {
    width: screenWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },

  image_PeopleImage: {
    width: deviceBasedDynamicDimension(200, true, 1),
    height: deviceBasedDynamicDimension(110, false, 1),
    opacity: 1,
    resizeMode: 'contain',
  },

  welcomeTxt: {
    color: 'rgba(39, 39, 42, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Regular',
    fontSize: deviceBasedDynamicDimension(22, true, 1),
    lineHeight: deviceBasedDynamicDimension(33, false, 1),
    marginTop: deviceBasedDynamicDimension(20, false, 1),
    marginBottom: deviceBasedDynamicDimension(30, false, 1),
  },
  welcomeTxtBold: {
    color: 'rgba(39, 39, 42, 1)',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Medium',
    fontSize: deviceBasedDynamicDimension(22, true, 1),
  },

  textStyle: {
    color: '#27272A',
    textAlign: 'center',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Regular',
    fontSize: deviceBasedDynamicDimension(16, true, 1),
  },
  button1: {
    width: screenWidth - deviceBasedDynamicDimension(90, true, 1),
    height: deviceBasedDynamicDimension(52, false, 1),
    borderWidth: 1.5,
    backgroundColor: '#FFFDF7',
    borderColor: '#FFCB00',
    borderRadius: deviceBasedDynamicDimension(25, true, 1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceBasedDynamicDimension(30, false, 1),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
  },
});
