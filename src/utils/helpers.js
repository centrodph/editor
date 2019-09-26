export function getText() {
  return "A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, and two of them worked for me. I was there to support them. The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, that modern design problems were very complex. And we ought to need a license to solve them.";
}

export function textToArray(text, styles) {
  return text.split(" ").map((s, key) => ({
    text: s,
    styles: styles || []
  }));
}

export function spanToArray(spans) {
  return Array.from(spans)
    .map(span => span.textContent.trim())
    .join(" ")
    .split(" ");
}

export function setCaretOnFocus(element) {
  var selection = window.getSelection();
  var range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.addRange(range);
}
