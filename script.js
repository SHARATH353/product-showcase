gsap.registerPlugin(ScrollTrigger);

    // Define the animation
    const imgAnimation = gsap.from(".first", {
        x: 800, // Move the image 200 pixels to the right
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".body",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
      
      gsap.from(".first1", {
        opacity: 0,
        x: -50, // Move in from the left
        duration: 1,
        scrollTrigger: {
          trigger: ".container",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });
     
      // script.js

// Wait for the DOM to be ready
/*document.addEventListener("DOMContentLoaded", function () {
  // Define the animation timeline
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".container", // Trigger the animation when .container is in view
          start: "top 80%",     // Start the animation when the top of .container is 80% in view
            end: "bottom 30%", // End the animation when the bottom of .container reaches the center of the viewport
          scrub: true            // Smoothly scrub through the animation as the user scrolls
      }
  });

  // Add animations to the timeline
  tl.from(".first2", { y: "100%", opacity: 0, duration: 100, ease: "power4.out" })
    .to(".first2", { y: "-100%", duration: 100, ease: "power4.in" });
});*/
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: ".container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
      }
  });

  // Move the image from left to right
  tl.from(".first2", { x: "-100%", opacity: 0, duration: 1.5, ease: "power4.out" });

  // If you also want to move the image from right to left when scrolling up
  ScrollTrigger.create({
      trigger: ".container",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      onEnter: () => tl.reverse(),
      onLeaveBack: () => tl.play()
  });
});
// script.js

// script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Define the animation timeline for the third container
  const tl3 = gsap.timeline({
      scrollTrigger: {
          trigger: ".container:nth-of-type(3)", // Select the third container
          start: "top 80%",     // Start the animation when the top of the container is 80% in view
          end: "bottom 20%",    // End the animation when the bottom of the container is 20% in view
          scrub: true           // Smoothly scrub through the animation as the user scrolls
      }
  });

  // Add animations to the timeline for the third container
  tl3.from(".first3", { x: "100%", opacity: 0, duration: 1, ease: "power4.out" });

  // If you want to reverse the animation when scrolling up (left to right)
  ScrollTrigger.create({
      trigger: ".container:nth-of-type(3)",
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
      onEnter: () => tl3.reverse(),
      onLeaveBack: () => tl3.play()
  });

  // Create a new timeline for the appearance of the image at the end of the page
  const tlEnd = gsap.timeline({
      scrollTrigger: {
          trigger: "body", // Trigger when the body is in view
          start: "bottom bottom", // Start when the bottom of the body is at the bottom of the viewport
          end: "bottom top", // End when the top of the body is at the bottom of the viewport
          scrub: true
      }
  });

  // Add animations to the timeline for the image at the end
  tlEnd.from(".first3", { opacity: 0, duration: 1, ease: "power4.out" });
});


