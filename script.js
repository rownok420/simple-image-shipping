const description = document.getElementById('desc');
const price = document.getElementById('price');
const shippingCost = document.getElementById('shipping');
const total = document.getElementById('total')

function totalCost(){
    const imagePrice = parseFloat(price.innerText);
    const shippingPrice = parseFloat(shippingCost.innerText);
    const totalPrice = imagePrice + shippingPrice;
    // console.log(totalPrice)
    total.innerText = totalPrice;
    return totalPrice
}

// shipping charge
document.getElementById('free').addEventListener('click',function(){
   shippingCost.innerText = '05'
   totalCost()
})
document.getElementById('express').addEventListener('click',function(){
    shippingCost.innerText = '30'
    totalCost()
})


// Images description 
document.getElementById('first').addEventListener('click',function(){
    const bannerImage = document.getElementById('banner-images');
    bannerImage.src = "images/1.jpg"
    description.innerText = 'First : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerumbeatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?';
    price.innerText = '750$';
    total.innerText = '750';
    shippingCost.innerText = '00'
})
document.getElementById('second').addEventListener('click',function(){
    const bannerImage = document.getElementById('banner-images');
    bannerImage.src = "images/2.jpg"
    description.innerText = 'Second : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerumbeatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?'
    price.innerText = '650$';
    total.innerText = '650';
    shippingCost.innerText = '00';
})
document.getElementById('third').addEventListener('click',function(){
    const bannerImage = document.getElementById('banner-images');
    bannerImage.src = "images/3.jpg"
    description.innerText = 'Third : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerumbeatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?'
    price.innerText = '550$';
    total.innerText = '550';
    shippingCost.innerText = '00';
})