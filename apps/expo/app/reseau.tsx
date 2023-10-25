import ReseauScreen from 'app/features/reseau/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Reseau',
        }}
      />
      <ReseauScreen />
    </>
  )
}
