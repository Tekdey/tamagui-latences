import {
  YStack, XStack, Image, ScrollView,Text
} from 'tamagui'
import React, { useState } from 'react'
import Avatar from '@my/ui/src/components/Avatar'
import Title from '@my/ui/src/components/Title'
import ButtonComponent from '@my/ui/src/components/ButtonComponent'
import RoundedButton from '@my/ui/src/components/RoundedButton'
import PrimoCard from '@my/ui/src/components/PrimoCard'
import { useRouter } from 'solito/router'
// import {router} from "expo-router"

export function HomeScreen() {

  const router = useRouter()

  return (
    <YStack gap={30}>
      {/*  
        * HEADER
        */}
      <XStack justifyContent='center' alignItems='center' gap={50}>
        <Avatar uri={"https://images.unsplash.com/photo-1697644371824-41d4d0a8a12f?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Title text={"Hello world"} color={"green"} last={"red"} />
      </XStack>

        {/*  
        * PRES
        */}

       <XStack justifyContent='space-around' alignItems='center' gap={50}>
        <ButtonComponent text={"Présentation"} color={"green"} />
        <Image 
            source={{
                uri: "https://images.unsplash.com/photo-1697506788707-53f5b1a1f1f3?auto=format&fit=crop&q=80&w=2264&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }}
            width={500}
            height={500}
            borderRadius={50}

          />
        </XStack>


        {/*  
        * NAV
        */}

        <XStack justifyContent='space-around' alignItems='center' gap={50}>
          <RoundedButton 
            uri={"https://images.unsplash.com/photo-1696356893459-9de3a12ecb62?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            width={110}
            height={110}
            borderRadius={129}
            label={"Réseau"}
            onPress={() => router.push('/reseau')}
          />
          <RoundedButton 
            uri={"https://images.unsplash.com/photo-1696356893459-9de3a12ecb62?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            width={110}
            height={110}
            borderRadius={129}
            label={"Annuaire"}
          />
          <RoundedButton 
            uri={"https://images.unsplash.com/photo-1696356893459-9de3a12ecb62?auto=format&fit=crop&q=80&w=2187&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            width={110}
            height={110}
            borderRadius={129}
            label={"Abonnement"}
          />
        </XStack>


         {/*  
        * CARDS
        */}


        <YStack gap={30}>
          <Text fontWeight={"bold"} fontSize={30}>Mes demandes</Text>
          <ScrollView horizontal >
            <PrimoCard 
              uri={"https://images.unsplash.com/photo-1696962678565-bee84e6b9cb6?auto=format&fit=crop&q=80&w=2160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              />
            <PrimoCard 
              uri={"https://images.unsplash.com/photo-1696962678565-bee84e6b9cb6?auto=format&fit=crop&q=80&w=2160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              />
            <PrimoCard 
              uri={"https://images.unsplash.com/photo-1696962678565-bee84e6b9cb6?auto=format&fit=crop&q=80&w=2160&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              />
          </ScrollView>
        </YStack>



    </YStack>
  )
}
