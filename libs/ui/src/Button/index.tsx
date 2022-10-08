import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps{
    onPress: () => void,
    text: string
}

export const Button = ({
  text,
  onPress,
}: ButtonProps) => {
// export const Button : React.FunctionComponent<ButtonProps> = ({
//     onPress,
//     text
// }) => {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
        >
          <Text style={[styles.textMd, styles.textCenter]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  textMd: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#ccc',
    paddingVertical: 16,
    borderRadius: 8,
    width: '50%',
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingHorizontal: 16,
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

