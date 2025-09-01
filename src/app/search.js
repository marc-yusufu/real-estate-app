//last watch 1:18:00

import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import SearchFilters from "../../components/SearchFilters";
import Property from "../../components/Property";

import noresult from "../../assets/images/noresult";

const Search = ({properties}) =>{
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    const purpose = query.purpose

    return(
        <Box>
            <Flex
            cursor="pointer"
            bg="gray.100"
            borderBottom="1px solid"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
            onClick={()=> setSearchFilters((prev) => !prev)} //to toggle the filter on and off
            >
                <Text>Search</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}/>            
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text> 
            <Flex flexWrap="wrap">
                {properties.map((prperty) => <Property property={property} key={prperty.id} />)}
            </Flex>
            {properties.length === 0 && ( //if there are no properties
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                    <Image alt="no result" src={noresult}/>
                    <Text fontSize="2xl" marginTop="3">No results found</Text>
                </Flex>
            )}
        </Box>
    )
}