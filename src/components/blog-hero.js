import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, Heading } from "./ui"
import * as styles from "./blog-hero.css"

export default function BlogHero(props) {
  return (
    <Section>
      <Container>
        <Heading className={styles.blogHeroHeader}>
          {props.heading}
        </Heading>
        {props.text && (
          <Text className={styles.blogHeroText}>{props.text}</Text>
        )}
      </Container>
      <Container width="fullbleed">
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.blogHeroImage}
          />
        )}
        </Container>
    </Section>
  )
}

export const query = graphql`
  fragment BlogHeroContent on BlogHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
