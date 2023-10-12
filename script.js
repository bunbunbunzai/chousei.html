// Initialize the calendar
const hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
const minutes = ["00", "30"];
const users = ["User 1", "User 2"]; // Add more users here

const tableBody = document.querySelector("#calendar tbody");

hours.forEach(hour => {
  minutes.forEach(minute => {
    const time = `${hour}:${minute}`;
    const row = document.createElement("tr");
    const timeCell = document.createElement("td");
    timeCell.textContent = time;
    row.appendChild(timeCell);

    users.forEach(user => {
      const cell = document.createElement("td");
      cell.addEventListener("click", function() {
        this.classList.toggle("selected");
      });
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });
});
