export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      { title: "Image", name: "image", type: "image" },
      { title: "Content", name: "description", type: "array",
      of: [{ type: "block" }]},
    ],
  }
