import {
    Box,
    Card,
    Divider,
    Icon,
    InlineGrid,
    InlineStack,
    Link,
    Text,
  } from "@shopify/polaris";
  import { InfoIcon } from "@shopify/polaris-icons";
  
  function CardDefault() {
    return (
        <InlineGrid columns={["oneThird","oneThird","oneThird"]}>
            <Box paddingInline={"400"}>
      <Card>
        <Box minHeight="90px">
          <InlineGrid columns={["oneHalf", "oneHalf"]}>
            <InlineStack align="start">
              <Text fontWeight="bold" as="h6">Views</Text>
            </InlineStack>
            <InlineStack align="end">
              <div>
                <Icon source={InfoIcon} tone="base" />
              </div>
            </InlineStack>
          </InlineGrid>
        </Box>
        <Box minHeight="30px">
          <div>
            <Text fontWeight="bold"  as="h6">0</Text>
          </div>
        </Box>
        <Divider></Divider>
        <Box minHeight="30px" paddingBlockStart={"100"}>
          <InlineGrid columns={["oneHalf", "oneHalf"]}>
            <InlineStack align="start">
              <Text  as="h6">Last 30 days</Text>
            </InlineStack>
            <InlineStack align="end">
              <Link>View Analytics</Link>
            </InlineStack>
          </InlineGrid>
        </Box>
      </Card>
      </Box>
      <Box paddingInline={"400"}>
      <Card>
        <Box minHeight="90px">
          <InlineGrid columns={["oneHalf", "oneHalf"]}>
            <InlineStack align="start">
              <Text fontWeight="bold" as="h6">Views</Text>
            </InlineStack>
            <InlineStack align="end">
              <div>
                <Icon source={InfoIcon} tone="base" />
              </div>
            </InlineStack>
          </InlineGrid>
        </Box>
        <Box minHeight="30px">
          <div>
            <Text fontWeight="bold"  as="h6">0</Text>
          </div>
        </Box>
        <Divider></Divider>
        <Box minHeight="30px" paddingBlockStart={"100"}>
          <InlineGrid columns={["oneHalf", "oneHalf"]}>
            <InlineStack align="start">
              <Text  as="h6">Last 30 days</Text>
            </InlineStack>
            <InlineStack align="end">
              <Link>View Analytics</Link>
            </InlineStack>
          </InlineGrid>
        </Box>
      </Card>
      </Box>
      <Box paddingInline={"400"}>
      <Card>
        <Box minHeight="90px">
          <InlineGrid columns={["oneHalf", "oneHalf"]}>
            <InlineStack align="start">
              <Text fontWeight="bold" as="h6">Views</Text>
            </InlineStack>
            <InlineStack align="end">
              <div>
                <Icon source={InfoIcon} tone="base" />
              </div>
            </InlineStack>
          </InlineGrid>
        </Box>
        <Box minHeight="30px">
          <div>
            <Text fontWeight="bold"  as="h6">0</Text>
          </div>
        </Box>
        <Divider></Divider>
        <Box minHeight="30px" paddingBlockStart={"100"}>
          <InlineGrid columns={["oneHalf", "oneHalf"]}>
            <InlineStack align="start">
              <Text  as="h6">Last 30 days</Text>
            </InlineStack>
            <InlineStack align="end">
              <Link>View Analytics</Link>
            </InlineStack>
          </InlineGrid>
        </Box>
      </Card>
      </Box>
      </InlineGrid>
    );
  }
  
  export default CardDefault;