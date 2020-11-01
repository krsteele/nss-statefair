const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("sideshowTicketPurchased", () => {
    // console.log("sideshow button heard!")
    contentTarget.innerHTML += `<div class="person gawker"></div>`
})