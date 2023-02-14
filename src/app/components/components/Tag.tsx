import React from 'react'

const tag_style = {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#004759",
    borderRadius: 16,
    color: '#FFFFFF',
    alignSelf: 'center'
}
const Tag = ({numberOfError}) => {
  return (
    <div className="text-sm-reg" style={tag_style}>{numberOfError}</div>
  )
}

export default Tag