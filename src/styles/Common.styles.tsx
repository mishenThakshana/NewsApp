import {StyleSheet} from 'react-native';
import {colors} from 'src/constants';

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    paddingTop: 5,
    bottom: 25,
    left: 20,
    right: 20,
    position: 'absolute',
    elevation: 5,
    borderRadius: 32,
  },
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
    zIndex: 10,
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
    backgroundColor: 'rgba(0,0,0, 0.4)',
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
  filterActive: {
    backgroundColor: colors.PRIMARY,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
  },
  filterInactive: {
    backgroundColor: colors.LIGHT,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  filterBtn: {
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 5,
    marginVertical: 20,
  },
  newsCard2Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    borderRadius: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  newsCard2Title: {
    fontFamily: 'NewYorkMedium-Semibold',
    color: colors.LIGHT,
    fontSize: 14,
    marginTop: 10,
  },
  newsCard2BottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  newsCard2BottomText: {
    fontFamily: 'Nunito-SemiBold',
    color: colors.LIGHT,
    fontSize: 12,
  },
  // News Detail
  newsDetailBackBtn: {
    zIndex: 10,
    backgroundColor: 'rgba(245, 245, 245,0.5)',
    alignSelf: 'flex-start',
    margin: 15,
    padding: 8,
    alignItems: 'center',
    borderRadius: 10,
  },
  newsDetailShadowBoxContainer: {
    position: 'absolute',
    top: 250,
    alignItems: 'center',
    zIndex: 10,
  },
  newsDetailShadowBox: {
    marginHorizontal: 20,
    backgroundColor: 'rgba(245, 245, 245,0.9)',
    borderRadius: 16,
    padding: 20,
  },
  newsDetailTimeStamp: {
    fontSize: 12,
    fontFamily: 'Nunito-SemiBold',
    color: '#2E0505',
  },
  newsDetailTitle: {
    fontSize: 16,
    fontFamily: 'NewYorkMedium-Bold',
    color: '#2E0505',
    marginVertical: 5,
  },
  newsDetailAuthor: {
    fontSize: 10,
    fontFamily: 'Nunito-ExtraBold',
    color: '#2E0505',
  },
  newsDetailDescriptionOuterContainer: {
    backgroundColor: colors.LIGHT,
    position: 'absolute',
    top: 300,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
  newsDetailDescriptionContainer: {
    position: 'absolute',
    top: 120,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  newsDetailDescription: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#2E0505',
    marginVertical: 5,
  },
  titleWithFitlerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
