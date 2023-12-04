import { Tabs, useRouter } from "expo-router";
import { Button } from "tamagui";

export default function Layout() {
  const router = useRouter();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "List"
        }}
      />
    </Tabs>
  );
}
