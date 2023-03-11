export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      { title: "Image", name: "image", type: "image" },
      { title: "Author", name: "author", type: "string" },
      { title: "Content", name: "content", type: "array",
      of: [{ type: "block" }]},
    ],
  }
