//for of loop 
//access element of array
var a=["green","blue","red","orange","white"]
for(var i of a){
    console.log(i)
}



//entries method
var j=["halwa",'gandwa','jhtwa']
for(var [index,i] of j.entries())
    {
        console.log(index+"->"+i)
    }
    





    function checkAge(data) {
        if (data === { age: 18 }) {
        console.log("You are an adult!");
        } else if (data == { age: 18 }) {
        console.log("You are still an adult.");
        } else {
        console.log(`Hmm.. You don't have an age I guess`);
        }
       }
       
       checkAge({ age: 18 });





       function Add(){
        console.log(answer)
        var answer = 2
    };
    Add()






function fn(){
    return 4+5;
    }
fn(3,7);