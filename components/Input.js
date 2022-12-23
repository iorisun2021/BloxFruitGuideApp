import { TextInput, Text } from "react-native";
export default function Input({
  title,
  value,
  setValue,
  autoCorrect = false,
  autoCapitalize = "none",
  secureTextEntry = false,
  multiline = false,
  keyboardType = "default",
}) {
  return (
    <>
      <Text color="#000">{title}</Text>
      <TextInput
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => setValue(text)}
        style={{
          width: "100%",
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#000",
          marginBottom: 30,
          color: "#000yiw",
        }}
      />
    </>
  );
}
