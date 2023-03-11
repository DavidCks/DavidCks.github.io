import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Text,
  SuperHeading,
} from "../components/ui"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"

export default function BlogPost(props) {
  let post = getCurrentPost(props)
  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          <SuperHeading as="h1" center>
            {post.title}
          </SuperHeading>
          {post.author && (
            <Box center>
              <Flex>
                <Text variant="normal">Author:</Text>
                <Text variant="bold">{post.author}</Text>
              </Flex>
            </Box>
          )}
          <Space size={2} />
          <Text center>{post._updatedAt}</Text>
          <Space size={4} />
          {post.image && (
            <Flex variant="center"><GatsbyImage
              alt={post.image.alt}
              image={post.image.gatsbyImageData}
              className={styles.blogImage}
            /></Flex>
          )}
          <Space size={5} />
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}
export const Head = (props) => {
  let post = getCurrentPost(props)
  return <SEOHead {...post} description={post.content} />
}

function getCurrentPost(props) {
  const { blogPage } = props.data
  const currentUrl =  props.location.substring(0, window.location.href.length - 1).split("/").pop()
  return findObjectByTitle(blogPage.blocks, currentUrl.replaceAll("-"," "))
}

function findObjectByTitle(arr, title) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].title === title) {
      return arr[i];
    }
  }
  return null;
}

export const query = graphql`
  {
  blogPage {
    blocks: content {
      id
      ...BlogPostContent
      ... on SanityBlogPost {
        _updatedAt(formatString: "dddd, D. MMMM YYYY")
      }
    }
  }
}
`
