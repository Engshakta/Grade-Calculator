function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
   
  
}

function calculateGrade() {
    let currentGrade = document.getElementById("id"); // Get the input element
    let value = currentGrade.value; // Get the current value of the input
    
    // Calculate the grade

    if (value >= 90 && value <= 100) {
     
        document.getElementById("result").textContent = `You entered: ${value} and your grade is A`;
      } else if (value >= 80 && value <= 89) {
        document.getElementById("result").textContent = `You entered: ${value} and your grade is B`;
      } else if (value >= 70    && value <= 79) {
        document.getElementById("result").textContent = `You entered: ${value} and your grade is C`;
      } else if (value >= 60  && value <= 69) {
        document.getElementById("result").textContent = `You entered: ${value} and your grade is D`;

      } else if (value >= 50 && value <= 59) {
        document.getElementById("result").textContent = `You entered: ${value} and your grade is E `;

      } else if(value >= 0  && value <= 49) {
        document.getElementById("result").textContent = `You entered: ${value} and your grade is F`;

      } else{
        document.getElementById("result").textContent = `You entered an invalid number. Please enter a number between 0 and 100`;
      }
    
  }