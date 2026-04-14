// callback
function phakiBhai(callMeback,patro,patri){
    console.log('value of patro',patro)
    // console.log('call me back parameter',callMeback)
    if(patri){
        // console.log(callMeback)
        callMeback(patro)
    }
    else{
        console.log('Tor kopale biya nai')
    }

}
function callSomeOne(person){
    console.log('calling',person)

}
// callSomeOne('jodu')
phakiBhai(callSomeOne, 'jadu','modu')