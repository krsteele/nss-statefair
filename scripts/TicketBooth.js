const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            </div>
    `
}

// RIDE EVENT
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        // console.log("ride button was clicked!")
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})
// FOOD EVENT
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        // console.log("food button was clicked!")
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})
// GAME EVENT
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "gameTicket") {
        // console.log("game button was clicked!")
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    }
})