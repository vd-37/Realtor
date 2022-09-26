import { Box } from "@chakra-ui/react";

var date = new Date();

const Footer = () => (
    <Box textAlign={"center"} borderTop="1px" p="5" borderColor={"gray.300"} color="gray.600">
        {date.getFullYear()}  Realtor, Inc. 
    </Box>
)

export default Footer;