import React, {useState} from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';
import NavBar from './Navbar'
import AiQuestion from './AIQuestion'



const myTheme = createTheme({
    dark: 'light',
    settings: {
      background: '#ffffff',
      foreground: '#4D4D4C',
      caret: '#AEAFAD',
      selection: '#D6D6D6',
      selectionMatch: '#D6D6D6',
      gutterBackground: '#FFFFFF',
      gutterForeground: '#4D4D4C',
      gutterBorder: '#ddd',
      gutterActiveForeground: '',
      lineHighlight: '#EFEFEF',
    },
    styles: [
      { tag: t.comment, color: '#787b80' },
      { tag: t.definition(t.typeName), color: '#194a7b' },
      { tag: t.typeName, color: '#194a7b' },
      { tag: t.tagName, color: '#008a02' },
      { tag: t.variableName, color: '#1a00db' },
    ],
  });
  



export default function Chat(){

return(
<>
<NavBar/>
<AiQuestion/>
<CodeMirror
      value="console.log('hello world!');"
      height="500px"
      theme={myTheme}
      extensions={[javascript({ jsx: true })]}
      onChange={(value, viewUpdate) => {
        console.log('value:', value);
      }}
    />

</>



);
}