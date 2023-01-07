import { HStack, VStack, Text, Heading, Avatar } from "native-base";

export function RankingCard() {

    return (
        <HStack
            w="full"
            h={20}
            bgColor="gray.800"
            borderBottomWidth={3}
            borderBottomColor="yellow.500"
            justifyContent="space-between"
            alignItems="center"
            rounded="sm"
            mb={3}
            p={4}
        >
            
            <Avatar
                source={{ uri: 'https://lh3.googleusercontent.com/ogw/AOh-ky12BbSdB2FUGY2hn0j4OrCQQpcFV06CJYoHaFDI_XY=s32-c-mo' }}
                w={10}
                h={10}
                rounded="full"
                borderWidth={2}
                marginRight={-3}
                borderColor="gray.800"
            />

            <VStack mr={10}>
                <Heading color="white" fontSize="md" fontFamily="heading">
                    Rodrigo Golçalves
                </Heading>

                <Text color="gray.200" fontSize="xs">
                    36 ponto(s)
                </Text>
            </VStack>

            <VStack
                w={37}
                h={23}
                bgColor="yellow.500"
                rounded={20}
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize="xs" fontFamily="heading" color="black" >
                    1º
                </Text>
            </VStack>
        </HStack>
    )
}