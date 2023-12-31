import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text whiteSpace="nowrap">Light Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
