// https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
const deviceSizes = {
  // 'iPhone 4': {
  //   windowPhysicalPixels: {
  //     width: 640,
  //     height: 960,
  //     scale: 2,
  //   },
  // },
  // 'iPhone 5': {
  //   windowPhysicalPixels: {
  //     width: 640,
  //     height: 1136,
  //     scale: 2,
  //   },
  // },
  // 'iPhone 6, 6s, 7, 8': { // 6s, 7, 8
  //   windowPhysicalPixels: {
  //     width: 750,
  //     height: 1334,
  //     scale: 2,
  //   },
  // },
  // 'iPhone 6 Plus, 6s+, 7+, 8+': { // 6s+, 7+, 8+
  //   windowPhysicalPixels: {
  //     width: 1242,
  //     height: 2208,
  //     scale: 3,
  //   },
  // },
  // 'iPhone X, XS, 11 Pro': { // note: this won't have the bezel
  //   windowPhysicalPixels: {
  //      width: 1125,
  //      height: 2436,
  //      scale: 3,
  //  },
  // },
  // '11, XR': {
  //   windowPhysicalPixels: {
  //      width: 828,
  //      height: 1792,
  //      scale: 2,
  //  },
  // },
  // '11 Pro Max, XS Max': {
  //   windowPhysicalPixels: {
  //      width: 1242,
  //      height: 2688,
  //      scale: 3,
  //  },
  // },

  'iPad Pro 12.9 (12.9)': {
    windowPhysicalPixels: {
      width: 2732,
      height: 2048,
      scale: 2,
    },
  },
  'Galaxy Note Pro 12.2 (12.2)': {
    windowPhysicalPixels: {
      width: 2560,
      height: 1600,
      scale: 2,
    },
  },
  'iPad Pro 11 (11.0)': {
    windowPhysicalPixels: {
      width: 2388,
      height: 1668,
      scale: 2,
    },
  },
  'iPad Pro Air 2020 (10.9)': {
    windowPhysicalPixels: {
      width: 2360,
      height: 1640,
      scale: 2,
    },
  },
  'iPad Pro 10.5 (10.5)': {
    windowPhysicalPixels: {
      width: 2224,
      height: 1668,
      scale: 2,
    },
  },  
  'iPad Pro 10.2 (10.2)': {
    windowPhysicalPixels: {
      width: 2160,
      height: 1620,
      scale: 2,
    },
  },  
  // 'iPad Pro Air 2019 (10.5)': {
  //   windowPhysicalPixels: {
  //     width: 2224,
  //     height: 1668,
  //     scale: 2,
  //   },
  // },
  'Pixel C (10.2)': {
    // windowPhysicalPixels: {
    //   width: 1600,
    //   height: 1200,
    //   scale: 2,
    // },
    windowPhysicalPixels: {
      width: 2560,
      height: 1800,
      scale: 2,
    },
  },
  'Xperia Z4 (10.1)': {
    windowPhysicalPixels: {
      width: 2560,
      height: 1600,
      scale: 3,
    },
  },
  'Yoga 10 HD+ (10.1)': {
    windowPhysicalPixels: {
      width: 1920,
      height: 1200,
      scale: 1,
    },
  },
  'Venue 10 (10.1)': {
    windowPhysicalPixels: {
      width: 1280,
      height: 800,
      scale: 2,
    },
  },
  'Fire HD 10 (10.0)': {
    windowPhysicalPixels: {
      width: 1280,
      height: 800,
      scale: 1,
    },
  },
  'iPad Air 2 (9.7)': {
    windowPhysicalPixels: {
      width: 2048,
      height: 1536,
      scale: 2,
    },
  },
  'Nexus 9 (8.9)': {
    windowPhysicalPixels: {
      width: 2048,
      height: 1536,
      scale: 2,
    },
  },
  'Galaxy Tab A7 Lite (8.7)': {
    windowPhysicalPixels: {
      width: 1340,
      height: 800,
      scale: 1,
    },
  },
  'ZenPad 8.0 (8.0)': {
    windowPhysicalPixels: {
      width: 1280,
      height: 800,
      scale: 1,
    },
  },
  'iPad Mini 4 (7.9)': {
    windowPhysicalPixels: {
      width: 2048,
      height: 1536,
      scale: 2,
    },
  },
  'Galaxy Tab 2 (7.7)': {
    windowPhysicalPixels: {
      width: 600,
      height: 1024,
      scale: 2,
    },
  },
  'Nexus 7 (7.0)': {
    windowPhysicalPixels: {
      width: 1280,
      height: 800,
      scale: 2,
    },
  },
  '7 Plus (7.0)': {
    windowPhysicalPixels: {
      width: 1024,
      height: 600,
      scale: 1,
    },
  },
  '7 Voice Tab (6.9)': {
    windowPhysicalPixels: {
      width: 1024,
      height: 600,
      scale: 1,
    },
  },
  'Fire HD 6 (6.0)': {
    windowPhysicalPixels: {
      width: 1280,
      height: 800,
      scale: 2,
    },
  },
};

export default deviceSizes;
