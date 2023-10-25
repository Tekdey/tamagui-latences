import React from 'react'
import { Image, Stack } from 'tamagui'

const Avatar = (props) => {
  return (
    <Stack>
      <Image 
        source={{
            uri: props?.uri ?? ""
        }}
        width={100}
        height={100}
        borderRadius={50}

      />
    </Stack>
  )
}

export default Avatar