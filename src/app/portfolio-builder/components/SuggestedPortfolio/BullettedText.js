// import React, { useState } from 'react';
// import './styles.css';

// function App() {
//   const [strings] = useState(["first text", "second text", "third text"]);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [textAreaContent, setTextAreaContent] = useState('');

//   const handleDisplayClick = () => {
//     document.getElementById('display').style.display = 'none';
//     document.getElementById('banner-message').style.display = '';

//     const currentText = document.getElementById('banner-message').value;
//     document.getElementById('banner-message').value = currentText;
//     document.getElementById('banner-message').focus();
//   };

//   const handleBannerMessageBlur = () => {
//     const currentText = document.getElementById('banner-message').value;
//     const plainText = currentText.replace(/>/g, '');
//     const splitText = plainText.split('\n');
//     console.log(splitText);

//     let updatedHtmlContent = '';
//     splitText.forEach(element => (updatedHtmlContent += '<li class="listItem">' + element + '</li>'));
//     setHtmlContent(updatedHtmlContent);

//     document.getElementById('banner-message').style.display = 'none';
//     document.getElementById('display').style.display = '';
//   };

//   const handleBannerMessageKeyUp = (e) => {
//     const code = e.keyCode ? e.keyCode : e.which;
//     if (code === 13) {
//       const text = document.getElementById('banner-message').value;
//       document.getElementById('banner-message').value = text + '>';
//     }
//   };

//   React.useEffect(() => {
//     let newHtmlContent = '';
//     let newTextAreaContent = '';

//     strings.forEach((element, index) => {
//       newHtmlContent += '<li class="listItem">' + element + '</li>';
//       if (strings.length === index + 1) {
//         newTextAreaContent += '>' + element;
//       } else {
//         newTextAreaContent += '>' + element + '\n';
//       }
//     });

//     setHtmlContent(newHtmlContent);
//     setTextAreaContent(newTextAreaContent);

//     document.getElementById('display').innerHTML = newHtmlContent;
//     document.getElementById('banner-message').value = newTextAreaContent;
//   }, [strings]);

//   return (
//     <div>
//       <textarea
//         id="banner-message"
//         className="w-[775px] h-[117px] border-[1px] border-[#E4E5E5] rounded-[10px] p-[10px]"
//         style={{ display: 'none' }}
//         onBlur={handleBannerMessageBlur} 
//         onKeyUp={handleBannerMessageKeyUp} 
//       ></textarea>
//       <div
//         id="display"
//         className="w-[775px] h-[117px] border-[1px] border-[#E4E5E5] rounded-[10px] p-[10px]"
//         style={{ overflowY: 'auto' }}
//         onClick={handleDisplayClick}
//       ></div>
//     </div>
//   );
// }

// function App() {
//     const [strings] = useState(["first text", "second text", "third text"]);
//     const [htmlContent, setHtmlContent] = useState('');
//     const [textAreaContent, setTextAreaContent] = useState('');
  
//     const handleDisplayClick = () => {
//       document.getElementById('display').style.display = 'none';
//       document.getElementById('banner-message').style.display = '';
  
//       const currentText = document.getElementById('banner-message').value;
//       document.getElementById('banner-message').value = currentText;
//       document.getElementById('banner-message').focus();
//     };
  
//     const handleBannerMessageBlur = () => {
//       const currentText = document.getElementById('banner-message').value;
//       const plainText = currentText.replace(/•/g, '');
//       const splitText = plainText.split('\n');
//       console.log(splitText);
  
//       let updatedHtmlContent = '';
//       splitText.forEach(element => (updatedHtmlContent += '<li class="listItem">' + element + '</li>'));
//       setHtmlContent(updatedHtmlContent);
  
//       document.getElementById('banner-message').style.display = 'none';
//       document.getElementById('display').style.display = '';
//     };
  
//     const handleBannerMessageKeyUp = (e) => {
//       const code = e.keyCode ? e.keyCode : e.which;
//       if (code === 13) {
//         const text = document.getElementById('banner-message').value;
//         document.getElementById('banner-message').value = text + '•';
//       }
//     };
  
//     React.useEffect(() => {
//       let newHtmlContent = '';
//       let newTextAreaContent = '';
  
//       strings.forEach((element, index) => {
//         newHtmlContent += '<li class="listItem">' + element + '</li>';
//         if (strings.length === index + 1) {
//           newTextAreaContent += '•' + element;
//         } else {
//           newTextAreaContent += '•' + element + '\n';
//         }
//       });
  
//       setHtmlContent(newHtmlContent);
//       setTextAreaContent(newTextAreaContent);
  
//       document.getElementById('display').innerHTML = newHtmlContent;
//       document.getElementById('banner-message').value = newTextAreaContent;
//     }, [strings]);
  
//     return (
//       <div>
//         <textarea
//           id="banner-message"
//           className="w-[775px] h-[117px] border-[1px] border-[#E4E5E5] rounded-[10px] p-[10px] font-medium"
//           style={{ display: 'none' }}
//           onBlur={handleBannerMessageBlur} 
//           onKeyUp={handleBannerMessageKeyUp} 
//         ></textarea>
//         <div
//           id="display"
//           className="w-[775px] h-[117px] border-[1px] border-[#E4E5E5] rounded-[10px] p-[10px] font-medium"
//           style={{ overflowY: 'auto' }}
//           onClick={handleDisplayClick}
//         ></div>
//       </div>
//     );
//   }

// export default App;

// import React, { useState, useEffect } from 'react';
// import './styles.css';

// function App() {
//   const [strings] = useState(["first text", "second text", "third text"]);
//   const [textAreaContent, setTextAreaContent] = useState(strings.join('\n'));

//   const handleDisplayClick = () => {
//     document.getElementById('display').style.display = 'none';
//     document.getElementById('banner-message').style.display = '';
//     document.getElementById('banner-message').focus();
//   };

//   const handleBannerMessageBlur = () => {
//     const currentText = document.getElementById('banner-message').value;
//     const splitText = currentText.split('\n');
//     console.log(splitText);

//     setTextAreaContent(splitText.join('\n'));

//     document.getElementById('banner-message').style.display = 'none';
//     document.getElementById('display').style.display = '';
//   };

//   const handleBannerMessageKeyUp = (e) => {
//     const code = e.keyCode ? e.keyCode : e.which;
//     if (code === 13) {
//       const text = document.getElementById('banner-message').value;
//       document.getElementById('banner-message').value = text + '• '; // Use a bullet point here (•)
//     }
//   };

//   // Update the textAreaContent when strings change
//   useEffect(() => {
//     setTextAreaContent(strings.join('\n'));
//   }, [strings]);

//   return (
//     <div>
//       <textarea
//         id="banner-message"
//         className="w-[775px] h-[117px] border-[1px] border-[#E4E5E5] rounded-[10px] p-[10px]"
//         style={{ display: 'none' }}
//         onBlur={handleBannerMessageBlur}
//         onKeyUp={handleBannerMessageKeyUp}
//         value={textAreaContent}
//       />
//       <div
//         id="display"
//         className="w-[775px] h-[117px] border-[1px] border-[#E4E5E5] rounded-[10px] p-[10px]"
//         style={{ overflowY: 'auto' }}
//         onClick={handleDisplayClick}
//       >
//         <ul>
//           {strings.map((element, index) => (
//             <li key={index}>• {element}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';

// const AutomaticBulletsTextBox = () => {
//   const CRLF = 10;
//   const BULLET = String.fromCharCode(45);
//   const [text, setText] = useState('');
//   const [prevLen, setPrevLen] = useState(0);

//   useEffect(() => {
//     const txt = document.getElementById('txt');
//     if (txt) {
//       txt.addEventListener('input', onInput, false);
//     }
//   }, []);

//   const onInput = (event) => {
//     const char = event.target.value.slice(-1).charCodeAt(0);
//     const nowLen = text.length;

//     if (nowLen > prevLen) {
//       if (char === CRLF) {
//         setText(text + BULLET + ' ');
//       }
//       if (nowLen === 1) {
//         setText(BULLET + ' ' + text);
//       }
//     }
//     setPrevLen(nowLen);
//   };

//   return (
//     <div>
//       <h4>Automatic bullets in a text box</h4>
//       <textarea id="txt" rows="15" cols="40" value={text} onChange={(e) => setText(e.target.value)}></textarea>
//       <input type="hidden" id="prevLen" value={prevLen} />
//     </div>
//   );
// };

// export default AutomaticBulletsTextBox;


export default function App() {
  var CRLF = 10;

  function Init() {
    if (txt.addEventListener) txt.addEventListener("input", OnInput, false);
  }

  function OnInput(event) {
    const char = event.target.value.substr(-1).charCodeAt(0);
    const nowLen = txt.value.length;

    if (nowLen > prevLen.value) {
      if (char === CRLF) txt.value = txt.value + '\n• ';
      if (nowLen === 1) txt.value = '• ' + txt.value;
    }
    prevLen.value = nowLen;
  }

  useEffect(() => {
    Init();
  }, []);

  return (
    <div>
      <h4>Automatic bullets in a text box</h4>
      <style>
        {`
          textarea::before {
            content: '• ';
            color: blue;
          }
        `}
      </style>
      <textarea
        id="txt"
        rows="15"
        cols="40"
        defaultValue="List item 1\nList item 2\nList item 3"
      ></textarea>
      <input type="hidden" id="prevLen" value="0" />
    </div>
  );
}
