import { Stack, Text, XStack, YStack } from 'tamagui'
import React from 'react'
import Avatar from './Avatar'
import ButtonComponent from './ButtonComponent'

export default function ReseauCard(props) {
  return (
    <XStack justifyContent='space-around' marginTop={10}>
        <Avatar 
            uri={props.uri}   
            width={70}
            height={70}
            borderRadius={50}
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
        <YStack gap={5} justifyContent='center' alignItems='center'>
          <Stack backgroundColor={"black"} height={10} width={10} borderRadius={50}/>
          <Stack backgroundColor={"black"} height={10} width={10} borderRadius={50}/>
          <Stack backgroundColor={"black"} height={10} width={10} borderRadius={50}/>
        </YStack>
    </XStack>
  )
}