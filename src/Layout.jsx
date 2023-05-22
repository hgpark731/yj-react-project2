import { Text, Box, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import { Children } from "react";
import {
  AiFillApple,
  AiOutlineHome,
  AiOutlineProfile,
  AiOutlineContacts,
} from "react-icons/ai";

export default function Layout({ children }) {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w="sm">
          {/* header */}
          <Box
            zIndex={9}
            bg={"#222"}
            position={"fixed"}
            top={"0"}
            w={"inherit"}
            h={"120px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AiFillApple size={32} color={"white"} />
          </Box>

          {/* contents */}
          {children}
          {/* footer */}
          <Box
            bg={"#222"}
            position={"fixed"}
            bottom={"0"}
            w={"inherit"}
            h={"120px"}
          >
            <HStack
              h={"inherit"}
              justifyContent={"space-between"}
              alignItems={"center"}
              fontSize={"16px"}
            >
              <VStack w={"full"} color={"#fff"}>
                <AiOutlineHome />
                <Text>Home</Text>
              </VStack>
              <VStack w={"full"} color={"#fff"}>
                <AiOutlineProfile />
                <Text>Profile</Text>
              </VStack>
              <VStack w={"full"} color={"#fff"}>
                <AiOutlineContacts />
                <Text>Contact</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
