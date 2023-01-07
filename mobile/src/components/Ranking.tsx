import { VStack, Text } from "native-base";

import { RankingCard } from "./RankingCard";

export function Ranking(){
    return (
        <VStack>
            <RankingCard />
            <RankingCard />
            <RankingCard />
            <RankingCard />
        </VStack>
    )
}