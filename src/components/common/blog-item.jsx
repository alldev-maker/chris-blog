import React from "react"
import { Link } from "gatsby"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import { Calendar, Clock } from "../../utils/imgImport"
import BlogTimeInfo from "./blog-time-info"

const BlogItem = ({ blog }) => {
  const plainTextContent = documentToPlainTextString(
    JSON.parse(blog.content.raw)
  )

  return (
    <div className="blog-item">
      <Link to={`/blog/${blog.slug}`}>
        <h2 className="title">{blog.title}</h2>
      </Link>
      <p className="content">{plainTextContent}</p>
      <div className="d-flex flex-wrap">
        {blog.categories.map((item, idx) => (
          <div className="category" key={idx}>
            <img src={item.icon.url} alt={item.name} />
            {item.name}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-3">
        <BlogTimeInfo date={blog.date} readingTime={blog.readingTime} />
      </div>
    </div>
  )
}

export default BlogItem
