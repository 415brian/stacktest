import { Button, Paragraph, Text, YStack } from "tamagui";
import { PSButton, PSButtonText } from "../../../components/PSButton";

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
      <Paragraph
        fos="$4"
        fow="600"
        mx={20}
      >
        Page "pushed WITHIN" the tab bar. Upon clicking, the tab bar will remain
        visible.
      </Paragraph>
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
      <PSButton onPress={() => router.push("/home/settings")}>
        <PSButtonText>Settings Page</PSButtonText>
      </PSButton>
    </YStack>
  );
}
