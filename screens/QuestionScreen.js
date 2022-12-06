//This an auto generated file for Artboard Name = QuestionBankQuiz1A And Supports ReactNative Ver. = 0.62
import {
  SafeAreaView,
  Dimensions,
  PixelRatio,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import React from 'react';
import {dummyArr} from './dummyData';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
//Artboard Dimension
let artBoardHeightOrg = 970;
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
  return 0;
}

export default class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      newArr: dummyArr,
    };
  }
  handleQuestionNo = (item, index) => {
    this.setState({activeIndex: index});
  };
  renderItem = ({item, index}) => {
    const {activeIndex} = this.state;
    return (
      <TouchableOpacity
        onPress={() => this.handleQuestionNo(item, index)}
        style={[
          styles.topHeaderView,
          {
            marginLeft:
              index == 0 ? 0 : deviceBasedDynamicDimension(24, true, 1),
          },
        ]}>
        <View data-elementId="view_Ellipse7" style={[styles.view_Ellipse7]}>
          <Text data-elementId="textlabel_1" style={styles.textlabel_1Text}>
            {index + 1}
          </Text>
        </View>
        <View
          data-elementId="view_Line2"
          style={[
            styles.view_Line2,
            {
              borderColor:
                index === activeIndex ? 'rgba(255, 203, 0, 1)' : '#D4D4D4',
            },
          ]}
        />
      </TouchableOpacity>
    );
  };
  showAlphabet = n => {
    let i = n + 65;
    return String.fromCharCode(i);
  };
  handleMultiChoice(item) {
    const {newArr} = this.state;
    item.select = !item.select;
    this.setState({newArr: [...newArr]});
  }
  renderItem1 = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => this.handleMultiChoice(item)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: deviceBasedDynamicDimension(32, false, 1),
        }}>
        <View
          data-elementId="view_Ellipse7"
          style={[
            styles.view_Ellipse78,
            {
              backgroundColor: item.select
                ? '#010039'
                : 'rgba(209, 212, 227, 1)',
            },
          ]}>
          <Text data-elementId="textlabel_A" style={styles.textlabel_AText}>
            {this.showAlphabet(index)}
          </Text>
        </View>
        <Text style={styles.textlabel_BeingAWelcomingHostText}>{item.que}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {activeIndex, newArr} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.QuestionBankQuiz1AView}>
          <View
            style={{
              marginTop: deviceBasedDynamicDimension(55, false, 1),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              data-elementId="image_icon"
              style={styles.image_iconImage}
              source={require('./assets/e570b198828861f4b31e54da33ae89e58d52f108.png')}
            />
            <Text
              data-elementId="textlabel_Home"
              style={styles.textlabel_HomeText}>
              Quiz
            </Text>
          </View>
          <View style={{marginTop: deviceBasedDynamicDimension(10, false, 1)}}>
            <FlatList
              data={newArr}
              extraData={this.state}
              renderItem={this.renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View>
              <Text style={styles.que1}>
                {activeIndex + 1} – {newArr[activeIndex].que}
              </Text>
              <Text style={styles.dummytxt}>
                (select all applicable answers)
              </Text>

              <FlatList
                data={newArr[activeIndex].choices}
                extraData={this.state}
                renderItem={this.renderItem1}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          <TouchableOpacity
            data-elementId="button_Secondary"
            onPress={() => Alert.alert('I am Custom Button.')}
            style={styles.button_SecondaryButton}>
            <Text
              data-elementId="TEXTCOLORSTYLE"
              style={styles.TEXTCOLORSTYLEText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topHeaderView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceBasedDynamicDimension(20, false, 1),
  },
  QuestionBankQuiz1AView: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    paddingHorizontal: 20,
  },

  image_iconImage: {
    width: deviceBasedDynamicDimension(24, true, 1),
    height: deviceBasedDynamicDimension(24, false, 1),
    opacity: 1,
    resizeMode: 'contain',
  },

  textlabel_HomeText: {
    marginLeft: deviceBasedDynamicDimension(10, true, 1),
    opacity: 1,
    backgroundColor: 'transparent',
    color: 'rgba(39, 39, 42, 1)',
    fontSize: deviceBasedDynamicDimension(20, true, 1),
  },

  view_Ellipse7: {
    width: deviceBasedDynamicDimension(33, false, 1),
    height: deviceBasedDynamicDimension(32, false, 1),
    backgroundColor: '#D1D4E3',
    borderRadius: deviceBasedDynamicDimension(32, true, 1),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textlabel_1Text: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: deviceBasedDynamicDimension(15, true, 1),
  },

  view_Line2: {
    width: deviceBasedDynamicDimension(47, true, 1),
    marginTop: deviceBasedDynamicDimension(10, false, 1),
    borderColor: 'rgba(255, 203, 0, 1)',
    borderWidth: deviceBasedDynamicDimension(2, true, 1),
  },

  que1: {
    marginTop: deviceBasedDynamicDimension(50, false, 1),
    color: 'rgba(39, 39, 42, 1)',
    fontSize: deviceBasedDynamicDimension(18, true, 1),
    fontWeight: '700',
  },

  dummytxt: {
    color: 'rgba(39, 39, 42, 1)',
    marginTop: deviceBasedDynamicDimension(30, false, 1),
    fontSize: deviceBasedDynamicDimension(16, true, 1),
  },

  view_Ellipse78: {
    width: deviceBasedDynamicDimension(41, false, 1),
    height: deviceBasedDynamicDimension(40, false, 1),
    backgroundColor: 'rgba(209, 212, 227, 1)',
    borderRadius: deviceBasedDynamicDimension(400, true, 1),
    borderWidth: deviceBasedDynamicDimension(0, true, 1),
    justifyContent: 'center',
    alignItems: 'center',
  },

  textlabel_AText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: deviceBasedDynamicDimension(15, true, 1),
  },

  textlabel_BeingAWelcomingHostText: {
    color: 'rgba(39, 39, 42, 1)',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
    marginLeft: deviceBasedDynamicDimension(12, true, 1),
    flex: 1,
    lineHeight: 24,
  },

  TEXTCOLORSTYLEText: {
    color: 'rgba(127, 142, 157, 1)',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: deviceBasedDynamicDimension(16, true, 1),
  },
  button_SecondaryButton: {
    position: 'absolute',
    width: deviceBasedDynamicDimension(242, true, 1),
    height: deviceBasedDynamicDimension(52, false, 1),
    marginLeft: deviceBasedDynamicDimension(81, true, 1),
    bottom: deviceBasedDynamicDimension(30, false, 1),
    opacity: 1,
    backgroundColor: 'rgba(239, 239, 239, 1)',
    borderRadius: deviceBasedDynamicDimension(25, true, 1),
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFCB00',
  },
});
