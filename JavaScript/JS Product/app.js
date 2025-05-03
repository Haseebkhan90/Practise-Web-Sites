    const pricePerWeek = 120;
    const insurancePerPerson = 25;

    const durationInput = document.getElementById("duration");
    const peopleSelect = document.getElementById("people");
    const basePriceDisplay = document.getElementById("basePrice");
    const insuranceDisplay = document.getElementById("insurancePrice");
    const totalDisplay = document.getElementById("totalDisplay");

    function calculateTotal() {
      const durationDays = parseInt(durationInput.value, 10);
      const weeks = durationDays / 7;
      const people = parseInt(peopleSelect.value, 10);

      const basePrice = pricePerWeek * weeks * people;
      const insurance = insurancePerPerson * people;
      const total = basePrice + insurance;

      basePriceDisplay.textContent = `$${basePrice.toFixed(2)}`;
    //   insuranceDisplay.textContent = `$${insurance.toFixed(2)}`;
      totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

    durationInput.addEventListener("input", calculateTotal);
    peopleSelect.addEventListener("change", calculateTotal);
    calculateTotal(); // initial
  