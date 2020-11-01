const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

// FOOD
eventHub.addEventListener("foodTicketPurchased", () => {
    contentTarget.innerHTML += ` <div class="person eater"></div>`
})
// FULL PACKAGE
eventHub.addEventListener("fullPackageTicketPurchased", () => {
    contentTarget.innerHTML += `<div class="person bigSpender"></div>`
})

