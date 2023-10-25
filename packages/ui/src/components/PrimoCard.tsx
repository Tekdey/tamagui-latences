import React from 'react'
import {YStack, Text, XStack, Stack} from "tamagui"
import Avatar from './Avatar'
import ButtonComponent from './ButtonComponent'

export default function PrimoCard(props) {
  return (
    <YStack backgroundColor={"$blue10Light"} borderRadius={30} padding={10} marginRight={20}>
      <YStack>
        <Text fontSize={23}>Hello world</Text>
        <Text fontSize={19}>Hello world</Text>
      </YStack>
      <XStack gap={10}>
        <Avatar 
            uri={props.uri}
        />
        <YStack justifyContent='center'>
            <Text fontSize={20} fontWeight={"bold"}>Hello world</Text>
            <Text>Hello world</Text>
        </YStack>
        <Stack justifyContent='center' alignItems='center'>
            <ButtonComponent 
                text={"Voir la demande"}
                color={"green"}
            />
        </Stack>
      </XStack>
    </YStack>
  )
}