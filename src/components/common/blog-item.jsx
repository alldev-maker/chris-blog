import React from "react"
import { Link } from "gatsby"
import BlogTimeInfo from "./blog-time-info"

const BlogItem = ({ blog, categoryList }) => {
  const getCategoryData = categoryId => {
    return categoryList.filter(item => item.prismicId === categoryId)[0].data
  }

  return (
    <div className="blog-item">
      <Link to={blog.url}>
        <h2 className="title">{blog.data.blog_title}</h2>
      </Link>
      <p className="content">{blog.data.blog_description.text}</p>
      <div className="d-flex justify-content-between mt-3 mb-4">
        <BlogTimeInfo
          date={blog.data.published_date}
          readingTime={blog.data.reading_time}
        />
      </div>
      <div className="d-flex flex-wrap">
        {blog.data.categories.map((item, idx) => (
          <div className="category-item" key={idx}>
            <img
              src={getCategoryData(item.category.id).icon.url}
              alt={getCategoryData(item.category.id).name}
            />
            {getCategoryData(item.category.id).name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogItem
