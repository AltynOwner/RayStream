const connectButton = document.getElementById("connectButton");
const status = document.getElementById("status");

connectButton.addEventListener("click", () => {

    status.textContent = "Connecting to Shadow PC...";

    setTimeout(() => {

        window.location.href = "https://pc.shadow.tech";

    }, 1000);

});