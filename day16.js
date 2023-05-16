function dosomething(val){
    var k=val;
    console.log("hi")
    if (val>3){
        console.log("nice")
    } else if (val>0){
        console.log("Awesome")}
    else {
        console.log("Bakwass")
    }
    while(val>20){
        console.log("Go")
        val-= 5
    }
    for (var i=1; i<11; i++){
        console.log(i*k)
    }
    var m=['hi','bye','go']
    for(i in m)
    {
        console.log(i)
    }
    var m={price:30,qty:3}
    for(i in m)
    {
        console.log(i)
    }
    console.log(5=='5')
    console.log(5!='5')
    
    console.log(5==='5')
    console.log(5!=='5')

    document.write('ye toh kuch naya hi aa gya')

}