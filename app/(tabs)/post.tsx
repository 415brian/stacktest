//links to open OUTSIDE tab bar

import { YStack, Text, Paragraph } from "tamagui";
import { Link } from "expo-router";

export default function PostsPage() {
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
        Pages "pushed ABOVE" the tab bar. Upon clicking, the tab bar will NOT be
        visible.
      </Paragraph>
      <Link
        href="/posts/1"
        style={{ fontSize: 20, color: "blue" }}
      >
        Post 1
      </Link>
      <Link
        href="/posts/2"
        style={{ fontSize: 20, color: "blue" }}
      >
        Post 2
      </Link>
      <Link
        href="/posts/3"
        style={{ fontSize: 20, color: "blue" }}
      >
        Post 3
      </Link>
    </YStack>
  );
}
