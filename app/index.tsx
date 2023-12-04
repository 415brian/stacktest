import React from "react";
import { Redirect } from "expo-router";
import { YStack, Text, Button } from "tamagui";

export default function StartPage() {
  return <Redirect href="/home" />;
}
