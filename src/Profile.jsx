import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack
        py="140px"
        px={4}
        w={"full"}
        spacing={6}
        bgColor={"#f2f2f2"}
        h={"900px"}
      >
        <Avatar
          name="손흥민"
          src="data:image/jpeg;base64,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"
          bgColor={"#fff"}
          size={"xl"}
        />
        <VStack>
          <Text fontSize={20} fontWeight={600}>
            손흥민
          </Text>
          <Text fontSize={14}>발롱도르 수상을 꿈꾸는 손흥민</Text>
        </VStack>
        <HStack w={"80%"}>
          <Box
            border={"1px"}
            rounded={"x1"}
            px={"20px"}
            py={1}
            w={"140px"}
            textAlign={"center"}
            color={"#0D0D0D"}
            textTransform={"uppercase"}
            fontWeight={"700"}
          >
            Contact
          </Box>
          <Box
            border={"1px"}
            rounded={"x1"}
            px={"20px"}
            py={1}
            w={"140px"}
            textAlign={"center"}
            color={"#0D0D0D"}
            textTransform={"uppercase"}
            fontWeight={"700"}
          >
            Follow
          </Box>
        </HStack>
      </VStack>
    </Layout>
  );
}
