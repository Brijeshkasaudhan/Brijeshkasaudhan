// validating phone number
document.addEventListener("DOMContentLoaded",function(){
    const submit =document.getElementById("ph");
    function toggleParkingSpace(spaceNumber) {
        const ph = document.getElementById(`space${spaceNumber}`);
        if (ph.classList.contains("empty")) {
            parkingSpace.classList.remove("empty");
            parkingSpace.classList.add("occupied");
            alert(`Parking space ${spaceNumber} is now occupied.`);
        } else {
            parkingSpace.classList.remove("occupied");
            parkingSpace.classList.add("empty");
            alert(`Parking space ${spaceNumber} is now available.`);
        }
    }
});