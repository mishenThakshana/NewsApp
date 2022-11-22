import {FC} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from 'src/constants';
import styles from 'src/styles/Common.styles';

interface InputGroupInterface {
  placeholder: string;
  type?: string;
  handler: (val: string) => void;
  value: string;
}

const InputGroup: FC<InputGroupInterface> = ({
  placeholder,
  handler,
  type,
  value,
}) => {
  return (
    <View style={styles.inputGroupContainer}>
      <Text style={styles.inputPlaceholder}>{placeholder}</Text>
      <TextInput
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        secureTextEntry={type === 'password' && true}
        onChangeText={handler}
        style={styles.input}
        cursorColor={colors.PRIMARY}
        value={value}
      />
    </View>
  );
};

export default InputGroup;
