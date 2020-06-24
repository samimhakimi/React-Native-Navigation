import { Dimensions, Platform } from 'react-native'

export const isIphoneX = () => {
  const window = Dimensions.get('window')
  const height = window.height;
  const width = window.width;
  const iphoneXLength = 812
  const iphoneXSMaxLength = 896
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (width === iphoneXLength ||
      height === iphoneXLength ||
      width === iphoneXSMaxLength ||
      height === iphoneXSMaxLength)
  )
}

