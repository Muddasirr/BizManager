import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ColorPalette from './colorcreator.jsx'
import ExcelReader from './ExcelReader.jsx'
import Dropzone from './DropZone.jsx'
import Dragitem from './DragItem.jsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
   <Dropzone/>
   <Dragitem name={"FFFFF"}/>
   </DndProvider>
  </React.StrictMode>,
)
