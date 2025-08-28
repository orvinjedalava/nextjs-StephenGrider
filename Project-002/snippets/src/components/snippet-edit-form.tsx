'use client';

import type { Snippet } from '@/generated/prisma/client';
import Editor from '@monaco-editor/react';
import { useState } from 'react';
import * as actions from '@/actions';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      <Editor 
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{
          minimap: { enabled: false }
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
}