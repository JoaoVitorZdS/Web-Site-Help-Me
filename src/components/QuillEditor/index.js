import React, { useRef, useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const MyQuillEditor = ({ onChange }) => {
  const quillRef = useRef(null);
  // eslint-disable-next-line
  const [editorContent, setEditorContent] = useState('');
  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  useEffect(() => {
    

    if (quillRef.current) {
      

      const quill = new Quill(quillRef.current, {
        modules: {
            toolbar: toolbarOptions
          },
          placeholder: 'Libere a sua criatividade...',
        theme: 'snow',
      });

      quill.on('text-change', () => {
        const delta = quill.getContents();
        setEditorContent(JSON.stringify(delta)); // Salva o conteúdo formatado em JSON
        onChange(delta); // Chama a função de retorno de chamada com o delta
      });
    }
    // eslint-disable-next-line
  }, []);
  

  return <div id="editor-container" ref={quillRef} style={{ height: '375px' }} />;
};

export default MyQuillEditor;
