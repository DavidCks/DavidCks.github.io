import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Flex, Text, Heading } from "./ui"
import * as styles from "./blog-post.css"

export default function BlogPost(props) {
  return (
    <Section>
      <Container>
        <Flex variant="start">
          {props.image && (
            <GatsbyImage
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
              className={styles.blogPostImage}
            />
          )}
          <Flex variant="columnStart" className={styles.blogPostTextContainer}>
            <Heading className={styles.blogPostHeader}>
              {props.title}
            </Heading>
            <Text className={styles.blogPostText} dangerouslySetInnerHTML={{
                  __html: props.content,
                }}>
            </Text>
            <div className={styles.truncatorStyle}></div>
            
          </Flex>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment BlogPostContent on BlogPost {
    id
    title
    image {
      id
      gatsbyImageData
      alt
    }
    content
  }
`
