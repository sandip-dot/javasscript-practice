 // you can add opps inside nasted opps or function let see
var captain={
    fullname:"steve aka patain america",
    age : 100,
    gf :"perry",
    married : false,
    address:{
        country:{
            cname:"america",
            pin:7788
        }
    },
    partner:["perry","stark","brece","bucky"]
 }
//acess objects
 console.log(captain['age'])
 //acess nested opps
 console.log(captain["address"])
 //acess array in opps
 console.log(captain.partner[2])


//also you can changes the key values from outside of opps 
//lets see
captain.married=true
console.log(captain)


//also you can delete key-values pairs outside of opps
//here is delete method 

delete captain.married
console.log(captain)

//and you can add keys-values from outside
captain.married=false
console.log(captain)