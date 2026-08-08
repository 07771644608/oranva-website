// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters(){

    if(counterStarted) return;

    counterStarted = true;


    counters.forEach(counter => {

        let target = Number(counter.getAttribute("data-target"));

        let count = 0;


        function updateCounter(){

            let increment = target / 200;


            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count);

                setTimeout(updateCounter,20);

            }
            else{

                counter.innerText = target;

            }

        }


        updateCounter();

    });

}



window.addEventListener("scroll", function(){

    const counterSection = document.querySelector(".counter");


    if(counterSection){

        let position = counterSection.getBoundingClientRect().top;


        if(position < window.innerHeight){

            startCounters();

        }

    }

});



// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");


if(topBtn){

    window.addEventListener("scroll", function(){


        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }
        else{

            topBtn.style.display = "none";

        }


    });



    topBtn.addEventListener("click", function(){


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });

}
