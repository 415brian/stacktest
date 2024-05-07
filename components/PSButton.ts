import { Button, ButtonProps, ButtonText, styled } from "tamagui";

export const PSButton = styled(Button, {
  name: "PSButton",
  borderRadius: 50,
  backgroundColor: "#1C74E4",
  borderColor: "#1C74E4",
  variants: {
    variant: {
      primary: {
        backgroundColor: "#1C74E4"
      },
      secondary: {
        backgroundColor: "white",
        borderColor: "#1C74E4"
      },
      tertiary: {
        height: 30,
        backgroundColor: "#EEEEEF",
        borderColor: "#EEEEEF"
      },
      transparent: {
        height: 30,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 50
      },
      unavailable: {
        backgroundColor: "#EBEBE4",
        borderColor: "#EBEBE4",
        borderWidth: 1
      }
    },
    disabled: {
      true: {
        backgroundColor: "#EBEBE4",
        borderColor: "#EBEBE4",
        borderWidth: 1
      }
    }
  } as const
});

export const PSButtonText = styled(ButtonText, {
  name: "PSButtonText",
  fontSize: "$5",
  color: "white",
  // BP: tamagui.config.json?
  // fontWeight: "$5", // $4
  fontWeight: "700", // 600, 700
  variants: {
    variant: {
      primary: {
        color: "white"
      },
      secondary: {
        color: "#1C74E4"
      },
      tertiary: {
        color: "#1C74E4",
        fontSize: "$4"
      },
      transparent: {
        color: "white",
        fontSize: "$4"
      },
      unavailable: {
        color: "darkgray"
      }
    },
    disabled: {
      true: {
        color: "darkgray"
      }
    }
  } as const
});
