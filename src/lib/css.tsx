function concatClassNames(...s: Array<string | undefined>) {
  return s.filter(str => str !== undefined && str.length >= 0).join(" ");
}


function highlightText(text: string, highlight: string) {
  if (!highlight.trim()) {
    return text;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  return text.split(regex)
    .map((part, index) => regex.test(part) ? <mark key={index} className="bg-yellow-300">{part}</mark> : part
    );
}

export {concatClassNames, highlightText};