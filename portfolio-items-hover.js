const portfolioItems = document.querySelectorAll(".portfolio-item");

portfolioItems.forEach((item) => {
  let overlay = item.querySelector(".overlay");

  // Function to show overlay
  const showOverlay = () => {
    overlay.style.opacity = "1";
  };

  // Function to hide overlay
  const hideOverlay = () => {
    overlay.style.opacity = "0";
  };

  // Show overlay on hover (mouseenter)
  item.addEventListener("mouseenter", showOverlay);

  // Hide overlay on hover out (mouseleave)
  item.addEventListener("mouseleave", hideOverlay);

  // Toggle visibility on click
  item.addEventListener("click", () => {
    const currentOpacity = parseFloat(overlay.style.opacity);
    overlay.style.opacity = currentOpacity === 0 ? "1" : "0";
  });
});
