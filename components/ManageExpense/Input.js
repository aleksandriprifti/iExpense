import { Text, View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyle } from "../../constants/style";

const Input = ({ label, invalid, style, textInputConfig }) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyle.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyle.colors.primary100,
    color: GlobalStyle.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyle.colors.error50,
  },
  invalidInput: {
    backgroundColor: GlobalStyle.colors.error50,
  },
});
