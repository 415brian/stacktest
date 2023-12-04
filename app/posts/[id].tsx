import { YStack, Text } from "tamagui";
import { Stack, useGlobalSearchParams } from "expo-router";

export default function DetailsPage() {
  const { id } = useGlobalSearchParams();

  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
    >
      <Stack.Screen options={{ headerTitle: `Details #${id} ` }} />
      <Text>Details for post {id}</Text>
    </YStack>
  );
}
