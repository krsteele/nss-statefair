const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

// RIDE
eventHub.addEventListener("rideTicketPurchased", () => {
    contentTarget.innerHTML += ` <div class="person rider"></div>`
})
// FULL PACKAGE
eventHub.addEventListener("fullPackageTicketPurchased", () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})
