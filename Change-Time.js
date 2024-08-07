function convertTime() {
    let inputTime = document.getElementById("timeInput").value.trim();
    let amPm = inputTime.slice(-2).toUpperCase();
    let time = inputTime.slice(0, -2).trim().split(":");
    let hour = parseInt(time[0]);
    let minute = parseInt(time[1]);

    if (amPm === "AM" && hour === 12) {
        hour = 0;
    } else if (amPm === "PM" && hour !== 12) {
        hour += 12;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    let result = `${hour}:${time[1]}`;
    document.getElementById("result").innerText = `Time in 24-hour Form: ${result}`;
}
