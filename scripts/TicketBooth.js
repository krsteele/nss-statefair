const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")



export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
        </div>
    `
}

// RIDE EVENT
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "rideTicket") {
        // console.log("button was clicked!")
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    }
})
// FOOD EVENT
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "foodTicket") {
        // console.log("button was clicked!")
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    }
})