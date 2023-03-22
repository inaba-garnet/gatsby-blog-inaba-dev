// src/templates/post.js
import React from "react"
import Layout from "../components/layout";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { Box, Badge, Image, Link, Heading, Text } from '@chakra-ui/react'

export default function Post({ pageContext }) {
    const { title, publishDate, heroImage } = pageContext.post;
    const body = pageContext.post.body.childMdx.body;

    return (
        <Layout>
            <Box>
                <Heading as="h2" size="xl">
                    {title}
                </Heading>
                <Image src={heroImage.file.url} alt="サンプル" w='100%' maxH='400px' objectFit='cover'/>
                <Text>{publishDate}</Text>
            </Box>
            <Box>
                <MDXRenderer>{body}</MDXRenderer>
            </Box>
        </Layout>
    )
}