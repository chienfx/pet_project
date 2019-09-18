/*chữ màu*/

$(function(){
$(window).scroll(function () {
if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
else $(".lentop").fadeOut();
});
$(".lentop").click(function () {
$("body,html").animate({scrollTop: 0}, "slow");
});
});

/*check form contact*/
function Ten() {
		  var name = document.getElementById("name");
		  if (!name.checkValidity()) {
		    document.getElementById("ten").innerHTML = "input name , please !";
		    document.getElementById("ten").style.color = "red";
		    document.getElementById("name").style.border = "1px solid red";

			  }
			  else{
			  	document.getElementById("ten").innerHTML = "";
		   		document.getElementById("ten").style.color = "";
		    	document.getElementById("name").style.border = "";
			  }
			}
			
function mail(){
	var email = document.getElementById("email");
	if (!email.checkValidity()) {
		    document.getElementById("mail").innerHTML = "input email , please !";
		    document.getElementById("mail").style.color = "red";
		    document.getElementById("email").style.border = "1px solid red";

			  }
			  else{
			  	document.getElementById("mail").innerHTML = "";
		   		document.getElementById("mail").style.color = "";
		    	document.getElementById("email").style.border = "";
			  }
			}
function num(){
	var phone = document.getElementById("phone");
	if (!phone.checkValidity()) {
		    document.getElementById("sdt").innerHTML = "input phone number , please !";
		    document.getElementById("sdt").style.color = "red";
		    document.getElementById("phone").style.border = "1px solid red";

			  }
			  else{
			  	document.getElementById("sdt").innerHTML = "";
		   		document.getElementById("sdt").style.color = "";
		    	document.getElementById("phone").style.border = "";
			  }
			}