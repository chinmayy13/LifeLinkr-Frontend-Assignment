const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;

    // Close all other open items
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    // Toggle current item
    parent.classList.toggle("active");
  });
});
