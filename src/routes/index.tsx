import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {Button, Flex, Text} from '@radix-ui/themes'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate();
  return (
    <Flex gap={"6"} direction={"column"} justify={"center"} align={"center"} className='w-full h-full'>
      <Flex direction={"column"} gap={"2"} align={"center"}>
        <Text className='text-5xl font-bold'>Can you... ack me?</Text>
        <Text>Choose a difficulty</Text>
      </Flex>
      <Button size={"4"} className='w-64 cursor-pointer font-light' variant='soft'
        onClick={() => {
          navigate({to:"/login"})
        }}
      >
        <Text>Go easy on me 🥱</Text>
      </Button>
      <Button disabled size={"4"} className='w-64 cursor-not-allowed font-light' variant='soft'>
        <Flex direction={"column"}>
          <Text>
            I want a challenge 🤔
          </Text>
          <Text className='text-xs -mt-1'>
            (Work in progress)
          </Text>
        </Flex>
      </Button>
      <Button disabled size={"4"} className='w-64 cursor-not-allowed font-light' variant='soft'>
        <Flex direction={"column"}>
          <Text>
            Mental insanity 👹
          </Text>
          <Text className='text-xs -mt-1'>
            (Work in progress)
          </Text>
        </Flex>
      </Button>
    </Flex>
  )
}
