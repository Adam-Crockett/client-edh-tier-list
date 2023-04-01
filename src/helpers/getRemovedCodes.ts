export default function getRemovedCodes(
  prevCodes: string[],
  selectedCodes: string[]
) {
  return prevCodes.map((code) => {
    if (!selectedCodes.includes(code)) {
      return code;
    }
  });
}
