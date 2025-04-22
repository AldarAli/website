// Lazy loading implementation
document.addEventListener("DOMContentLoaded", function() {
  // Lazy loading for images
  const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          
          // If there's a srcset attribute
          if (lazyImage.dataset.srcset) {
            lazyImage.srcset = lazyImage.dataset.srcset;
          }
          
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
    
    // Lazy loading for background images
    const lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-bg"));
    
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyBackground = entry.target;
          lazyBackground.style.backgroundImage = "url(" + lazyBackground.dataset.bg + ")";
          lazyBackground.classList.remove("lazy-bg");
          lazyBackgroundObserver.unobserve(lazyBackground);
        }
      });
    });
    
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    let active = false;

    const lazyLoad = function() {
      if (active === false) {
        active = true;

        setTimeout(function() {
          // Handle regular images
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              
              // If there's a srcset attribute
              if (lazyImage.dataset.srcset) {
                lazyImage.srcset = lazyImage.dataset.srcset;
              }
              
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });
            }
          });
          
          // Handle background images
          const lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-bg"));
          lazyBackgrounds.forEach(function(lazyBackground) {
            if ((lazyBackground.getBoundingClientRect().top <= window.innerHeight && lazyBackground.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyBackground).display !== "none") {
              lazyBackground.style.backgroundImage = "url(" + lazyBackground.dataset.bg + ")";
              lazyBackground.classList.remove("lazy-bg");

              lazyBackgrounds = lazyBackgrounds.filter(function(bg) {
                return bg !== lazyBackground;
              });
            }
          });

          if (lazyImages.length === 0 && lazyBackgrounds.length === 0) {
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationchange", lazyLoad);
          }

          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
    window.addEventListener("load", lazyLoad);
  }
});