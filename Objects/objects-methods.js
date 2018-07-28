let restaurant = {
    name: 'el taquito',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return seatsLeft >= partySize
    },
    seatParty: function (n) {
        this.guestCount = this.guestCount + n
    },
    removeParty: function (n) {
        this.guestCount = this.guestCount - n
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))