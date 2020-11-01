const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

// GAME
eventHub.addEventListener("gameTicketPurchased", () => {
    // console.log("game button heard!")
    contentTarget.innerHTML += `<div class="person player"></div>`
})

// FULL PACKAGE
eventHub.addEventListener("fullPackageTicketPurchased", () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})