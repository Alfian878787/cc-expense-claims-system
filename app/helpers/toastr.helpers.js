export const toastrHelpers = {
  getSuccessOptions,
  getErrorOptions
}

function getSuccessOptions() {
  const toastrOptions = {
    timeOut: 5000,
    showCloseButton: true // true by default
  }
  return toastrOptions;
}

function getErrorOptions() {
  const toastrOptions = {
    timeOut: 5000, // set to 0 to prevent auto-close
    showCloseButton: true // true by default
  }
  return toastrOptions;
}
