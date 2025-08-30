"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Flex, Box, Text, defaultBaseConfig, AvatarFallback } from "@chakra-ui/react";
//import { Avatar } from "@chakra-ui/react";
import { BsFillGrid1X2Fill, BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";
import * as Avatar from "@radix-ui/react-avatar"

import DefaultImage from '../assets/images/house.jpg'
import { FaB } from "react-icons/fa6";

const Property = ({property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId}}) =>{

    const logoUrl = agency?.logo?.url;

    useEffect(() => {
        // console.log('Avatar component:', Avatar);
        console.log('Type of Avatar:', typeof Avatar);
        console.log("Type of logoUrl: ", typeof logoUrl)
    }, []);

    return(
        <Link href={`/properly/${externalId}`} passHref>
            <Flex flexWrap="wrap" w="420px" p="5" paddingTop="5" justifyContent="flex-start" cursor="pointer">
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house"/> 
                </Box>

                <Box w="full ">
                    <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}</Box>
                            <Text fontWeight="bold" fontSize="lg">R {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box w="100px">
                            <Avatar.Root className="overflow-hidden select-none w-[45px] h-[45px] bg-black/30">
                                <Avatar.Image src={logoUrl} className="w-[100%] h-[100%] object-cover rounded-inherit"/>
                                <Avatar.Fallback delayMs={600} className="w-full h-full flex items-center justify-center bg-white text-[var(--violet-11)] text-[15px] leading-none font-medium">
                                    🏠
                                </Avatar.Fallback>
                            </Avatar.Root>
                            
                        </Box>
                    </Flex>
                    <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                        {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg">
                        {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )

}

export default Property;