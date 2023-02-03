
function objectCompare(obj1,obj2){
    let obj1_keys=Object.keys(obj1).sort()
    let obj2_keys=Object.keys(obj2).sort()
    let obj1_valuess=Object.values(obj1).sort()
    let obj2_values=Object.values(obj2).sort()

    let flag=0
    for(let i=0;i<obj1_keys.length;i++){
    if ((obj1_keys[i]=== obj2_keys[i]) && (obj1_valuess[i]===obj2_values[i])){
        flag++

    }
    }
    if (obj1_keys.length === flag){
    return true
    }else{
    return false
    }

}



let obj1={name:"Person 1",age:5}
let obj2={age:5,name:"Person 1"}

console.log(objectCompare(obj1,obj2))
