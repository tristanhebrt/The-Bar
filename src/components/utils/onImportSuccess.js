export const onImportSuccess = (importedList) => {
  // Dispatch the event without needing to specify the type
  const event = new CustomEvent("beerListImported", { detail: importedList });
  window.dispatchEvent(event);

  // You can show a notification or perform other generic actions
  alert(`List "${importedList.listName}" imported successfully!`);
};
