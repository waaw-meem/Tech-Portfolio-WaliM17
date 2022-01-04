const splash = document.querySelector(".splash");

function display(){

    setInterval(timer,3000);

}

function timer(){
       splash.classList.add('display-none');
}


// function

window.onload-function(){
  document.getElementById('hide-spinner').style.display = "none";
}

function showContent(){
    
// //     // let fullContent = document.getElementById('full-content');

// //     // fullContent.innerHTML = `An ordinary Karachitte Web Developer, Mobile Shutterbug, and Writer 😀 
// //     // Who loves to play with different stacks and love to give breath to Ui/Ux designs.
// //     // Computer Science Student and Front-end Web Developer. 
// //     // Passionate about solving problems that will benefit others in the area of IT or in real life. 
// //     // from haven't think about computer science and then picking it as a carrier back in 2017 I have discovered a lot in this system. But outside it,
// //     // I'm just an ordinary karachitte man who loves to do mobile photography and write thoughts.`

    
        let dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("btn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline-block"; // inline or inline-block
          btnText.innerHTML = "Read more "; 
          moreText.style.display = "none";

        } else {

          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        
      }
}

function showMoreProject(){

        let dots = document.getElementById("dot");
        var moreText = document.getElementById("more2");
        var btnText = document.getElementById("btn2");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline-block"; // inline or inline-block
          btnText.innerHTML = "See More"; 
          moreText.style.display = "none";

        } else {

          dots.style.display = "none";
          btnText.innerHTML = "Show less"; 
          moreText.style.display = "inline";
          btnText.style.marginTop = "4rem";
        
      }
}



// function hideNavAbout(){

//       let navBar = document.getElementById("")


// }



// function display(){

//   setInterval(timer,2000);

// }

// function timer(){
//      splash.classList.add('display-none');
// }

	// $(document).ready(function(){
			// 	$('div#loading').removeAttr('id');
		// });
		// var preloader = document.getElementById("loading");
		// window.addEventListener('load', function(){
		// 	preloader.style.display = 'none';
		// 	})

		// function myFunction(){
		// 	preloader.style.display = 'none';
		// };