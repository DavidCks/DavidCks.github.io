import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text
export const blogHeroHeader = style({
  paddingTop: theme.space[4],
  width: "100%",
  textAlign: "center",
  color: "white",
  filter: "drop-shadow(0px 0px 2px black)",
})

export const blogHeroText = style({
  fontSize: theme.fontSizes[3],
  marginBottom: theme.space[5],
  width: "100%",
  color: "white",
  filter: "drop-shadow(0px 0px 2px black) drop-shadow(0px 0px 20px black)",
  textAlign: "center",
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[4],
    },
  },
})

export const blogHeroImage = style({
  marginTop: "-364px",
  zIndex: "-1",
  width: "100%",
})
