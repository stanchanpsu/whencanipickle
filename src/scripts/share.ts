const shareButton = document.getElementById("shareResults");
const resultsElem = document.getElementById("results");
shareButton?.addEventListener("click", async () => {
  if (!resultsElem) return;
  try {
    if (resultsElem.textContent != null) {
      const trimmedText = resultsElem.textContent
        .split("\n")
        .map((line) => line.trimStart())
        .join("\n");
      await navigator.clipboard.writeText(trimmedText);
    }
    // Change button text to indicate copied status and reset after 2 seconds
    const textSpan = shareButton.querySelector(".text");
    if (textSpan) {
      const originalText = textSpan.textContent;
      textSpan.textContent = "Copied";
      setTimeout(() => {
        textSpan.textContent = originalText;
      }, 2000);
    }
  } catch (error) {
    console.error("Copy failed:", error);
  }
});
