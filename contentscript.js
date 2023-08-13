// const script = document.createElement('script');

// // use local file
// // script.src = 'script.js';

// script.src =
//   'https://cdn.jsdelivr.net/npm/web-highlighter@0.7.4/dist/web-highlighter.min.js';

// // make code in script to be treated as JavaScript module
// script.type = 'module';

// script.async = false;

// document.body.appendChild(script);

const store = [];

const highlighter = document.createElement('div');
highlighter.attachShadow({ mode: 'open' });

const wrapper = document.createElement('div');

const highlighterBody = document.createElement('div');

let selectedText;

function foo() {
  const replacedText = window
    .getSelection()
    .anchorNode.parentNode.textContent.replace(
      selectedText,
      `<span style="background-color: yellow">${selectedText}</span>`,
    );

  window.getSelection().anchorNode.parentNode.innerHTML = replacedText;

  store.push(replacedText);

  console.log(store);

  // highlight
  //   .on('selection:hover', ({ id }) => {
  //     // display different bg color when hover
  //     highlight.addClass('highlight-wrap-hover', id);
  //   })
  //   .on('selection:hover-out', ({ id }) => {
  //     // remove the hover effect when leaving
  //     highlight.removeClass('highlight-wrap-hover', id);
  //   })
  //   .on('selection:create', ({ sources }) => {
  //     sources = sources.map((hs) => ({ hs }));
  //     // save to backend
  //     store.save(sources);
  //   });

  // // retrieve data from store, and display highlights on the website
  // store.getAll().forEach(
  //   // hs is the same data saved by 'store.save(sources)'
  //   ({ hs }) => highlight.fromStore(hs.startMeta, hs.endMeta, hs.text, hs.id),
  // );

  // // auto-highlight selections
  // highlight.run();

  removeHighlighter();
}

function handleSelectionChange() {
  selectedText = window.getSelection().toString();

  if (!selectedText) {
    removeHighlighter();
  }
}

function createHighlighter(event) {
  highlighter.id = 'highlighter';
  highlighter.style.zIndex = 2147483647;

  wrapper.style.position = 'absolute';
  wrapper.style.top = '0px';
  wrapper.style.left = '0px';
  wrapper.style.width = '100%';
  wrapper.style.zIndex = 2147483647;

  wrapper.appendChild(highlighterBody);

  highlighterBody.style.zIndex = 2147483647;
  highlighterBody.style.position = 'absolute';
  highlighterBody.style.backgroundColor = 'white';
  highlighterBody.style.borderRadius = '50%';
  highlighterBody.style.width = '30px';
  highlighterBody.style.height = '30px';
  highlighterBody.style.display = 'flex';
  highlighterBody.style.alignItems = 'center';
  highlighterBody.style.justifyContent = 'center';
  highlighterBody.style.color = 'black';
  highlighterBody.style.cursor = 'pointer';

  highlighterBody.id = 'highlighter-body';
  highlighterBody.textContent = '도구';
  highlighterBody.style.top = `${event.clientY - 30}px`;
  highlighterBody.style.left = `${event.clientX}px`;
  highlighterBody.style.zIndex = 2147483647;
  highlighterBody.style.position = 'absolute';

  document.body.appendChild(highlighter);
  highlighter.shadowRoot.appendChild(wrapper);
}

let isMouseDown = false;

document.addEventListener('mousedown', (event) => {
  if (event.target.matches('#highlighter')) {
    isMouseDown = true;
    event.preventDefault();
    foo();
  }
});

function removeHighlighter() {
  const highlighterElement = document.getElementById('highlighter');

  if (highlighterElement) {
    highlighterElement.remove();
  }
}

document.addEventListener('selectionchange', handleSelectionChange);

document.addEventListener('mouseup', (event) => {
  if (isMouseDown) {
    isMouseDown = false;
    return;
  }

  if (selectedText) {
    createHighlighter(event);
  }
});
