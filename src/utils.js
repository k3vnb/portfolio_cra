const scrollToPage = (pageSelector) => {
  const goToPage = document.querySelector(pageSelector);
  const toElement = (element) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  toElement(goToPage);
};

export default scrollToPage;
