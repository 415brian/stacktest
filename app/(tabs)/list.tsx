//links to open OUTSIDE tab bar

import { YStack, Text } from "tamagui";
import { Link } from "expo-router";

export default function ListPage() {
  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      space="$3"
    >
      <Link href="/list/1">News One</Link>
      <Link href="/list/2">News Two</Link>
      <Link href="/list/3">News Three</Link>
    </YStack>
  );
}
