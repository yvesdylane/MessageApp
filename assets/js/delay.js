function redirectToNextPage(delayInSeconds) {
    const delay = delayInSeconds * 1000; // Convert seconds to milliseconds
  
    setTimeout(() => {
      window.location.href = "login.html"; // Replace "next_page.html" with the actual URL
    }, delay);
  }
  
  // Example usage: Redirect to the next page after 5 seconds
  window.onload = redirectToNextPage(3);

  // For back button (less reliable)
window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
  