let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      function updateCalculation(value) {
        calculation += value;
        
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function displayCalculation() {
        document.querySelector('.result')
          .innerHTML = calculation; 
      }
