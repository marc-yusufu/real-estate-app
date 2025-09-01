import Link from "next/link";
import { Menu, MenuItem, IconButton, Flex, Box, Spacer, Button } from "@chakra-ui/react";
import { MenuButton, MenuList } from "@chakra-ui/menu";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";

const NavBar = () =>{
    return(
        <Flex p="2" marginBottom="2" borderBottom="1px solid" borderColor="gray.200">
            <Box fontSize="3xl" color="blue.400" fontWeight="bold">
                <Link href="/" className="pl-2" >
                    RealEstate
                </Link>
            </Box>

            <Spacer/>

            <Box>
                <Menu.Root>
                    {/* <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400"/> */}
                    <Menu.Trigger asChild>
                        <Button variant="outlined" color="red.400">
                            <FcMenu/>
                        </Button>
                    </Menu.Trigger>
                    <Menu.Content position="absolute" zIndex={1}>
                        <Link href="/" passHref>
                            <Menu.Item  
                                _hover={{
                                    border: "1px solid",
                                    borderColor: "gray.200", 
                                    bg: "transparent",
                                    borderRadius: "5px"
                                }} 
                                cursor="pointer"
                                >
                                    <FcHome/> Home
                            </Menu.Item>
                        </Link>
                        <Link href="/search" passHref>
                            <Menu.Item                                 
                                _hover={{
                                    border: "1px solid",
                                    borderColor: "gray.200", 
                                    bg: "transparent",
                                    borderRadius: "5px"
                                }} 
                                cursor="pointer"
                                >
                                    <BsSearch/> Search
                            </Menu.Item>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <Menu.Item                                 
                                _hover={{
                                    border: "1px solid",
                                    borderColor: "gray.200", 
                                    bg: "transparent",
                                    borderRadius: "5px"
                                }} 
                                cursor="pointer"
                                >
                                    <FcAbout/>Buy Property
                            </Menu.Item>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <Menu.Item                                 
                                _hover={{
                                    border: "1px solid",
                                    borderColor: "gray.200", 
                                    bg: "transparent",
                                    borderRadius: "5px"
                                }} 
                                cursor="pointer"
                                >
                                    <FiKey/>Rent Property
                            </Menu.Item>
                        </Link>
                    </Menu.Content>
                </Menu.Root>
            </Box>

        </Flex>
    )
}

export default NavBar;