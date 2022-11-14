let count=0;

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
console.log(btns);

btns.forEach(function (a)
{
    console.log(a)
})

btns.forEach(function (btn)
{
    btn.addEventListener("click",function(e)
    {
        console.log(e.currentTarget)
        const styles=e.currentTarget.classList;
    if(styles.contains("decrease"))
    {
        count--;

    }
    else if(styles.contains("increase"))
    {
        count++;

    }
    if(styles.contains("reset"))
    {
        count=0;

    }

    if(count>0)
    {
        value.style.color="pink";
    }
     if(count<0)
    {
        value.style.color="red";
    }
    value.textContent=count;
    })
})


const reviews = [
    {
      id: 1,
      name: "SUZAN ",
      job: "WEB GELİŞTİRİCİ",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    },
    {
      id: 2,
      name: "KAMİL",
      job: "WEB DEVELOPER",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    },
    {
      id: 3,
      name: "FERDİ",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    },
    {
      id: 4,
      name: "İRFAN",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero?Iste, doloremque nihil?",
    },
  ];

const img = document.getElementById("person-img");

const author = document.getElementById("author");

const job = document.getElementById("job");

const info = document.getElementById("info");

const prevBtn=document.querySelector(".prev-btn");
const nextBtn=document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function () 
{
   showPerson(currentItem);

});
function showPerson(person){
const item=reviews[currentItem];
img.src=item.img
author.textContent=item.name;
job.textContent=item.job;
info.textContent=item.text;
}

randomBtn.addEventListener("click", function()
{
    currentItem= Math.floor(Math.random()*reviews.length)
    console.log(currentItem)
    showPerson()
}
)