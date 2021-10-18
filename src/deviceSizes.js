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

  'Galaxy Z Fold 2 (7.6)': {
    windowPhysicalPixels: {
      width: 1768,
      height: 2208,
      scale: 2,
    },
  },

  'Galaxy Note20 Ultra (6.9)': {
    windowPhysicalPixels: {
      width: 1440,
      height: 3088,
      scale: 3,
    },
  },

  'Galaxy S20 Ultra (6.9)': {
    windowPhysicalPixels: {
      width: 1440,
      height: 3200,
      scale: 3,
    },
  },

  'Galaxy Note10+ (6.8)': {
    windowPhysicalPixels: {
      width: 1440,
      height: 3040,
      scale: 3,
    },
  },

  'Redmi Note 9 Pro (6.7)': {
    windowPhysicalPixels: {
      width: 1080,
      height: 2400,
      scale: 2,
    },
  },

  'iPhone 12 Pro Max (6.7)': {
    windowPhysicalPixels: {
      width: 1284,
      height: 2778,
      scale: 3,
    },
  },

  'Huawei Mate 20 (6.5)': {
    windowPhysicalPixels: {
      width: 1080,
      height: 2244,
      scale: 2,
    },
  },

  'iPhone XS Max (6.5)': {
    windowPhysicalPixels: {
      width: 1242,
      height: 2688,
      scale: 3,
    },
  },

  'Redmi Note 8 Pro (6.5)': {
    windowPhysicalPixels: {
      width: 1080,
      height: 2340,
      scale: 2,
    },
  },

  'Nova 7i (6.4)': {
    windowPhysicalPixels: {
      width: 1080,
      height: 2310,
      scale: 2,
    },
  },

  'Galaxy Note10 (6.3)': {
    windowPhysicalPixels: {
      width: 1080,
      height: 2280,
      scale: 3,
    },
  },

  'iPhone XR (6.1)': {
    windowPhysicalPixels: {
      width: 828,
      height: 1792,
      scale: 2,
    },
  },

  'iPhone 12 (6.1)': {
    windowPhysicalPixels: {
      width: 1170,
      height: 2532,
      scale: 3,
    },
  },

  'iPhone X (5.8)': {
    windowPhysicalPixels: {
      width: 1125,
      height: 2436,
      scale: 3,
    },
  },

  'Galaxy Note5 (5.7)': {
    windowPhysicalPixels: {
      width: 1440,
      height: 2560,
      scale: 3,
    },
  },

  'Mi Note (5.7)': {
    windowPhysicalPixels: {
      width: 1080,
      height: 1920,
      scale: 2,
    },
  },

  'Galaxy Note (5.3)': {
    windowPhysicalPixels: {
      width: 800,
      height: 1280,
      scale: 2,
    },
  },

  'Apple iPhone 8 (4.7)': {
    windowPhysicalPixels: {
      width: 750,
      height: 1334,
      scale: 2,
    },
  },
};

export default deviceSizes;
