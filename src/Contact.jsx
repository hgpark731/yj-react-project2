import { Button, Input, Radio, Stack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Contact() {
  return (
    <Layout>
      <VStack
        py="140px"
        alignItems={"flex-start"}
        px={4}
        w={"full"}
        spacing={6}
        bgColor={"#f2f2f2"}
        h={"900px"}
      >
        <Text fontWeight={700} fontStyle={20}>
          무료상담신청
        </Text>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text>Name</Text>
          <Input placeholder="이름을 입력해주세요." bgColor={"#fff"}></Input>
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text>Contact</Text>
          <Input placeholder="연락처를 입력해주세요." bgColor={"#fff"}></Input>
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"}>
          <Text>E-mail</Text>
          <Input placeholder="E-mail을 입력해주세요." bgColor={"#fff"}></Input>
        </VStack>
        <Stack direction="row">
          <Radio value="1">남성</Radio>
          <Radio value="2">여성</Radio>
        </Stack>
        <Button bgColor={"#262626"} color={"#fff"}>
          전송하기
        </Button>
      </VStack>
    </Layout>
  );
}
