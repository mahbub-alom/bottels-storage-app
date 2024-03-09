const getOldData=()=>{
    const storedData=localStorage.getItem("cart");
    if(storedData){
        return JSON.parse(storedData)
    }
    return [];
};

const savedData=(cart)=>{
    const stringifyData=JSON.stringify(cart)
    localStorage.setItem("cart",stringifyData)
}

const addToLS=(id)=>{
    const cart= getOldData();
    cart.push(id);
    savedData(cart)
}

const removeFromLS=(id)=>{
    const cart=getOldData();
    const remaining=cart.filter(idx=>idx!==id);
    savedData(remaining)

}

export {addToLS,getOldData,removeFromLS}