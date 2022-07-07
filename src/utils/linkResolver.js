exports.linkResolver = doc => {
  switch (doc.type) {
    case "resource": {
      return `/resource/${doc.uid}`
    }

    default:
      return "/"
  }
}
