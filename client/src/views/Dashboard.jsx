import { Avatar, Box, Collapse, Divider, Drawer, DrawerContent, DrawerOverlay, Flex, Grid, GridItem, Heading, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { HiCollection } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { ImMagicWand } from "react-icons/im";
import React from "react";
// import { Logo } from "@choc-ui/logo";

export default function Dashboard() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  const color = "gray.600";

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        // color="white"
        color="gray.600"
        _hover={{
          bg: "gray.100",
          color: "gray.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box as="nav" pos="fixed" top="0" left="0" zIndex="sticky" h="full" pb="10" overflowX="hidden" overflowY="auto" bg="white" borderColor="inherit" borderRightWidth="1px" w="100" {...props}>
      <Flex px="4" py="5" align="center">
        {/* <Logo /> */}
        <Text fontSize="2xl" ml="2" color="brand.500" fontWeight="semibold">
          Choc UI
        </Text>
      </Flex>
      <Flex direction="column" as="nav" fontSize="lg" color="gray.600" aria-label="Main Navigation" bg="white">
        <NavItem icon={MdHome}>Home</NavItem>
        <NavItem icon={ImMagicWand}>Itinerary Generator</NavItem>
        <NavItem icon={FiUser}>Profile</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem>
      </Flex>
    </Box>
  );

  return (
    <Box
      as="section"
      //   bg="gray.50"
      bg="white"
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer isOpen={sidebar.isOpen} onClose={sidebar.onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 80 }} transition=".3s ease">
        <Box as="main" p="4">
          <Heading size="md" color="gray.600">Saved Copy</Heading>
          <Divider my="10px" borderWidth="3px" />
          <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="80" alignItems="center">
            <Grid justifyContent="space-around" p={5} templateColumns="repeat(4, 1fr)" h="100%" gap={5} bg="red">
              <GridItem borderWidth="1px" bg="white" borderStyle="dashed" h="100%" rounded="md" />
              <GridItem borderWidth="1px" bg="white" borderStyle="dashed" h="100%" rounded="md" />
              <GridItem borderWidth="1px" bg="white" borderStyle="dashed" h="100%" rounded="md" />
              <GridItem borderWidth="1px" bg="white" borderStyle="dashed" h="100%" rounded="md" />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
