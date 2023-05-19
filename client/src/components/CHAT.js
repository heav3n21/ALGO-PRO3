import React, {useState} from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';
import '../css/monokai.css';
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
      {tag: t.number, color: '#56F212'},
      {tag: t.string, color: '#C85D31'},
      {tag: t.keyword, color: '#324FE0'},
      {tag: t.className, color: '#48AAF7'},
      
     
    ],
  });
  
export default function Chat(){
  const [code, setCode] = useState("console.log('Type your solution here');");
  const handleCodeChange = (value, viewUpdate) => {
    setCode(value);
  };
  const updateCodeMirrorValue = (value) => {
    setCode(value);
  };
return(
<>
<NavBar code={code} updateCodeMirrorValue={updateCodeMirrorValue}/>

<CodeMirror style={{width: '100%'}}
      value={code}
      height="500px"
      theme={myTheme}
      //theme="monokai"
      extensions={[javascript({ jsx: true })]}
      onChange={handleCodeChange}
    />
</>

);
}
