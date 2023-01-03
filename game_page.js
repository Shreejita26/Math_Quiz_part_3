
	//Get "player1_name" using localStorage.getItem() function and assign it to player1_name
	player1_name= localStorage.getItem("player1");

	
	//Get "player2_name" using localStorage.getItem() function and assign it to player2_name
player2_name=localStorage.getItem("player2");
	
function send(){
	number1=document.getElementById("number1").value;
	number2=document.getElementById("number2").value;
	actual_answer=parseInt(number1)*parseInt(number2);
}
question_number="<h4>"+number1+"X"+ number2 +"</h4>";
input_box ="<br> answer:<input type='text' id='input_check_box'>";
check_button="<br> <br> <button class=btn btn-info onclick=check()>Check</button>";
row= question_number+input_box+check_button;
document.getElementById("output").innerHTML = row;



