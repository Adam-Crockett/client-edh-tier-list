export default function downloadFile(data: any) {
  const builtFile = buildExportFile(data);
  const blob = new Blob([builtFile], { type: 'text/html' });
  console.log(blob);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tier-list.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function buildExportFile(data: any) {
  if (data) {
    let result = `<DOCTYPE html>
    <html>
      <head>
        <title>Tier List for ${'Test'}</title>
      </head>
        <body>
          <h1>Tier List for ${data.currentCodes}</h1>
        <hr>`;
    for (let i = 1; i < data.tierLevels.length; i++) {
      result += `<h2>Tier: ${data.tierLevels[i].tierName}</h2>`;
      result += '<ul>';
      for (const card of data.tierLevels[i].cards) {
        result += '<li>';
        result += buildCardOutput(card);
        result += '</li>';
      }
      result += '</ul>';
    }
    result += '</body></html>';

    return result;
  } else {
    return 'No data to export';
  }
}

function buildCardOutput(card: any) {
  let result = `${card.name}<br>`;
  const tab = '&emsp;';

  if (card.image_uris) {
    result += `${tab}PNG: <br>`;
    result += `${tab}<a href="${card.image_uris.png}" target="_blank">${card.image_uris.png}</a><br>`;
    result += `${tab}Scryfall Link: <br>`;
    result += `${tab}<a href="${card.scryfall_uri}" target="_blank">${card.scryfall_uri}</a><br>`;
    result += '<br>';
  }
  if (card.all_parts) {
    result += `${tab}Related Cards (Meld Cards or Similar): <br>`;
    for (const part of card.all_parts) {
      if (part.component) {
        result += `${tab}${tab}${part.component} - ${part.name}<br>`;
      }
      result += `${tab}${tab}Part - Scryfall Link: <br>`;
      result += `${tab}${tab}<a href="${part.uri}" target="_blank">${part.uri}</a><br>`;
      result += '<br>';
    }
  }

  if (card.card_faces) {
    result += `${tab}Card Faces: <br>`;
    for (const face of card.card_faces) {
      result += `${tab}${tab}${face.name}<br>`;
      result += `${tab}${tab}PNG: <br>`;
      result += `${tab}${tab}<a href="${face.image_uris.png}" target="_blank">${face.image_uris.png}</a><br>`;
      result += '<br>';
    }
  }
  return result;
}
