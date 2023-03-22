import * as React from "react"
import { SimpleGrid } from '@chakra-ui/react'
import PostCard from "./post-link"

export const PostList = ({ posts }) => {
    return (
      <SimpleGrid minChildWidth='300px' spacing='24px'>
        {posts.edges.map(edge =>
        <PostCard key={edge.node.slug} post={edge.node} />
      )}
      </SimpleGrid>
    )
  }

export default PostList
