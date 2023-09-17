import React, { useState } from "react";
// import mammoth from "mammoth";
import PizZip from "pizzip";
import { DOMParser } from "@xmldom/xmldom";

function str2xml(str) {
    if (str.charCodeAt(0) === 65279) {
      // BOM sequence
      str = str.substr(1);
    }
    return new DOMParser().parseFromString(str, "text/xml");
  }

// Get paragraphs as javascript array
function getParagraphs(content) {
    const zip = new PizZip(content);
    const xml = str2xml(zip.files["word/document.xml"].asText());
    const paragraphsXml = xml.getElementsByTagName("w:p");
    const paragraphs = [];
  
    for (let i = 0, len = paragraphsXml.length; i < len; i++) {
      let fullText = "";
      const textsXml = paragraphsXml[i].getElementsByTagName("w:t");
      for (let j = 0, len2 = textsXml.length; j < len2; j++) {
        const textXml = textsXml[j];
        if (textXml.childNodes) {
          fullText += textXml.childNodes[0].nodeValue;
        }
      }
      if (fullText) {
        paragraphs.push(fullText);
      }
    }
    return paragraphs;
  }

function App() {
  const [paragraphs, setParagraphs] = useState([]);

  const handleFileUpload = (event) => {
    event.preventDefault()
    const file = event.target.files[0];
    const reader = new FileReader();
    // reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
        const content = e.target.result;
        const paragraphs = getParagraphs(content);
        setParagraphs(paragraphs);
      };
  
      reader.onerror = (err) => console.error(err);
  
      reader.readAsBinaryString(file);

    // reader.readAsText(event.target.files[0])
    // reader.onload = async (e) => { 
    //     const text = (e.target.result)
    //     // const paragraphsArray = text.split("\n").filter((p) => p !== "");
    //     // setParagraphs(paragraphsArray);
    //     setParagraphs([text])
    // };
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export default App;