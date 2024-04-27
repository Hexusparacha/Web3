/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 25;
let numberOfDaysSelected = 0;
const calculatedCostElement = document.getElementById('calculated-cost');
const daySelectorElements = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');












/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


daySelectorElements.forEach(day => {
    day.addEventListener('click', toggleDaySelection);
});

function toggleDaySelection(event) {
    const day = event.target;
    if (!day.classList.contains('clicked')) { 
        day.classList.add('clicked'); 
    } else {
        day.classList.remove('clicked'); 
    }
    calculateNumberOfDays();
    updateCost();
}







/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.




clearButton.addEventListener('click', clearSelectedDays);

function clearSelectedDays() {
    daySelectorElements.forEach(day => {
        day.classList.remove('clicked'); 
    });
    numberOfDaysSelected = 0; 
    updateCost(); 
}







/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




halfDayButton.addEventListener('click', selectHalfDay);

function selectHalfDay() {
    daySelectorElements.forEach(day => {
        day.classList.add('clicked'); 
    });
    costPerDay = 20; 
    halfDayButton.classList.add('clicked'); 
    fullDayButton.classList.remove('clicked'); 
    calculateNumberOfDays();
    updateCost();
}










// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.






fullDayButton.addEventListener('click', selectFullDay);

function selectFullDay() {
    fullDayButton.classList.add('clicked'); 
    halfDayButton.classList.remove('clicked'); 
    costPerDay = 35; 
    calculateNumberOfDays();
    updateCost();
}

halfDayButton.addEventListener('click', selectHalfDay);

function selectHalfDay() {
    halfDayButton.classList.add('clicked'); 
    fullDayButton.classList.remove('clicked'); 
    costPerDay = 20; 
    calculateNumberOfDays();
    updateCost();
}














/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value






function calculateNumberOfDays() {
    numberOfDaysSelected = document.querySelectorAll('.day-selector li.clicked').length;
}

function updateCost() {
    const totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.textContent = totalCost;
}
