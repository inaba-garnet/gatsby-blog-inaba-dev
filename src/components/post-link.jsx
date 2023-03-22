import React from "react"
import { Box, Badge, Image, Heading, Text } from '@chakra-ui/react'
import { Link } from "gatsby"

export const PostCard = ({ post }) => {
    const { title, publishDate, heroImage } = post;
    const description = post.description.description;
    const pageLink = `/post/${post.slug}/`

    return (
        <Link to={pageLink}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={heroImage.file.url} alt="サンプル" w='100%' maxH='200px' objectFit='cover'/>

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                        New
                        </Badge>
                    </Box>
            
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        <Text>{title}</Text>
                    </Box>
            
                    <Box>
                        <Text>{description}</Text>
                    </Box>

                </Box>
            </Box>
        </Link>
        
    )
  }

  export default PostCard