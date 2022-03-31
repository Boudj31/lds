import React from 'react';
import { Text, StyleSheet, Pressable, GestureResponderEvent, Alert } from 'react-native';

interface ButtonProps {
    onPress: GestureResponderEvent
    title?: string
}
export const ButtonCustom: React.FunctionComponent<ButtonProps> = ({
    title = "Sauvegarder",
    onPress=Alert.alert('Simple Button pressed')
}) => {
    return(
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#01ABE9",
      minWidth: 250

  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '800',
    letterSpacing: 0.25,
      fontFamily: 'Jost-Variable',
    color: 'white',
  },
});