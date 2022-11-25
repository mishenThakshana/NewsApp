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
  // Dashboard
  rootContainer: {
    flex: 1,
    backgroundColor: colors.LIGHT,
  },
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topBarSearchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  topBarSearchBarInput: {fontFamily: 'Nunito-Regular', color: colors.DARK},
  searchListContainer: {
    backgroundColor: '#fff',
    width: '80%',
    position: 'absolute',
    top: 52,
    left: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 10,
  },
  searchListHorizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sectionTitle: {
    fontFamily: 'NewYorkMedium-Bold',
    color: colors.DARK,
    fontSize: 18,
  },
  sectionTitleBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitleBtnLabel: {
    color: colors.SECONDARY,
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
  },
  newsCardContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  newsCardAuthorText: {
    fontFamily: 'Nunito-ExtraBold',
    color: colors.LIGHT,
    fontSize: 10,
  },
  newsCardTitle: {
    fontFamily: 'NewYorkMedium-Bold',
    color: colors.LIGHT,
    fontSize: 16,
    marginTop: 10,
  },
  newsCardTimestampContainer: {position: 'absolute', bottom: 10, left: 20},
  newsCardTimestamp: {
    fontFamily: 'Nunito-MediumItalic',
    color: colors.LIGHT,
    fontSize: 14,
  },
});

export default styles;
