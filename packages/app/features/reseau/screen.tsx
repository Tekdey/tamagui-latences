import Title from '@my/ui/src/components/Title'
import ReseauCard from '@my/ui/src/components/ReseauCard'
import React from 'react'
import { XStack, YStack, Input, Button, Text, ScrollView, Stack } from 'tamagui'
import { isWeb } from '@tamagui/constants'
import { View } from 'react-native'


export default function ReseauScreen() {
  return (
    <YStack>
       

        {/*  
        * HEADER
        */}

    <YStack justifyContent='center' alignItems='center' gap={50}>
        <Title text={"Feed."} color={"green"} last={"red"} />
        <XStack justifyContent='space-around' alignItems='center' w={"100%"}>
        <Input placeholder={"Chercher"} borderRadius={50} width={300} height={60} />
            <Button backgroundColor={"orange"}>
                <Text>Filter by ...</Text>
            </Button>
        </XStack>
      </YStack>

      
      <YStack>
        <ScrollView>
            {Array.from({ length: isWeb ? 1 : 100 }).map((_, i) => (
                <ReseauCard key={i}
                uri={"https://images.unsplash.com/photo-1682687220640-9d3b11ca30e5?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            ))}
            {/* {Array.from({ length: 1 }).map((_, i) => (
                <View key={i}>
                    <Text>{i}</Text>
                    <Text>{i + i}</Text>
                    <Text>{i +1}</Text>
                </View>
            ))} */}
        </ScrollView>
      </YStack>
    </YStack>
  )
}