function printHelloWithBlinking() {
    const output = document.getElementById("word");
    const word = "We code to Craft!!";
    let index = 0;
  
    function printWithBlinkingUnderscore() {
      const printInterval = setInterval(() => {
        if (index < word.length) {
          output.innerHTML = word.substring(0, index) + '<span class="blink">_</span>';
          index++;
        } else {
          output.innerHTML = word + '<span class="blink">_</span>';
          clearInterval(printInterval);
          setTimeout(() => {
            index = 0;
            printWithBlinkingUnderscore(); // Call the function again after a delay
          }, 2000); // Adjust the delay between iterations (2 seconds in this case)
        }
      }, 200); // Adjust interval for faster printing
    }
  
    printWithBlinkingUnderscore(); // Start the initial printing
  }
  
  printHelloWithBlinking(); // Start the loop
  