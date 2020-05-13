import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import FileSearch from './components/FileSearch/FileSearch'
import FileList from './components/FileList/FileList'
import BottomBtn from './components/BottomBtn/BottomBtn'

function App() {
  const files = [
    {
      id: '1',
      title: 'doc1',
      body: 'lkasksalkaslsa',
      time: 19545415000,
    },
    {
      id: '2',
      title: 'doc22222',
      body: 'sasaassaasassaa',
      time: 19211215000,
    },
  ]
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <FileSearch
            title="Cloud Documents"
            onFileSearch={ val => console.log(val) }
          />
          <FileList
            files={ files }
            onFileClick={ id => console.log(id) }
            onFileDelete={ id => console.log(id) }
            onSaveEdit={ (id, value) => console.log(id, value) }
          />
          <div className="row no-gutters">
            <div className="col">
              <BottomBtn
                text="新建"
                colorClass="btn-primary"
                icon={ faPlus }
              />
            </div>
            <div className="col">
              <BottomBtn
                text="导入"
                colorClass="btn-success"
                icon={ faFileImport }
              />
            </div>
          </div>
        </div>
        <div className="col-md-8">
        
        </div>
      </div>
    </div>
  )
}

export default App
