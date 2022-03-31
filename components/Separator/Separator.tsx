import { View } from 'react-native'
import React from 'react'

interface SeparatorProps {
    color?: string
}

 export const Separator: React.FunctionComponent<SeparatorProps> = ({
     color = "#01ABE9"
 }) => {
  return (
    <View style={{
        height: 1,
        width: "100%",
        backgroundColor: color,
        marginTop: 18,
        marginBottom: 18

    }}>
        </View>
    
  )
}

