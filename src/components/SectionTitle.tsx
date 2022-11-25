import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface SectionTitleInterface {
  title: string;
  handler?: () => void;
}

const SectionTitle: FC<SectionTitleInterface> = ({title, handler}) => {
  return (
    <View style={styles.sectionTitleContainer}>
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handler}>
          <View style={styles.sectionTitleBtnContainer}>
            <View>
              <Text style={styles.sectionTitleBtnLabel}>See All</Text>
            </View>
            <View>
              <Ionicon name="ios-arrow-forward" color={colors.SECONDARY} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SectionTitle;
