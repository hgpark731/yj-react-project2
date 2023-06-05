import { Box, VStack, Image, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import Kakaomap from "./kakaomap";

export default function Detail() {
  return (
    <Layout canGoBack title="디테일 페이지">
      <VStack py="140px" bg={"gray.800"} spacing={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1685714629963-2f078268e215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </Box>
        <VStack w={"full"} alignItems={"flex-start"} px={4} spacing={1}>
          <Text color="white" fontWeight={"700"}>
            대구 스타벨리
          </Text>
          <Text color="white">대구 최고의 여름 테마파크</Text>
        </VStack>
        <Box w={"95%"} h={"2px"} bg={"gray.700"} />
        <VStack w={"full"} alignItems={"flex-start"} px={4} spacing={1}>
          <Text color="white" fontWeight={"600"}>
            운영시간
          </Text>
          <Text color="white" fontSize={14}>
            10:00~17:00
          </Text>
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"} px={4} spacing={1}>
          <Text color="white" fontWeight={"600"}>
            입장인원
          </Text>
          <Text color="white" fontSize={14}>
            120명
          </Text>
        </VStack>
        <VStack w={"full"} alignItems={"flex-start"} px={4} spacing={1}>
          <Text color="white" fontWeight={"600"}>
            이용요금
          </Text>
          <Text color="white" fontSize={14}>
            20,000원
          </Text>
        </VStack>

        {/* 카카오지도 */}
        <Kakaomap />
      </VStack>
    </Layout>
  );
}
