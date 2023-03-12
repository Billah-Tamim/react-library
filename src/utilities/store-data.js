const addToLocal = id =>{
    let newObject = {};
    const localObject = localStorage.getItem('study cart');
    if(localObject){
        newObject = JSON.parse(localObject);
    }
    const findObject = newObject[id];
    if(findObject){
        newObject[id] += 1; 
    }
    else{
        newObject[id] = 1;
    }
    
    localStorage.setItem('study cart', JSON.stringify(newObject));
}

const getFromLocal = () =>{
    let newObject = {};
    const localObject = localStorage.getItem('study cart');
    if(localObject){
        newObject = JSON.parse(localObject);
    }
    return newObject;
}

export {addToLocal, getFromLocal};