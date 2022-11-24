function configureListeners() {
    // select img elements  
    let images = document.querySelectorAll('img')

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners   
        let imageNum = images[i].id
           images[i].addEventListener('mouseover', function() {
                addOpacity(imageNum)
           })

           images[i].addEventListener('mouseout', function() {
                removeOpacity(imageNum)
           })
    } 
}

function addOpacity(imageNum) {
    // add appropriate CSS class

    let element = document.querySelector(`#${imageNum}`)
    element.classList.add('dim')
    getProductInfo(imageNum);     
}

function removeOpacity(imageNum) {
     //remove appropriate CSS class

    let element = document.getElementById(`${imageNum}`);
    element.classList.remove('dim') 
    let colorPrice = document.querySelector('#color-price')
    let color = document.querySelector('#color-name')
    colorPrice.innerHTML = ''
    color.innerHTML = ''
}

function getProductInfo(imageNum) {
    let price;
    let colorName;  
    
    switch (imageNum) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price
            price = '$14.99'
            colorName = 'Lime Green' 
            updatePrice(colorName, price) 
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            price = '$11.14'
            colorName = 'Medium Brown'
            updatePrice(colorName, price)
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
            price = '$22.99'
            colorName = 'Royal Blue'
            updatePrice(colorName, price)
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price = '$13.42'
            colorName = 'Solid Red'
            updatePrice(colorName, price)
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price   
            price = '$21.98'
            colorName = 'Solid White' 
            updatePrice(colorName, price)   
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price  
            price = '$4.99'
            colorName = 'Solid Black'  
            updatePrice(colorName, price)    
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price = '$8.22'
            colorName = 'Solid Cyan'
            updatePrice(colorName, price)
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price  
            price = '$11.99'
            colorName = 'Solid Purple' 
            updatePrice(colorName, price)
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price = '$14.99'
            colorName = 'Solid Yellow'
            updatePrice(colorName, price)
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        // select element with corresponding id
        let colorPrice = document.querySelector('#color-price')
        // display price
        colorPrice.innerHTML = price
        // select element with corresponding id
        let color = document.querySelector('#color-name')
        //display color name
        color.innerHTML = colorName
    }
    
}
