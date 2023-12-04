import { YStack, Text, Button } from "tamagui";
import { Link, useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
    >
      <Button
        bc="white"
        borderWidth="$1"
        borderColor="black"
        borderRadius={10}
        onPress={() => router.push("/home/settings")}
      >
        <Button.Text
          fow={600}
          fos="$5"
        >
          Settings Page
        </Button.Text>
      </Button>
    </YStack>
  );
}
