import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from 'src/styles/Common.styles';

interface TitleInterface {
  title: string;
}

const Title: FC<TitleInterface> = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
