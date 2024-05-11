const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //querySelectorAll grabls all of them and puts them into what's called the 'node list' which is similar to an array
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

//update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice; 
}


//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

//Seat click event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');


        updateSelectedCount();
    }
});

// Initial count and total set
updateSelectedCount();