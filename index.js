let testimonial_data =[
    {
        name:"Minato",
        image:"https://img.amiami.com/images/product/main/234/GOODS-04430266.jpg",
        text_content:"I have died many a death in love, and yet, had I not loved I would never have lived at all."
    },
    {
        name:"Naruto",  
        image:"https://img.amiami.com/images/product/main/234/GOODS-04430263.jpg",
        text_content:"Never underestimate me! I don't quit, and I won't run! I'll keep fighting, no matter what!"
    },
    {
        name:"Boruto",
        image:"https://st.cdjapan.co.jp/pictures/l/06/27/NEOGDS-563293_109.jpg?v=2",
        text_content:"I need to pump out all the power I can! Gooooo!!.I won't give up 'till the end! Victory is mine!"
    }
        

]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current =testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++
    
    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()