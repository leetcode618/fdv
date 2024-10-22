export const scrollToSection =
  (id: string, offset = -150) =>
  () => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = offset;
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };
