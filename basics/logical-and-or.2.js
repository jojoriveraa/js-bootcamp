let isOneVegan = true
let isTwoVegan = false

if(isOneVegan && isTwoVegan){
    console.log('Both are vegan')
    console.log('Offer only vegan options')
} if (isOneVegan || isTwoVegan){
    console.log('At leat one is vegan')
    console.log('Offer some vegan options')
} else{
    console.log('No one is vegan')
    console.log('Offer up anything on the menu')
}