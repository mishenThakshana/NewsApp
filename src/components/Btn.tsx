import React, {FC} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface BtnInterface {
  label: string;
  handler?: () => void;
  loading?: boolean;
}

const Btn: FC<BtnInterface> = ({label, handler, loading}) => {
  return (
    <View style={styles.btnOuterContainer}>
      <TouchableOpacity onPress={handler} disabled={loading}>
        <View style={styles.btnContainer}>
          {loading ? (
            <ActivityIndicator color={colors.LIGHT} size={27} />
          ) : (
            <Text style={styles.btnLabel}>{label}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
