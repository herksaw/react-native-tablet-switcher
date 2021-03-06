# react-native-tablet-switcher

Testing your React Native UI layouts on different screen sizes can be quite time-consumning.

This library aims to make this much easier by allowing the run-time switching of the main app viewport to match the sizes of different devices.

> This library requires React Native 0.43.0 or above. For versions older versions of React Native (from 0.34.0 up), use the 0.0.4 release.

![GIF of the library in action](docs/ScreenSwitcher.gif)

# Usage

```
npm i -S react-native-tablet-switcher
```

In your root-level component, wrap the root component returned by `render()` with `<ScreenSwitcher>`.

```js
import ScreenSwitcher from 'react-native-tablet-switcher';

class MyRoot extends Component {
  ...
  render() {
    return (
      <ScreenSwitcher>
        <MyRootComponent/>
      </ScreenSwitcher>
    )
  }
}
```

- Run your app in Debug mode. For best results run on the iPhone 11 Pro Max simulator:

```bash
react-native run-ios --simulator="iPhone Pro Max"
```

- You'll see a 'Switch' button at the bottom-right of the screen.
- Tap this button to bring up a menu of the available screen sizes.
- Make your selection.

> The viewport is resized to the correct size.

Additionally, the app will render images using the density appropriate to the simulated device (@3x on iPhone 6 Plus, @2x on most others).

- Notes: Dimensions.get('window') will now return the size of the simulated device. So long as you have followed React Native's documentation and **not** cached these values, your app will continue to render with the correct simulated sizes.


To hide the `Switch` button use the `hideButton` prop on ScreenSwitcher, e.g.

```js
<ScreenSwitcher hideButton>
  ...
</ScreenSwitcher>
```

For scale screen down to fit physical device dimensions, use `scaleToFit` prop, e.g.

```js
<ScreenSwitcher scaleToFit>
  ...
</ScreenSwitcher>
```

If you want to scale up to fill device screen, use 'scaleUp' prop with addition to `scaleToFit`, e.g.

```js
<ScreenSwitcher scaleToFit scaleUp>
  ...
</ScreenSwitcher>
```

# In Production

In production builds the `<ScreenSwitcher>` component simply passes through the child components without changing them using the same method as the `react-redux` `<Provider>` component.

This means it's not necessary to remove `<ScreenSwitcher>` from your root component for production builds.

# Similar libraries

This library was inspired by https://github.com/machadogj/react-native-layout-tester, which performs a similar function by running your app on an iPad.

However, that library required that you did not use React Native's `Dimensions` system, but used their own alternative system. It also required you to set your iPhone app to be Universal in Xcode. Neither of these are the case here.
