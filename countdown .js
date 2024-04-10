// Set the start and end timestamps for the application window (replace with your desired timestamps)
const applicationStart = new Date('2024-04-10T09:00:00').getTime();
const applicationEnd = new Date('2024-04-20T17:00:00').getTime();

// Function to update countdown timer
function updateCountdown() {
    const now = new Date().getTime();

    // Calculate time until application window starts
    let timeUntilStart = applicationStart - now;
    let timeUntilEnd = applicationEnd - now;

    // Check if the application window has started
    if (timeUntilStart > 0) {
        // Display countdown to application start
        displayCountdown(timeUntilStart, "Application starts in:");
    } else if (timeUntilEnd > 0) {
        // Display countdown to application end
        displayCountdown(timeUntilEnd, "Application ends in:");
        // Send notification when reaching close to deadline (e.g., 1 day remaining)
        if (timeUntilEnd < 86400000) { // 1 day in milliseconds
            sendNotification();
        }
    } else {
        // Application window has ended
        document.getElementById('countdown').innerText = "Application window has ended.";
    }
}

// Function to display countdown timer
function displayCountdown(time, message) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div>${message}</div>
        <div>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds</div>
    `;
}

// Function to send notification
function sendNotification() {
    // You can implement notification logic here (e.g., display a browser notification)
    // For simplicity, we'll use an alert for demonstration purposes
    alert("Application deadline is approaching! Hurry up!");
}

// Update countdown every second
const timer = setInterval(updateCountdown, 1000);

// Initial call to update countdown immediately
updateCountdown();
