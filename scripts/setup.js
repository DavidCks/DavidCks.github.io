const fs = require("fs")
const Configstore = require("configstore")
const studio = require("../studio/sanity.json")

const config = new Configstore(
  "sanity",
  {},
  {
    globalConfigPath: true,
  }
)
const token = process.env.SANITY_READ_TOKEN || config.get("authToken") || "skUC4t5abSnjgV33PUIxLgnq0Du4dhBpOZ9mu7dLUCqhs19obz0UsT6GEKfvGfD8UpmORxPF1ZHB5SpLYLdorhazZj8yyTapUi2kQR1iye2YJf4SC9RhvJF6xEy2EnnlXahRf968fUL5GymMqua0Vf7oQSSOk6ZXoO4GsNYafMBpJRvW3VD9"
const dataset = process.env.SANITY_PROJECT_DATASET || studio.api?.dataset || "production"
const projectId = process.env.SANITY_PROJECT_ID || studio.api?.projectId || "lsp3yd0g"

if (!token) {
  throw new Error("Could not find Sanity token.")
}

if (!dataset) {
  throw new Error("Could not find Sanity Studio dataset.")
}

if (!projectId) {
  throw new Error("Could not find Sanity Studio Project ID.")
}

const content = [
  `# All environment variables will be sourced`,
  `# and made available to gatsby-config.js, gatsby-node.js, etc.`,
  `# Do NOT commit this file to source control`,
  `SANITY_READ_TOKEN='${token}'`,
  `SANITY_PROJECT_ID='${projectId}'`,
  `SANITY_PROJECT_DATASET='${dataset}'`,
].join("\n")

fs.writeFileSync(".env.development", content)
fs.writeFileSync(".env.production", content)

console.log(
  "Sanity environment variables written to `.env.development` and `.env.production`"
)
