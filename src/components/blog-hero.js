import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, Heading, Divider } from "./ui"
import * as styles from "./blog-hero.css"

export default function BlogHero(props) {
  return (
    <>
    <Section style={{paddingBottom: "0"}}>
      <Container>
        <Heading className={styles.blogHeroHeader}>
          {props.heading}
        </Heading>
        {props.text && (
          <Text className={styles.blogHeroText}>{props.text}</Text>
        )}
      </Container>
      <Container width="fullbleed" style={{ paddingTop: "0"}}>
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.blogHeroImage}
          />
        )}
        </Container>
        <Divider></Divider>
    </Section>
    </>
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
