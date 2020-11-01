const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("gameTicketPurchased", () => {
    console.log("game button heard!")
    contentTarget.innerHTML += `<div class="person player"></div>`
})