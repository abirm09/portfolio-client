const setTheme = isDark => {
  if (isDark) {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};
const initTheme = () => {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
  }
  if (localStorage.getItem("theme") === "light") {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "light");
  } else {
    document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
  }
};

export { initTheme, setTheme };
