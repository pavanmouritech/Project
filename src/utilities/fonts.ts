import {Platform} from 'react-native';

const androidFonts = {
  sourceRegular: 'SourceSansPro-Regular',
  sourceItalic: 'SourceSansPro-Italic',
  sourceExtraLight: 'SourceSansPro-ExtraLight',
  sourceExtraLightItalic: 'SourceSansPro-ExtraLightItalic',
  sourceLight: 'SourceSansPro-Light',
  sourceLightItalic: 'SourceSansPro-LightItalic',
  sourceSemiBold: 'SourceSansPro-SemiBold',
  sourceSemiBoldItalic: 'SourceSansPro-SemiBoldItalic',
  sourceBold: 'SourceSansPro-Bold',
  sourceBoldItalic: 'SourceSansPro-BoldItalic',
  sourceBlack: 'SourceSansPro-Black',
  sourceBlackItalic: 'SourceSansPro-BlackItalic',
  arialRegular: 'ARIAL',
  arialCE: 'ArialCE',
  arialMedium: 'ArialMdm',
  arialBold: 'ARIALBD',
};

const iOSFonts = {
  sourceRegular: 'SourceSansPro-Regular',
  sourceItalic: 'SourceSansPro-Italic',
  sourceExtraLight: 'SourceSansPro-ExtraLight',
  sourceExtraLightItalic: 'SourceSansPro-ExtraLightItalic',
  sourceLight: 'SourceSansPro-Light',
  sourceLightItalic: 'SourceSansPro-LightItalic',
  sourceSemiBold: 'SourceSansPro-SemiBold',
  sourceSemiBoldItalic: 'SourceSansPro-SemiBoldItalic',
  sourceBold: 'SourceSansPro-Bold',
  sourceBoldItalic: 'SourceSansPro-BoldItalic',
  sourceBlack: 'SourceSansPro-Black',
  sourceBlackItalic: 'SourceSansPro-BlackItalic',
  arialRegular: 'ArialHebrew',
  arialCE: 'ArialCE',
  arialMedium: 'Arial-Mdm',
  arialBold: 'Arial-BoldMT',
};

export default Platform.OS === 'ios' ? iOSFonts : androidFonts;
