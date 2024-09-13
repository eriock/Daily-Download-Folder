chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
  const currentDate = new Date();
  const folderName = currentDate.toISOString().slice(0, 10); // e.g., "2024-08-27"
  const newFilename = folderName + '/' + item.filename;

  suggest({filename: newFilename, conflictAction: "uniquify"});
});
