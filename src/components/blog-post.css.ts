import { style } from "@vanilla-extract/css"
import { theme } from "../theme.css"
import { media } from "./ui.css"

// specific maxWidths are to support design and
// current length of content in the Header and Text
export const blogPostHeader = style({
  marginLeft: theme.space[5],
  marginBottom: 0,
  fontSize: theme.fontSizes[7],
  width: "100%",
})

export const blogPostText = style({
  fontSize: theme.fontSizes[1],
  marginBottom: theme.space[3],
  marginLeft: theme.space[5],
  "@media": {
    [media.small]: {
      fontSize: theme.fontSizes[4],
    },
  },
})

export const blogPostTextContainer = style({
  display: "box",
  position: "relative",
  lineClamp: 2,
  overflow: "hidden",
  width: "100%",
  maxHeight: "300px",
  whiteSpace: "pre-wrap",
  textOverflow: "ellipsis",
})

export const truncatorStyle = style({
  width:"100%",
  height:"20px",
  position: "absolute",
  top: "calc(100% - 20px)",
  background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(5,97,179,0) 100%); ",
})

export const blogPostImage = style({
  width: "33.3333%",
  maxHeight: "300px",
})
