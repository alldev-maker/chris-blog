import React, { useState } from "react"

const Faq = ({ question, answer }) => {
  const [active, setActive] = useState(false)

  return (
    <div className={`accordion ${active ? "active" : ""}`}>
      <button
        type="button"
        className="accordion__toggler w-100 d-flex justify-content-between font-weight--700"
        onClick={() => setActive(!active)}
      >
        <span className="accordion__question">{question}</span>
        <span className="sign" />
      </button>

      <div
        className="accordion__content"
        dangerouslySetInnerHTML={{ __html: answer.html }}
      />
    </div>
  )
}

export default Faq
