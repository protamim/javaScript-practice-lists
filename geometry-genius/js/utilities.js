function getInputValue(id){
    const input = document.getElementById(id);
    const inputValue = parseFloat(input.value);

    input.value = '';
    return inputValue;
}

// Add calculation entry
function addToEntry(areaType, area){
    const calculationArea = document.getElementById('calculation-area');
    const childCount = calculationArea.childElementCount;
    const p = document.createElement('p')
    p.innerHTML = `${childCount + 1}. ${areaType} ${area}cm<sup>2</sup> <button class="ml-3 p-2 bg-blue-400"> Convert </button>`;
    p.classList.add('my-5')
    calculationArea.appendChild(p);
}

// Prevent users to enter anything without a number
function onlyNumber(value1, value2){
    if(isNaN(value1) || isNaN(value2)){
        alert('Invalid');
        return;
    }
}