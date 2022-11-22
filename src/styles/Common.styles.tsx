import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

const styles = StyleSheet.create({
  titleContainer: {alignItems: 'center', marginBottom: 20},
  title: {fontFamily: 'Nunito-Bold', color: colors.DARK, fontSize: 36},
  authContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroupContainer: {marginVertical: 10},
  inputPlaceholder: {
    fontFamily: 'Nunito-Bold',
    color: colors.DARK,
    fontSize: 16,
    paddingLeft: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    marginTop: 5,
    color: colors.DARK,
    fontFamily: 'Nunito-Regular',
  },
  btnOuterContainer: {marginVertical: 15},
  btnContainer: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 40,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLabel: {
    color: colors.LIGHT,
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
  },
  alreadyTextContainer: {alignItems: 'center'},
  alreadyMainText: {
    color: colors.DARK,
    fontFamily: 'Nunito-Regular',
    fontSize: 15,
  },
  alreadySubText: {color: colors.PRIMARY, fontFamily: 'Nunito-Bold'},
});

export default styles;
