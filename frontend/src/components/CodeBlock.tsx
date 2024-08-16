import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.min';

interface CodeBlockProps {
  language: string;
  code: string;
  onChange: (value: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, onChange }) => {
  const codeRef = useRef<HTMLPreElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = code;
    }
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={handleInputChange}
        style={{
          width: '100%',
          height: 'auto',
          fontFamily: 'monospace',
          fontSize: '1em',
          marginBottom: '10px',
          border: '1px solid #ccc',
          padding: '10px',
          overflow: 'auto',
        }}
      />
      <pre className={`language-${language}`} style={{ overflow: 'auto' }}>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
