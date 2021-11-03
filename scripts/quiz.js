let imgBx = document.querySelectorAll('.imgBx');
		imgBx.forEach(popup => popup.addEventListener('click', () =>{
			popup.classList.toggle('active')
		}));

		function toggleMenu(){
	      var menuToggle = document.querySelector('.toggle');
	      var navigation = document.querySelector('.navigation');
	      menuToggle.classList.toggle('active');
	      navigation.classList.toggle('active');
	    }

		function myFunction() {
			document.getElementById("demo").innerHTML = 
			'" - Hi! Did you know the human brain contains around one hundred billion neurons?"';
		}