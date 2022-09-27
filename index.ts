import type { Plugin } from "vue";

export function noOrphans(text: string | undefined | null) {
  text = text?.trim();

  if (!text) {
    return text;
  }

  const idx = text.lastIndexOf(" ");
  if (idx !== -1) {
    const head = text.substring(0, idx);
    const tail = text.substring(idx + 1);
    return `${head}&nbsp;${tail}`;
  }

  return text;
}

export const VueNoOrphansPlugin: Plugin = {
  install(app) {
    app.directive('no-orphans', function(el: Node) {
      function traverse(node: Node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const html = noOrphans(node.nodeValue);
          if (node.parentElement && html) {
            node.parentElement.innerHTML = html;
          }
        } else if (node.hasChildNodes()) {
          node.childNodes.forEach(traverse)
        }
      }

      traverse(el);
    })
  }
}
