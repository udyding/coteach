import { Flex, Image, Tag, Text } from "@chakra-ui/react";
import franklin from './assets/franklin.png'


export const Bot = ({ text }) => {
    return (
        <>
            <Flex gap={6}>
                <Flex flexDirection="column" gap={2}>
                    <Image src={franklin} htmlWidth="90" fit alt='franklin' />
                    <Tag size='md' fontWeight="bold" justifyContent='center' variant='subtle' colorScheme='orange'>Franklin</Tag>
                </Flex>
                <div className="typewriter">
                    <Text fontSize="3xl" color="orange.500">{text}</Text>
                </div>
            </Flex>
        </>
    )
}
