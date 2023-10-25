import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'tamagui'

export default function ButtonComponent(props) {
  return (
      <Button color={"white"} backgroundColor={"orange"} borderRadius={30}>{props.text}</Button>
  )
}