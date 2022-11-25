import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface TitleWithFilterInterface {
  title: string;
  handler?: () => void;
}

const TitleWithFilter: FC<TitleWithFilterInterface> = ({title, handler}) => {
  return (
    <View style={styles.titleWithFitlerContainer}>
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
