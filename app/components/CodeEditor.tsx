"use client";

import { Resizable } from "re-resizable";
import AceEditor from "react-ace";

// LANGUAGES
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-powershell";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/mode-typescript";

// THEMES
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import { useEffect, useState } from "react";
import { initialCode } from "../utils/utilities";

interface CodeEditorProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

const CodeEditor = ({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CodeEditorProps) => {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);
  const [title, setTitle] = useState("Untitled-1");
  const [code, setCode] = useState(initialCode);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  // @ts-ignore
  const handleResize = (evt, direction, ref, pos) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
      minHeight={466}
      minWidth={510}
      maxWidth={1000}
      defaultSize={{
        width: width,
        height: height || 500,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{ background: background }}
    >
      <div className="code-block" style={{ padding: currentPadding }}>
        <div className="code-title h-[52px] px-4 flex items-center justify-between bg-black bg-opacity-80 rounded-tl-lg rounded-tr-lg border-2 border-[rgba(249,249,249,0.08)] !shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="dots flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-[#ff5656]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbc6a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#67f772]"></div>
          </div>

          <div className="input-control w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-[hsla(0,0%,100%,0.6)] outline-none font-medium text-center bg-transparent"
            />
          </div>

          <div className="icon flex justify-center items-center p-1 bg-black bg-opacity-30 rounded-sm">
            <img src={icon} alt="icon" className="object-contain w-8 h-8" />
          </div>
        </div>
        <AceEditor
          value={code}
          onChange={handleCodeChange}
          name="code-editor"
          fontSize={16}
          theme={theme.toLocaleLowerCase()}
          mode={language.toLocaleLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="!w-full bg-black/50 rounded-bl-lg rounded-br-lg border-t-0 shadow-[2px_3px_10px_rgba(0,0,0,0.2)] border-2 border-[rgba(249,249,249,0.08)] !font-medium !text-lg !leading-6"
        />
      </div>
    </Resizable>
  );
};

export default CodeEditor;
