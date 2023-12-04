import React from "react";
import { Redirect } from "expo-router";
import { YStack, Text, Button } from "tamagui";

export default function StartPage() {
  return <Redirect href="/home" />;
}

// import { Github, Twitter } from "@tamagui/lucide-icons";
// import { Link, useRouter } from "expo-router";
// import {
//   Button,
//   H1,
//   ListItem,
//   Paragraph,
//   Separator,
//   YGroup,
//   YStack
// } from "tamagui";

// export default function Home() {
//   const router = useRouter();

//   return (
//     <>
//       <YStack
//         space="$4"
//         maxWidth={600}
//       >
//         <H1 textAlign="center">Welcome Brian.</H1>
//         <Paragraph textAlign="center">
//           Here&apos;s a basic starter to show navigating from one screen to
//           another.
//         </Paragraph>
//       </YStack>

//       <YStack space="$2.5">
//         <Button onPress={() => router.push("/users/testuser")}>
//           Go to user page
//         </Button>
//         <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
//       </YStack>
//     </>
//   );
// }
