/**
 * 适配iphoneX
 * 皓天
 * by2018年4月10日
 */
import { Dimensions,Platform} from 'react-native';

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;

export default class IphoneX {
    static ifIphoneX(iphoneXStyle, iosStyle, androidStyle) {
    
        if (Platform.OS === 'ios' &&
        ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
            (screenH === X_WIDTH && screenW === X_HEIGHT))) {
            return iphoneXStyle;
        } else if (Platform.OS === 'ios') {
            return iosStyle
        } else {
            if (androidStyle) return androidStyle;
            return iosStyle
        }
      }
}