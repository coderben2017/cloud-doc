import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import useKeyPress from '../../hooks/useKeyPress'

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setInputActive] = useState(false)
  const [value, setValue] = useState('')
  const input = useRef(null)
  const enterPressed = useKeyPress(13)
  const escPressed = useKeyPress(27)
  
  const closeSearch = () => {
    setInputActive(false)
    setValue('')
  }
  
  useEffect(() => {
    if (inputActive) {
      if (enterPressed) {
        onFileSearch(value)
      } else if (escPressed) {
        closeSearch()
      }
    }
  })
  
  useEffect(() => {
    inputActive && input.current.focus()
  }, [inputActive])
  
  return (
    <div
      className="alert alert-primary d-flex justify-content-between
        align-items-center mb-0"
    >
      {
        !inputActive && (
          <>
            <span>{ title }</span>
            <FontAwesomeIcon
              style={ { cursor: 'pointer' } }
              icon={ faSearch }
              size="lg"
              onClick={ () => setInputActive(true) }
            />
          </>
        )
      }
      {
        inputActive && (
          <>
            <input
              type="text"
              style={ { height: '24px' } }
              className="form-control"
              value={ value }
              ref={ input }
              onChange={ e => setValue(e.target.value) }
            />
            <FontAwesomeIcon
              style={ {
                cursor: 'pointer',
                marginLeft: '10px',
              } }
              icon={ faTimes }
              size="lg"
              onClick={ closeSearch }
            />
          </>
        )
      }
    </div>
  )
}

FileSearch.propTypes = {
  title: PropTypes.string.isRequired,
  onFileSearch:  PropTypes.func.isRequired
}

FileSearch.defaultProps = {
  title: '我的云文档'
}

export default FileSearch
