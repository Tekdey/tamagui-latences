import React from 'react'
import { Button, Image, Text, YStack } from 'tamagui'

export default function RoundedButton(props) {
  return (
    <YStack justifyContent='center' alignItems='center'>
        <Button 
            borderRadius={props.borderRadius}
            width={props.width}
            height={props.height}
            onPress={props.onPress}
        >
            <Image 
                source={{
                    uri: props.uri ?? ""
                }}
                width={props.width}
                height={props.height}
                borderRadius={props.borderRadius}
            />
        </Button>
      <Text fontSize={30}>{props.label}</Text>
    </YStack>
  )
}