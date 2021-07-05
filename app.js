



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

function renderRandomImg() {
     do { 

    leftIndex = randomIndex();
    rightIndex = randomIndex();
    midelIndex =  randomIndex();
    }
    while (leftIndex === midelIndex ||  midelIndex === rightIndex || rightIndex===leftIndex  ) ;
       
       
    
        
    

    leftImgEl.setAttribute('src', malls[leftIndex].img);
    rightImgEl.setAttribute('src', malls[rightIndex].img);
    midelImgEl.setAttribute('src', malls[midelIndex].img)

    leftImgEl.setAttribute('title', malls[leftIndex].pName);
    midelImg.setAttribute('title', malls[midelIndex].pName)
    rightImgEl.setAttribute('title', malls[rightIndex].pName);
   
    malls[leftIndex].views++;
    malls[rightIndex].views++;
    malls[midelIndex].views++
}

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
    
  
        let ulEl = document.getElementById('out');
        for (let i = 0; i < malls.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${malls[i].pName} has ${malls[i].votes} votes and ${malls[i].views} views .`
            ulEl.appendChild(liEl);

            votess.push(malls[i].votes);    
            viewss.push(malls[i].views)
        }
        leftImgEl.removeEventListener('click', handelClicks);
        rightImgEl.removeEventListener('click', handelClicks);
        midelImgEl.removeEventListener('click', handelClicks);

        chartRender();
    }
    
    attempts++; 
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
                'rgba(255, 99, 132,  1.0)',
               
            ],
            borderColor: [
                'rgba(255, 99, 132,  1.0)',
              
            ],
            borderWidth: 1
        } , 
        {
            label: '# of views',
            data:  viewss , 
            backgroundColor: [
                'rgba(130, 119, 30, 1.0)',
               
            ],
            borderColor: [
                'rgba(130, 119, 30, 1.0)',
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

 


