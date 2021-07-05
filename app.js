



'use strict';
let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let leftImgEl = document.getElementById('leftImg');
let midelImgEl = document.getElementById('midelImg');
let rightImgEl = document.getElementById('rightImg');
let ulEl = document.getElementById('out');
let malls = [];
let attempts = 0;
let maxAttempts = 25;
let productNames =[];
let votess = [];
let viewss = [];

function BusImg(prouductName) {
    
    
    this.pName = prouductName.split('.')[0];
    this.img = 'imgs/' + prouductName;
    this.votes = 0;
    this.views = 0;
    productNames.push(this.pName);
    malls.push(this);
}

let  malImgs = ["bag.jpg",
"banana.jpg",
"bathroom.jpg",
"boots.jpg",
"breakfast.jpg",
"bubblegum.jpg",
"chair.jpg",
"cthulhu.jpg",
"dogduck.jpg",
"dragon.jpg",
"pen.jpg",
"pet-sweep.jpg",
"scissors.jpg",
"shark.jpg",
"sweep.png",
"tauntaun.jpg",
"unicorn.jpg",
"water-can.jpg",
"wine-glass.jpg",
 ];

for (let i = 0; i <  malImgs.length; i++) {
    new BusImg( malImgs[i]);
}
console.log(malls);

function randomIndex() {
    
    
    return Math.floor(Math.random() * malls.length);
}
let leftIndex;
let rightIndex;
let midelIndex;
let leftIndex1;
let rightIndex2;
let midelIndex3;
function renderRandomImg() {
    // if(attempts ==  0){

        do { 

            leftIndex = randomIndex();
            rightIndex = randomIndex();
            midelIndex =  randomIndex();
            
            }
            while (leftIndex === midelIndex ||  midelIndex === rightIndex || rightIndex===leftIndex)
                
        
    }
    
    // if (attempts!= 0) {

    

    // do { 

    // leftIndex = randomIndex();
    // rightIndex = randomIndex();
    // midelIndex =  randomIndex();
    
    // }
    // while (leftIndex === midelIndex ||  midelIndex === rightIndex || rightIndex===leftIndex || 
    //        leftIndex === leftIndex1 || leftIndex === rightIndex2 || leftIndex === midelIndex3 ||
    //        rightIndex === rightIndex1 || rightIndex === rightIndex2 || rightIndex === midelIndex3||
    //        midelIndex === midelIndex1 || midelIndex === rightIndex2 || midelIndex === midelIndex3) 

    // }
        
        
        
    
        
    
    
    
    
    
    leftIndex = randomIndex();
       
        leftIndex1 = leftIndex 
        rightIndex2 = rightIndex
        midelIndex3 =  midelIndex 
    

    leftImgEl.setAttribute('src', malls[leftIndex].img);
    rightImgEl.setAttribute('src', malls[rightIndex].img);
    midelImgEl.setAttribute('src', malls[midelIndex].img)

    leftImgEl.setAttribute('title', malls[leftIndex].pName);
    midelImg.setAttribute('title', malls[midelIndex].pName)
    rightImgEl.setAttribute('title', malls[rightIndex].pName);
   
    malls[leftIndex].views++;
    malls[rightIndex].views++;
    malls[midelIndex].views++
// }

renderRandomImg();


leftImgEl.addEventListener('click', handelClicks);
rightImgEl.addEventListener('click', handelClicks);
midelImgEl.addEventListener('click', handelClicks);

function handelClicks(event) {
    if (attempts < maxAttempts) {
        let clickedImg = event.target.id;
       
        if (clickedImg === 'leftImg') {
            malls[leftIndex].votes++;
        }
        else if (clickedImg === 'midelImg') {
            malls[midelIndex].votes++;
        }

        else if( clickedImg === 'rightImg'){

            malls[rightIndex].votes++
        }

    
        renderRandomImg();
        
        
    } else {   
    
  
        // let ulEl = document.getElementById('out');
        // for (let i = 0; i < malls.length; i++) {
        //     let liEl = document.createElement('li');
        //     liEl.textContent = `${malls[i].pName} has ${malls[i].votes} votes and ${malls[i].views} views .`
        //     ulEl.appendChild(liEl);

        //     votess.push(malls[i].votes);    
        //     viewss.push(malls[i].views);
        // }
        // leftImgEl.removeEventListener('click', handelClicks);
        // rightImgEl.removeEventListener('click', handelClicks);
        // midelImgEl.removeEventListener('click', handelClicks);

        // chartRender();
      

     
    }

    attempts++; 

}


   
 

   let btnEl = document.getElementById ('result')

btnEl.addEventListener('click',outPut);

function outPut  (event) {

    event.preventDefault();

    if(  attempts  == maxAttempts++) {

        // console.log( attempts );
        let ulEl = document.getElementById('out');
        for (let i = 0; i < malls.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${malls[i].pName} has ${malls[i].votes} votes and ${malls[i].views} views .`
            ulEl.appendChild(liEl);

            // votess.push(malls[i].votes);    
            // viewss.push(malls[i].views);
        
        leftImgEl.removeEventListener('click', handelClicks);
        rightImgEl.removeEventListener('click', handelClicks);
        midelImgEl.removeEventListener('click', handelClicks);
        
    }
    
}






function chartRender() {
    let ctx = document.getElementById('myChart').getContext('2d');
let  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: productNames  ,
        datasets: [{
            label: '# of Votes',
            data: votess , 
            
            backgroundColor: [
               
                'rgba(255, 99, 132, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        } , 
        {
            label: '# of views',
            data: viewss , 
            backgroundColor: [
                'rgba(155, 99, 232, 0.2)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        }]  
      
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}




