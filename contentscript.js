const highlighter = document.createElement('div');

let selectedText;

function createHighlighter(event) {
  highlighter.id = 'highlighter';
  highlighter.textContent = '도구';

  highlighter.style.zIndex = 2147483647;
  highlighter.style.position = 'absolute';
  highlighter.style.top = `${event.clientY - 30}px`;
  highlighter.style.left = `${event.clientX}px`;
  highlighter.style.backgroundColor = 'white';
  highlighter.style.borderRadius = '50%';
  highlighter.style.width = '30px';
  highlighter.style.height = '30px';
  highlighter.style.display = 'flex';
  highlighter.style.alignItems = 'center';
  highlighter.style.justifyContent = 'center';
  highlighter.style.color = 'black';
  highlighter.style.cursor = 'pointer';

  document.body.appendChild(highlighter);
}

function removeHighlighter() {
  const highlighterElement = document.getElementById('highlighter');

  if (highlighterElement) {
    highlighterElement.remove();
  }
}

document.addEventListener('selectionchange', () => {
  selectedText = window.getSelection().toString().trim();

  if (!selectedText) {
    removeHighlighter();
  }
});

document.addEventListener('mouseup', (event) => {
  if (selectedText) {
    createHighlighter(event);
  }
});
