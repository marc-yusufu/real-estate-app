import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Avatar, defaultBaseConfig } from "@chakra-ui/react";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FaBed, FaBath } from "react-icons/fa";
import millify from "millify";

import DefaultImage from '../assets/images/house.jpg'

const Property = ({property: {coverPhoto, price, rentFrenquency, rooms, title, baths, area, agency, isVerified, externalId}}) =>(
    <Link href={`/properly/${externalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house"/> 
            </Box>
        </Flex>
    </Link>
)

export default Property;