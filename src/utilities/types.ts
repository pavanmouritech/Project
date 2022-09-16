import {ColorValue} from 'react-native';

export interface ThemeColors {
  error: any | ColorValue | undefined;
  surface: any | ColorValue | undefined;
  text: ColorValue;
  primary: ColorValue;
  primarylight: ColorValue;
  primaryOrange:ColorValue;
  primaryGreen:ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  black: ColorValue;
  white: ColorValue;
  whiteopa: ColorValue;
  light: ColorValue;
  lightBlack:ColorValue;
  dark: ColorValue;
  gray: ColorValue;
  gray65:ColorValue;
  grayassent: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  info: ColorValue;
  card: ColorValue;
  background: ColorValue;
  shadow: ColorValue;
  shadowOpacity:ColorValue;
  overlay: ColorValue;
  focus: ColorValue;
  input: ColorValue;
  inputborder: ColorValue;
  switchOn: ColorValue;
  switchOff: ColorValue;
  checkbox: string[];
  checkboxIcon: ColorValue;
  facebook: ColorValue;
  twitter: ColorValue;
  dribbble: ColorValue;
  icon: ColorValue;
  blurTint: 'light' | 'dark' | 'default';
  link: ColorValue;
  lightgray:ColorValue;
  skyblue:ColorValue;
  transparent:ColorValue;
  backgroundOpacity:ColorValue;
}

export interface ThemeGradients {
  primary?: string[];
  secondary?: string[];
  tertiary?: string[];
  black?: string[];
  white?: string[];
  light?: string[];
  dark?: string[];
  gray?: string[];
  danger?: string[];
  warning?: string[];
  success?: string[];
  info?: string[];
  divider?: string[];
  menu?: string[];
  male?: string[];
  female?: string[];
  sport?: string[];
  more?: string[];
}
