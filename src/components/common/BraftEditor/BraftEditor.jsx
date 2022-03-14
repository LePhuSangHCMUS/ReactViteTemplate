//Lib
// import {Spin} from "antd"
//Component
//Img
//Const
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import table from "braft-extensions/dist/table";
import "braft-extensions/dist/table.css";
import { convertToHTML } from "draft-convert";
import React, { useRef, useState } from "react";
//Styled Component
import styles from "./BraftEditor.module.less";
BraftEditor.use(
  table({
    includeEditors: ["editor"],
    defaultColumns: 5,
    defaultRows: 3
  })
);

const BraftEditorComponent = (props) => {
  
  const htmlString = `<p style="text-align:center;" size="0" _root="undefined" __ownerID="undefined" __hash="undefined" __altered="false"><strong><span style="color:#07a9fe">dsdsdsvcvcvcvc</span></strong></p><p></p><p></p><p></p><p></p><div class="media-wrap image-wrap float-right" style="float:right"><img id="xxx" title="Images" src="/media/images/CTY2N3T1"/></div><p>fdfd</p><p>dfdf</p>`
  const editorRef = useRef();

const [  editorState,setEditorState]=useState(BraftEditor.createEditorState(htmlString))
 const  onChange = editorState => {
    setEditorState(editorState);
    // Get the root DOM element for the Editor
    const html = convertToHTML(editorState.getCurrentContent());

    console.log(editorState.toHTML())
    // Get the rendered content from the DOM
  };


  // const mergeState = () => {
  //   const { editorState } = this.state;
  //   var str = "new state";
  //   var newState = BraftEditor.createEditorState(str);
  //   setEditorState(editorState.push(newState))
  // };
  const extendControls = [
    // {
    //   key: "my-button",
    //   type: "button",
    //   title: "合并State", // 指定鼠标悬停提示文案
    //   html: null, // 指定在按钮中渲染的html字符串
    //   text: "合并State", // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
    //   onClick: mergeState
    // }
  ];

  const uploadFunMedia=(param)=>{
    
  const serverURL = '/media/images'
  const xhr = new XMLHttpRequest
  const fd = new FormData()

  const successFn = (response) => {
    // Assuming that the server directly returns the address after uploading the file
    // After the upload is successful, call param.success and pass in the uploaded file address
    param.success({
      url: `/media/images/${JSON.parse(xhr.responseText)?.result?.id}`,
      meta: {
        id: 'xxx',
        title: 'Images',
        // alt: 'xxx',
        // loop : true , // Specify whether the audio and video are played in a loop  
        // autoPlay : true , // Specify whether the audio and video are automatically played  
        // controls : true , // Specify whether to display the control bar for audio and video  
        // poster : 'http://xxx/xx.png' , // Specify the cover of the video player  
      }
    })
  }

  const progressFn = (event) => {
    // call param.progress when upload progress changes
    param.progress(event.loaded / event.total * 100)
  }

  const errorFn = (response) => {
    // call param.error when an upload error occurs
    param.error({
      msg: 'unable to upload.'
    })
  }

  xhr.upload.addEventListener("progress", progressFn, false)
  xhr.addEventListener("load", successFn, false)
  xhr.addEventListener("error", errorFn, false)
  xhr.addEventListener("abort", errorFn, false)

  fd.append('photo', param.file)
  xhr.open('POST', serverURL, true)
  xhr.send(fd)
  }
  return (
    <div className={styles.Component}>
       <BraftEditor
          value={editorState}
          id={"editor"}
          onChange={onChange}

          language={"en"}
          extendControls={extendControls}
          ref={editorRef}
          media={{uploadFn:uploadFunMedia}}
        />
    </div>
  );
};

export default BraftEditorComponent;
