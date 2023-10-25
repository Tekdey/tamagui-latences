import React from 'react'
import { XStack, Text } from 'tamagui'

const Title = (props) => {
  return (
    <XStack gap={3}>
        <Text fontSize={45} color={props.color}>{props.text.slice(0, -1)}</Text>
        <Text fontSize={45} color={props.last}>{props.text.slice(-1)}</Text>
    </XStack>
  )
}

export default Title