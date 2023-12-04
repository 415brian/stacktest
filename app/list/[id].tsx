import { YStack, Text } from "tamagui";
import { Stack, useSearchParams } from "expo-router";

export default function DetailsPage() {
  const { id } = useSearchParams();

  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
    >
      <Stack.Screen options={{ headerTitle: `Details #${id} ` }} />
      <Text>Details for : {id}</Text>
    </YStack>
  );
}
