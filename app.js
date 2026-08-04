const connectButton = document.getElementById("connectButton");

connectButton.addEventListener("click", () => {
    window.open("https://google.com", "_blank");
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/sw.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(console.error);
    });
}
