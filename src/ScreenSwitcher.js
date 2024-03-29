import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  ActionSheetIOS,
  Text,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import deviceSizes from './deviceSizes';

import ActionSheet from "react-native-actions-sheet";

import {
  FlatList as FlatListGH,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  buttonContainer: { position: 'absolute', right: 0, bottom: 0 },
  buttonText: { padding: 5, color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' },
  outer: {
    flex: 1,
    backgroundColor: '#003355',
  },
});

/**
 * Force resize of Dimensions.get by using the setter.
 */
function performResize(deviceInfo, deviceName, scaleToFit, scaleUp, landscapeMode) {
  // Make sure you are using copy of deviceInfo.windowPhysicalPixels
  const windowPhysicalPixels = { 
    ...deviceInfo.windowPhysicalPixels,
    ...landscapeMode && {
      width: deviceInfo.windowPhysicalPixels.height,
      height: deviceInfo.windowPhysicalPixels.width,
    },
  };
  const { width, height, scale } = windowPhysicalPixels;
  const w_points = Math.round(width / scale); // round because of JS
  const h_points = Math.round(height / scale); // round because of JS
  let infoSuffix = '';

  windowPhysicalPixels.fontScale = device_font_scale;

  console.log({ width, height, scale, w_points, h_points });

  // Scale to fit if needed
  if (scaleToFit && (w_points != device_width || h_points != device_height)) {
    const w_ratio = w_points / device_width;
    const h_ratio = h_points / device_height;
    const min_ratio = w_ratio < h_ratio ? w_ratio : h_ratio;
    const max_ratio = w_ratio > h_ratio ? w_ratio : h_ratio;

    if ((max_ratio <= 1 && scaleUp) || min_ratio > 1 || max_ratio > 1) {
      const ratio = min_ratio > 1 ? min_ratio : max_ratio;
      console.log({ ratio });

      windowPhysicalPixels.width = Math.round(windowPhysicalPixels.width / ratio);
      windowPhysicalPixels.height = Math.round(windowPhysicalPixels.height / ratio);
      windowPhysicalPixels.fontScale = windowPhysicalPixels.fontScale / ratio;
    }

    console.log(`${device_width}x${device_height}`, { w_ratio, h_ratio, min_ratio, max_ratio });

    const { width: w, height: h } = windowPhysicalPixels;
    infoSuffix = ` (scaled to ${w}x${h})`;
  }

  windowPhysicalPixels.deviceName = deviceName;

  // Force RN to re-set the Dimensions sizes
  if (Platform.OS === 'ios') {
    Dimensions.set({ windowPhysicalPixels });
  }
  else {
    Dimensions.set({ windowPhysicalPixels });
    // Dimensions.set({ screenPhysicalPixels: windowPhysicalPixels });
  }  
  console.log(`Resizing window to physical pixels ${width}x${height}${infoSuffix}`, { ...windowPhysicalPixels });
  // TODO: Android uses screenPhysicalPixels - see https://github.com/facebook/react-native/blob/master/Libraries/Utilities/Dimensions.js
}

// Disable if Production or Android (Android support coming later)
// const isActive = Platform.OS === 'ios' && __DEV__;
// const isActive = __DEV__;
const isActive = true;

// Remember real device dimensions
const { width: device_width, height: device_height, fontScale: device_font_scale } = Dimensions.get('screen');

/**
 * Insert this component at the root of your app to
 * add a 'Switch'
 */
class ScreenSwitcher extends Component {
  constructor(props) {
    super(props);

    // Do nothing in production mode
    if (!isActive) {
      return;
    }

    this.actionSheetRef = React.createRef();
    this.scrollViewRef = React.createRef();

    this.state = { screenSwitcherDeviceName: 'Default', deviceNames: Object.keys(deviceSizes) };

    this.resize = () => {
      const deviceNames = Object.keys(deviceSizes);
      const options = [...deviceNames, 'Cancel'];
      const cancelButtonIndex = deviceNames.length;

      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: 'Simulate Phone Screen Size',
          options,
          cancelButtonIndex,
        },
        index => {
          if (index === cancelButtonIndex) {
            return;
          }

          const deviceName = deviceNames[index];
          const deviceInfo = deviceSizes[deviceName];

          if (!deviceInfo) {
            return;
          }

          performResize(deviceInfo, deviceName, this.props.scaleToFit, this.props.scaleUp, this.props.landscapeMode);

          this.setState({ screenSwitcherDeviceName: deviceName }); // force re-render of this component
        }
      );
    };

    this.renderDevices = this.renderDevices.bind(this);

    // this.setState({
    //   deviceNames: Object.keys(deviceSizes),
    // });
  }

  renderDevices({ item, index }) {
    const self = this;

    return (
      <TouchableOpacity
        style={{
          // backgroundColor: 'red',
          width: '100%',
          height: 32,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          const deviceName = self.state.deviceNames[index];
          const deviceInfo = deviceSizes[deviceName];

          if (!deviceInfo) {
            return;
          }

          performResize(deviceInfo, deviceName, self.props.scaleToFit, self.props.scaleUp, self.props.landscapeMode);

          self.setState({ screenSwitcherDeviceName: deviceName }); // force re-render of this component

          this.actionSheetRef && this.actionSheetRef.current && this.actionSheetRef.current.setModalVisible(false);
        }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    // In production, just pass through children unchanged
    if (!isActive) {
      return Children.only(this.props.children);
    }

    // In dev mode, resize the main content
    const { children, hideButton } = this.props;

    const { width, height, fontScale } = Dimensions.get('window');
    console.log({ width, height, fontScale, device_font_scale });

    console.log('this.state.deviceNames');
    console.log(this.state.deviceNames);

    return (
      <>
        {
          Platform.OS === 'ios'
            ?
            <View style={styles.outer}>
              <View style={{ width, height }}>
                {children}
              </View>
              {hideButton
                ? undefined
                : <TouchableHighlight style={styles.buttonContainer} onPress={this.resize}>
                  <Text style={styles.buttonText}>
                    {this.state.screenSwitcherDeviceName || 'Switch'}
                  </Text>
                </TouchableHighlight>}
            </View>
            :
            <View style={styles.outer}>
              <View style={{ width, height }}>
                {children}
              </View>
              {hideButton
                ? undefined
                : <TouchableHighlight style={styles.buttonContainer} onPress={() => {
                  this.actionSheetRef && this.actionSheetRef.current && this.actionSheetRef.current.setModalVisible(true);
                }}>
                  <Text style={styles.buttonText}>
                    {this.state.screenSwitcherDeviceName || 'Switch'}
                  </Text>
                </TouchableHighlight>}

              <ActionSheet ref={this.actionSheetRef}>
                <FlatListGH
                  ref={this.scrollViewRef}
                  nestedScrollEnabled={true}
                  onScrollEndDrag={() =>
                    this.actionSheetRef.current?.handleChildScrollEnd()
                  }
                  onScrollAnimationEnd={() =>
                    this.actionSheetRef.current?.handleChildScrollEnd()
                  }
                  onMomentumScrollEnd={() =>
                    this.actionSheetRef.current?.handleChildScrollEnd()
                  }
                  data={this.state.deviceNames || []}
                  renderItem={this.renderDevices}
                  style={{
                    // backgroundColor: 'blue',
                    // height: 320,
                  }}
                />
              </ActionSheet>
            </View>
        }
      </>
    );
  }
}

if (isActive) {
  // Use context to force re-renders for our children when screen is resized. Ensures that images are rendered with
  // correct density (2x, @3x)
  ScreenSwitcher.prototype.getChildContext = function () {
    const { screenSwitcherDeviceName, deviceNames } = this.state;
    return { screenSwitcherDeviceName, deviceNames };
  };

  ScreenSwitcher.childContextTypes = {
    /**
     * Used to force re-render of children when screen is resized
     */
    screenSwitcherDeviceName: PropTypes.string,
    deviceNames: PropTypes.array,
  };
}

ScreenSwitcher.defaultProps = {
  hideButton: false,
  scaleToFit: false,
  scaleUp: false,
  landscapeMode: false,
};

ScreenSwitcher.propTypes = {
  children: PropTypes.node.isRequired,
  hideButton: PropTypes.bool,
  scaleToFit: PropTypes.bool,
  scaleUp: PropTypes.bool,
  landscapeMode: PropTypes.bool,
};

export default ScreenSwitcher;
