document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});

// Scroll to contact section (you must define a #contact-us section in the HTML for this to work)
function contactFormScroll() {
  const contactSection = document.getElementById("contact-us");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("Contact section not found!");
  }
}
//faqs
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const toggleButton = item.querySelector(".accordion-toggle");
    const content = item.querySelector(".accordion-content");
    const iconSpan = toggleButton.querySelectorAll("span")[1]; // the second span inside button

    if (toggleButton && content && iconSpan) {
      // Hide all content initially
      content.style.display = "none";

      toggleButton.addEventListener("click", () => {
        const isVisible = content.style.display === "block";

        // Close all items
        accordionItems.forEach(otherItem => {
          const otherContent = otherItem.querySelector(".accordion-content");
          const otherToggle = otherItem.querySelector(".accordion-toggle");
          const otherIcon = otherToggle.querySelectorAll("span")[1];

          if (otherContent && otherToggle && otherIcon) {
            otherContent.style.display = "none";
            otherIcon.textContent = "+";
          }
        });

        // If this one was closed, open it
        if (!isVisible) {
          content.style.display = "block";
          iconSpan.textContent = "−";
        }
      });
    }
  });
});
