export default function downloadFile(data: any) {
  const builtFile = buildExportFile(data);
  const blob = new Blob([builtFile], { type: 'text/plain' });
  console.log(blob);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tier-list.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function buildExportFile(data: any) {
  console.log(data);
  if (data) {
    const parsedData = JSON.parse(data);
    const result = `Tier List for ${data.currentCodes}\n`;
    // for (let tier of data.tierList) {
    // }
    return result;
  } else {
    return 'No data to export';
  }
}
