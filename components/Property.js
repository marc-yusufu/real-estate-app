"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Flex, Box, Text, defaultBaseConfig, AvatarFallback } from "@chakra-ui/react";
import { Avatar, defineStyle } from "@chakra-ui/react";
import { BsFillGrid1X2Fill, BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";
// import * as Avatar from "@radix-ui/react-avatar"

import DefaultImage from '../assets/images/house.jpg'
import { FaB } from "react-icons/fa6";
import { fetchApi } from "../utils/fetchApi";

const ringCss = defineStyle({
    outlineWidth: "1px",
    outlineColor: "#EDEDED",
    outlineOffset: "2px",
    outlineStyle: "solid",
})

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
                <Box  w="400px" h="250px" position="relative">
                    <Image src={coverPhoto ? coverPhoto.url : DefaultImage} fill style={{objectFit: "cover"}} alt="house"/> 
                </Box>

                <Box w="full">
                    <Flex w="full" paddingTop="2" alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center">
                            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}</Box>
                            <Text fontWeight="bold" fontSize="lg">R {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box paddingTop="2">
                            <Avatar.Root css={ringCss} >
                                <Avatar.Image src={logoUrl}/>
                                <Avatar.Fallback >
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