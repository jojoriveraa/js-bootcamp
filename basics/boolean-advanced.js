let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
    console.log('Account is locked')
} else {
    console.log('Account is unlocked')
}

if (isAccountLocked) {
    console.log('Account is locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}