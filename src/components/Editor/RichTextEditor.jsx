// client/src/components/Editor/RichTextEditor.jsx
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles

const RichTextEditor = ({ value, onChange }) => {
  return (
    <ReactQuill value={value} onChange={onChange} />
  );
};

export default RichTextEditor;
