document.getElementById('triangle-btn').addEventListener('click', function(){
    const base = getInputValue('triangle-base');
    const triangleHeight = getInputValue('triangle-height');
    const triangleArea = document.getElementById('triangle-area');
    // Validating
    if(isNaN(base) || isNaN(triangleHeight)){
        alert('Invalid');
        return;
    }
    // Area calculation
    const area = triangleArea.innerText = 0.5 * base * triangleHeight;
    addToEntry('Triangle', area);
});

// Rectangle event
document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleInch = getInputValue('rectangle-inch');
    // Validating
    if(isNaN(rectangleWidth) || isNaN(rectangleInch)){
        alert('Invalid');
        return;
    }

    // rectangle
    const area = rectangleWidth * rectangleInch;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

    addToEntry('Rectangle', area)
})

