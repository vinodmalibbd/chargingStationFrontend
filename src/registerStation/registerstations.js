const inputValues = {};
function handleInputChange(event) {
    let inputId = event.target.id;
    let inputValue = event.target.value;
    if(inputId==='longitude' || inputId === 'latitude'){
        inputValue=parseFloat(inputValue);
    }
    if(inputId==='openTime' || inputId === 'closeTime'){
        inputValue=parseInt(inputValue);
    }
    inputValues[inputId] = inputValue;
    // console.log(inputValues);
}
const registerStation=(event)=>{
    event.preventDefault();
    console.log(inputValues);
    if(inputValues){
        registerChargingStation(inputValues).then(res=>{
            console.log(res);
        }).catch(e=>console.log(e.message));
    }
};