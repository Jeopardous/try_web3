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
import Icon from 'react-native-vector-icons/AntDesign';

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

export default class Criteria extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageCount: 1,
    };
  }

  onNextPage = () => {
    this.setState({
      pageCount: this.state.pageCount + 1,
    });
  };
  onPrevPage = () => {
    this.setState({
      pageCount: this.state.pageCount - 1,
    });
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.OnboardingGuideView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.closeView}>
            <Image
              source={require('./assets/321679481c4d3328d65164c2c7dd1ccdb243bc24.png')}
              style={styles.image_CloseImage}
            />
          </TouchableOpacity>
          <View style={styles.progressBarView}>
            <View
              style={[
                styles.progressBar,
                {
                  width: ((screenWidth - 40) * this.state.pageCount) / 4,
                  backgroundColor: '#FFCB00',
                  borderRadius: 4,
                },
              ]}></View>
          </View>
          <View style={styles.middleView}>
            <View
              style={{marginTop: deviceBasedDynamicDimension(60, false, 1)}}>
              <Text style={styles.titleTxt}>
                Criteria to become a Moderator or a Superhost
              </Text>
            </View>
            <View>
              <Text style={styles.bodyTxt}>
                You can become a “Moderator” under two scenarios:{'\n\n'}
                Scenario 1 – Platform developed Moderators (those who have a
                relevant personal experience on certain topics, E.g a Cancer
                survivor hosting conversations on fighting cancer){'\n\n'}
                Create a minimum of 5 rooms, earn 100 hearts and get your
                profile verified.{'\n'}If you create 5 rooms and earn 50 hearts
                you become a Superhost and earn a blue tick against your name.
                {'\n\n'}Scenario 2 – Trained professionals on relevant topics
                (E.g. life coaches, counsellors, therapists etc.){'\n'}Once your
                credentials are verified, you will directly earn a Superhost
                status, get a blue tick against your profile name and get 50
                hearts credited to your account.{'\n\n'}To become a Moderator,
                you need to create a minimum of 5 rooms, earn a total of 100
                hearts
              </Text>
            </View>
          </View>
          <View style={styles.footerView}>
            <View style={styles.arrowView}>
              {this.state.pageCount === 1 ? (
                <View
                  style={{
                    width: deviceBasedDynamicDimension(16, true, 1),
                  }}></View>
              ) : (
                <TouchableOpacity onPress={() => this.onPrevPage()}>
                  <Icon
                    name="left"
                    color={'#1E3354'}
                    size={deviceBasedDynamicDimension(16, true, 1)}
                  />
                </TouchableOpacity>
              )}

              <Text style={styles.pageTxt}>{this.state.pageCount}/4</Text>
              {this.state.pageCount === 4 ? (
                <View
                  style={{
                    width: deviceBasedDynamicDimension(16, true, 1),
                  }}></View>
              ) : (
                <TouchableOpacity onPress={() => this.onNextPage()}>
                  <Icon
                    name="right"
                    color={'#1E3354'}
                    size={deviceBasedDynamicDimension(16, true, 1)}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {this.state.pageCount === 4 && (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('QuestionScreen');
              }}
              style={styles.reviewBtn}>
              <Text style={styles.reviewBtnTxt}>Review Orientation</Text>
            </TouchableOpacity>
          )}
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

  closeView: {
    width: deviceBasedDynamicDimension(30, true, 1),
    height: deviceBasedDynamicDimension(30, false, 1),
    justifyContent: 'center',
    marginLeft: deviceBasedDynamicDimension(30, true, 1),
    marginTop: deviceBasedDynamicDimension(20, true, 1),
  },

  progressBar: {
    height: 4,
  },
  progressBarView: {
    width: screenWidth - 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E8EAEC',
    alignSelf: 'center',
    marginTop: deviceBasedDynamicDimension(20, false, 1),
  },

  image_CloseImage: {
    width: deviceBasedDynamicDimension(24, true, 1),
    height: deviceBasedDynamicDimension(24, false, 1),
    resizeMode: 'contain',
  },
  middleView: {
    width: screenWidth,
    maxHeight: deviceBasedDynamicDimension(600, false, 1),
    paddingHorizontal: 20,
  },
  footerView: {
    position: 'absolute',
    bottom: deviceBasedDynamicDimension(140, false, 1),
    width: screenWidth,
  },
  arrowView: {
    width: screenWidth - 200,
    height: deviceBasedDynamicDimension(40, false, 1),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bodyTxt: {
    color: 'rgba(39, 39, 42, 1)',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Regular',
    fontSize: deviceBasedDynamicDimension(14, true, 1),
    lineHeight: deviceBasedDynamicDimension(21, false, 1),
    marginTop: deviceBasedDynamicDimension(24, false, 1),
    marginBottom: deviceBasedDynamicDimension(30, false, 1),
  },
  titleTxt: {
    color: 'rgba(39, 39, 42, 1)',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Bold',
    fontSize: deviceBasedDynamicDimension(22, true, 1),
  },
  pageTxt: {
    color: 'rgba(39, 39, 42, 1)',
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Medium',
    fontSize: deviceBasedDynamicDimension(18, true, 1),
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
  reviewBtn: {
    width: screenWidth - deviceBasedDynamicDimension(180, true, 1),
    height: deviceBasedDynamicDimension(52, false, 1),
    borderWidth: 2,
    backgroundColor: '#FFFDF7',
    borderColor: '#FFCB00',
    borderRadius: deviceBasedDynamicDimension(45, true, 1),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceBasedDynamicDimension(30, false, 1),
    alignSelf: 'center',
    position: 'absolute',
    bottom: deviceBasedDynamicDimension(60, false, 1),
  },
  reviewBtnTxt: {
    color: '#27272A',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: deviceBasedDynamicDimension(16, true, 1),
  },
});
