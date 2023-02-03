
function displayFlag(responsedata){
    
    let keys=Object.keys(responsedata)
    
    for (k in keys){
   
      console.log(responsedata[k]['flags']['png'])
    }
  
}

function displayCountryRegions(responsedata){
  let keys=Object.keys(responsedata)
  let data=[]
  for (k in keys){
    
    let tempObject={
      country:responsedata[k]['name'],
      region:responsedata[k]['region'],
      subregion:responsedata[k]['subregion'],
      population:responsedata[k]['population']

    }
    data.push(tempObject)
  }    

  console.log("Display Country Region and SubRegion",data)
  

}


let xhr=new XMLHttpRequest();
console.log(xhr)
xhr.open("GET","https://restcountries.com/v2/all")
xhr.send()


xhr.onload=function(){
    
    responsedata=JSON.parse(xhr.response)
    
    // displayFlag(responsedata)
    displayCountryRegions(responsedata)
   
}
