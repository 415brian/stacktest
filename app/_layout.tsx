import React, { Suspense, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme } from "tamagui";
import config from "../tamagui.config";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name={colorScheme}>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false
              }}
            />
          </Stack>
        </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
