const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

// SIDESHOW
eventHub.addEventListener("sideshowTicketPurchased", () => {
    // console.log("sideshow button heard!")
    contentTarget.innerHTML += `<div class="person gawker"></div>`
})
// FULL PACKAGE
eventHub.addEventListener("fullPackageTicketPurchased", () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})