import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from 'src/styles/Common.styles';

interface AlreadyTextInterface {
  mainText: string;
  subText: string;
  handler: () => void;
}

const AlreadyText: FC<AlreadyTextInterface> = ({
  mainText,
  subText,
  handler,
}) => {
  return (
    <View style={styles.alreadyTextContainer}>
      <Text style={styles.alreadyMainText}>
        {mainText}{' '}
        <Text onPress={handler} style={styles.alreadySubText}>
          {subText}
        </Text>
      </Text>
    </View>
  );
};

export default AlreadyText;
