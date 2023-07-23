document.addEventListener('mouseup', () => {
  let selectText;
  // if (window.getSelection) {
  //   const selection = window.getSelection();
  //   selectText = selection.toString()
  //   if (selectText.length > 0) {
  //     // selection.removeAllRanges();

  //     const newRange = selection.getRangeAt(0);
  //     console.log(selection);
  //     selection.addRange(newRange);

  //     let tmpNode = document.createElement('span');
  //     tmpNode.innerHTML = `<b>웹이즈프리</b>`;
  //     tmpNode.appendChild(newRange.surroundContents());
  //     newRange.insertNode(tmpNode);


  //     newRange.deleteContents();
  //     newRange.insertNode(tmpNode);
  //   }
  //   console.log(selection);
  // }

  // console.log('text', selectText);

  selectedText = window.getSelection().toString().trim();
  const translatorIcon = document.createElement('div');

  if (selectedText) {
    translatorIcon.className = 'translator-icon';
    translatorIcon.textContent = '동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세';
    const selectionRect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    // translatorIcon.style.top = `${selectionRect.top - 30}px`;
    // translatorIcon.style.left = `${selectionRect.left}px`;
    translatorIcon.style.width = '500px';
    translatorIcon.style.height = '500px';


    translatorIcon.addEventListener('click', () => {
      // Send the selected text to the popup
      chrome.runtime.sendMessage({ action: 'text_selected', text: selectedText });
      translatorIcon.style.display = 'none';
    });

    document.body.appendChild(translatorIcon);
  } else {
    document.body.removeChild(translatorIcon);
  }
})