import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import './FileList.scss'
import useKeyPress from '../../hooks/useKeyPress'

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
  const [editId, setEditId] = useState('')
  const [value, setValue] = useState('')
  const enterPressed = useKeyPress(13)
  const escPressed = useKeyPress(27)
  
  const onInputClose = () => {
    setEditId('')
    setValue('')
  }
  
  useEffect(() => {
    if (editId) {
      if (enterPressed) {
        onSaveEdit(editId, value)
        onInputClose()
      } else if (escPressed) {
        onInputClose()
      }
    }
  })
  
  return (
    <ul className="list-group list-group-flush file-list">
      {
        files.map(file => (
          <li
            className="list-group-item bg-light row d-flex align-items-center file-list-item"
            style={{ margin: 0 }}
            key={ file.id }
          >
            {
              (editId !== file.id) &&
              (
                <>
                  <span className="col-2">
                    <FontAwesomeIcon icon={ faMarkdown } size="lg"/>
                  </span>
                  <span
                    className="col-7 cursor-pointer"
                    onClick={ () => onFileClick(file.id) }
                  >
                    { file.title }
                  </span>
                  <span className="col-1 cursor-pointer">
                    <FontAwesomeIcon
                      icon={ faEdit }
                      onClick={ () => {
                        setEditId(file.id)
                        setValue(file.title)
                      } }
                    />
                  </span>
                  <span className="col-1 cursor-pointer">
                    <FontAwesomeIcon
                      icon={ faTrash }
                      onClick={ () => onFileDelete(file.id) }
                    />
                  </span>
                </>
              )
            }
            {
              (editId === file.id) &&
              (
                <>
                  <span className="col-10">
                    <input
                      type="text"
                      style={ { height: '24px' } }
                      className="form-control"
                      value={ value }
                      onChange={ e => setValue(e.target.value) }
                    />
                  </span>
                  <span className="col-2 cursor-pointer">
                    <FontAwesomeIcon
                      icon={ faTimes }
                      onClick={ onInputClose }
                    />
                  </span>
                </>
              )
            }
          </li>
        ))
      }
    </ul>
  )
}

FileList.propTypes = {
  files: PropTypes.array,
  onFileClick: PropTypes.func,
  onSaveEdit: PropTypes.func,
  onFileDelete: PropTypes.func,
}

FileList.defaultProps = {
  files: [],
}

export default FileList
