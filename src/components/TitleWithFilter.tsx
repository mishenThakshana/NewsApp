import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface TitleWithFilterInterface {
  title: string;
  handler?: () => void;
  backEnabled?: boolean;
  navigation?: any;
}

const TitleWithFilter: FC<TitleWithFilterInterface> = ({
  title,
  handler,
  backEnabled,
  navigation,
}) => {
  return (
    <View
      style={[styles.titleWithFitlerContainer, backEnabled && {marginTop: 5}]}>
      {backEnabled && (
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicon name="ios-arrow-back" color={colors.SECONDARY} size={25} />
          </TouchableOpacity>
        </View>
      )}
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handler}>
          <Ionicon
            name="ios-options-outline"
            color={colors.SECONDARY}
            size={22}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TitleWithFilter;
