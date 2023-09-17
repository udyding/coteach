import React, { useState } from "react";
// import mammoth from "mammoth";
import { motion } from 'framer-motion'
import PizZip from "pizzip";
import { DOMParser } from "@xmldom/xmldom";
import '../index.css';
import uploadFileLogo from '../assets/uploadFile.svg';
import check from '../assets/check.svg';
import { Text } from "@chakra-ui/react";


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

function FileUpload({setFileContent}) {
  const [paragraphs, setParagraphs] = useState([]);
  const [ uploadSuccess, setUploadSuccess ] = useState(false);

  const handleFileUpload = (event) => {
    event.preventDefault()
    const file = event.target.files[0];
    const reader = new FileReader();
    // reader.readAsArrayBuffer(file);

    reader.onload = (e) => {
        const content = e.target.result;
        const paragraphs = getParagraphs(content);
        setParagraphs(paragraphs);
        setFileContent(paragraphs.join(""));
      };
  
      reader.onerror = (err) => console.error(err);
  
      reader.readAsBinaryString(file);
      setUploadSuccess(true);

    // reader.readAsText(event.target.files[0])
    // reader.onload = async (e) => { 
    //     const text = (e.target.result)
    //     // const paragraphsArray = text.split("\n").filter((p) => p !== "");
    //     // setParagraphs(paragraphsArray);
    //     setParagraphs([text])
    // };
  };

  const [image, setImage] = useState(null)
  const[fileName, setFileName] = useState("No selected file")
  
  return (
    // <>
    //   <div className="uploadNote">
    //     <img src={uploadFileLogo} alt="logo" />
    //     <input type="file" onChange={handleFileUpload} />
    //     {paragraphs.map((p, i) => (
    //       <p key={i}>{p}</p>
    //     ))}
    //     <p> Upload a pdf, docx, or txt file</p>
    //   </div>

    // </>

    <motion.main
      style={{
        width: "40%",
      }}
      initial={{ 
        opacity: 0,
        y: -10,
      }}
      animate={{ 
        opacity: 1,
        y: 0,
        
      }}
      transition={{ ease: "easeOut", duration: 1, delay: 0.4, }}
  >
      <Text fontSize='xl' as='b' style={
        {
          color: "#683F19",
        }
      }>Upload your notes</Text>
      <form
        action=""
        onClick={() => document.querySelector(".input-field").click()}
        className="uploadContainer"
      >
        <input
          type="file"
          className="input-field"
          onChange={handleFileUpload}
          hidden
        />

        <div
          style={{
            margin: "auto",
          }}
        >
            <img
              src={uploadSuccess ? check : uploadFileLogo}
              alt="logo"
              style={{
                width: "50px",
                height: "50px",
                margin: "auto",
                transition: "all ease-in 0.5s"
              }}
            />
          <p style={{
            transition: "all ease-in 0.5s"
          }}> {uploadSuccess ? "File uploaded successfully!" : "Upload a pdf, docx, or txt file"}</p>
        </div>
      </form>
    </motion.main>
  );
}

export default FileUpload;
