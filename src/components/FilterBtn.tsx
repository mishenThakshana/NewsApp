import {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface FilterBtnInterface {
  label: string;
  handler: () => void;
  active?: boolean;
}

const FilterBtn: FC<FilterBtnInterface> = ({label, handler, active}) => {
  return (
    <Pressable onPress={handler}>
      <View
        style={[
          active ? styles.filterActive : styles.filterInactive,
          styles.filterBtn,
        ]}>
        <Text
          style={[
            active ? {color: colors.LIGHT} : {color: colors.DARK},
            {fontFamily: 'Nunito-SemiBold'},
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

export default FilterBtn;
