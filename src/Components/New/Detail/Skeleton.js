import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Box, Flex, SlideFade } from "@chakra-ui/react";

const Loader = ({ isOpen }) => {
  let textSkeleton = [];
  for (let index = 0; index < 10; index++) {
    textSkeleton.push(
      <SlideFade in={isOpen} offsetY="40px">
        <Box m="10px 10px" key={index}>
          <Skeleton height={50} duration={2} />
        </Box>
      </SlideFade>
    );
  }
  return (
    <SkeletonTheme highlightColor="#9AC9FB">
      <Flex minH="600px">
        <Box id="comment" w="100vw" bgColor="#9AC9FB">
          {textSkeleton}
        </Box>
      </Flex>
    </SkeletonTheme>
  );
};
export default Loader;
