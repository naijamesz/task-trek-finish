/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

import './Tag.css'

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: '#fd6721' },
    CSS: { backgroundColor: '#15a7d4' },
    JavaScript: { backgroundColor: '#fffb22' },
    React: { backgroundColor: '#4cdafc' },
    default: { backgroundColor: '#fcfcfc' },
  }
  return (
    <button
      type='button'
      className='tag'
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  )
}

export default Tag
