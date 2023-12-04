import { YStack, Text, Button } from "tamagui";
import { useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      space="$3"
    >
      <Text fos="$4">Page "pushed withiin" the tab bar:</Text>
      <Button
        bc="white"
        borderWidth="$1"
        borderColor="blue"
        borderRadius={10}
        onPress={() => router.push("/home/settings")}
      >
        <Button.Text
          color="blue"
          fow="600"
          fos="$5"
        >
          Settings Page
        </Button.Text>
      </Button>
    </YStack>
  );
}
