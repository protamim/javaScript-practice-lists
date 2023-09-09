// Fetching data
const dataLoad = (seachText, isShowAll) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${seachText}`)
    .then(res => res.json())
    .then(data => displayData(data.data, isShowAll))
}

// Display data on the UI
const displayData = (data, isShowAll) => {
    console.log(data)
    const productsContainer = document.getElementById('products-container');
    // Clear product card that searched previous
    productsContainer.innerText = '';
    // Condition checking for show all btn
    const showAllContainer = document.getElementById('show-all-container');
    if(data.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden')
    }
    // condition check for slice
    if(!isShowAll){
        data = data.slice(0, 12);
    }
    data.forEach(data => {
        // Create a dynamic card
        const cardContainer = document.createElement('div');
        cardContainer.classList = 'card bg-base-100 shadow-xl p-5';
        cardContainer.innerHTML = 
            `<figure><img src="${data?.image}" alt="Image not avaiable"/></figure>
            <div class="card-body space-y-3 text-center">
                <h2 class="card-title justify-center">${data.phone_name}</h2>
                <p>${data.brand}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(cardContainer);
    });
    // Loading end here
    loadingBars(false);
}

// Search your phone
const searchPhone = (isShowAll) => {
    loadingBars(true);
    const searchInput = document.getElementById('search-input');
    const searchValue = searchInput.value;
    dataLoad(searchValue, isShowAll);
}

// Loading bars
const loadingBars = (isLoading) => {
    const loading = document.getElementById('loading-bars');
    if(isLoading){
        loading.classList.remove('hidden');
    }else{
        loading.classList.add('hidden');
    }
}

// Show all handler
const showAll = () => {
    searchPhone(true);
}
