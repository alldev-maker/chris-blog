import React from "react"
import { Calendar, Clock } from "../../utils/imgImport"

const BlogTimeInfo = ({ date, readingTime }) => (
  <>
    <time className="date-time" dateTime={date}>
      <img src={Calendar} alt="calendar" />
      {date}
    </time>

    <p className="date-time">
      <img src={Clock} alt="clock" />
      {readingTime} minute read
    </p>
  </>
)

export default BlogTimeInfo
