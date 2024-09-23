import React from 'react'
import { Header } from '../components'

import { HtmlEditor,Image,Inject,Link,QuickToolbar,RichTextEditorComponent,Toolbar } from '@syncfusion/ej2-react-richtexteditor'
const Editor = () => {
  const toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', '|','UpperCase', 
      'Formats', 'Alignments', 
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      '|', 'Undo', 'Redo']
  }
  return (
    <div className='m-8 md:m-10 p-5 md:p-10 bg-white rounded-3xl mt-20 '>
      <Header title={'Editor'} category={'app'}/>

      <RichTextEditorComponent toolbarSettings={toolbarSettings}  height={'600px'} width={'100%'}>
        <Inject services={[HtmlEditor,Toolbar]}/>
      </RichTextEditorComponent>

    </div>
  )
}

export default Editor