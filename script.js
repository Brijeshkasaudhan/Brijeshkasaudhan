document.addEventListener("DOMContentLoaded", function () {
    const parkingLot = document.getElementById("parking-lot");

    // Create parking spaces dynamically
    for (let i = 1; i <= 30; i++) {
        const parkingSpace = document.createElement("div");
        parkingSpace.classList.add("parking-space", "empty");
        parkingSpace.setAttribute("id", `space${i}`);
        parkingSpace.addEventListener("click", () => toggleParkingSpace(i));
        parkingLot.appendChild(parkingSpace);
    }

    // Function to toggle parking space status
    function toggleParkingSpace(spaceNumber) {
        const parkingSpace = document.getElementById(`space${spaceNumber}`);
        if (parkingSpace.classList.contains("empty")) {
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
