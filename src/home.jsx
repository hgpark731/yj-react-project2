import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

const dataTour = [
  {
    text: "Guitar",
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/guitar-1853661_640.jpg",
  },
  {
    text: "Cigarette",
    image:
      "https://cdn.pixabay.com/photo/2016/12/29/12/20/woman-1938429_640.jpg",
  },
  {
    text: "Ninja",
    image:
      "https://cdn.pixabay.com/photo/2017/08/26/21/40/people-2684421_640.jpg",
  },
];
const dataNew = [
  {
    text: "Subway",
    image:
      "https://cdn.pixabay.com/photo/2023/05/07/20/44/woman-7977101__340.jpg",
  },
  {
    text: "Bridge",
    image:
      "https://cdn.pixabay.com/photo/2023/05/09/18/50/bridge-7982238__340.jpg",
  },
  {
    text: "Stair",
    image:
      "https://cdn.pixabay.com/photo/2023/04/23/16/14/station-7946105__340.jpg",
  },
  {
    text: "Cat",
    image:
      "https://cdn.pixabay.com/photo/2023/05/15/14/35/cat-7995231__340.jpg",
  },
];

export default function Home() {
  return (
    <Layout>
      <VStack w={"inherit"} py={"140px"} px={4} alignItems={"flex-start"}>
        <Text fontWeight={600} fontSize={24}>
          최신상품
        </Text>
        <Grid gridTemplateColumns={"repeat(2, 1fr)"} w={"full"} gap={2}>
          {dataNew.map((item, i) => (
            <GridItem
              key={i}
              h={200}
              border={"1px"}
              rounded={"md"}
              borderColor={"gray.300"}
              backgroundImage={`url(${item.image})`}
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              position={"relative"}
              overflow={"hidden"}
            >
              <Box
                position={"absolute"}
                top={0}
                left={0}
                w={"full"}
                h={"full"}
                bgGradient="linear(to-r, rgba(0,0,0,0.9), rgba(0,0,0,0.1)) "
              >
                <Text
                  color={"#ddd"}
                  position={"absolute"}
                  w={"full"}
                  bottom={0}
                  align={"center"}
                  py={4}
                  fontWeight={"bold"}
                >
                  {item.text}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
      <VStack w={"inherit"} py={"140px"} px={4} alignItems={"flex-start"}>
        <Text fontWeight={600} fontSize={24}>
          이벤트
        </Text>
        <Grid w={"full"} gap={2}>
          {dataTour.map((item, i) => (
            <GridItem
              key={i}
              rounded={"lg"}
              w={"full"}
              h={"120px"}
              backgroundImage={`url(${item.image})`}
              backgroundSize={"cover"}
              backgroundPosition={"center"}
              position={"relative"}
            >
              <Box
                position={"absolute"}
                top={0}
                left={0}
                w={"full"}
                h={"full"}
                bgGradient={"linear(to-r, rgba(0,0,0,0.7), rgba(0,0,0,0.1))"}
              >
                <Text
                  w={"full"}
                  position={"absolute"}
                  top={"50%"}
                  left={"50%"}
                  transform={"translate(-50%, -50%)"}
                  fontWeight={"bold"}
                  color={"#fff"}
                  fontSize={20}
                  align={"center"}
                >
                  {item.text}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Layout>
  );
}
