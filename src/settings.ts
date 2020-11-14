let ENTRY_POINT = "";
if (process.env.NODE_ENV === "development") {
  ENTRY_POINT = "http://localhost:8000/";
} else {
  ENTRY_POINT = "https://yoshiomiyamae.github.io/react-bulma-ts/";
}

export { ENTRY_POINT };
