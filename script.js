function code() {
	/* collect the message from the user with a prompt, 
    save as a variable */
	var message=prompt("What is your message?");
    
    /* collect the code fromt the user (any number) with a prompt,
    save as a variable*/
    var key=prompt("What is the code key?");
    
    /* create a string variable to store the code*/
    var code="";
    
    /* use a for loop to convert each character in the 
    message string into the ASCII code number*/
    for (i=0; i<message.length; i++){
    	/* Convert key from string to number so that it can
        be added properly to the ASCII code*/
    	code+=(message.charCodeAt(i)+Number(key))+" ";
    }
    
    /* send an alert to the user the code*/
    alert(code);
}

function trans(){
	/* collect the code from the user with a prompt, 
    save as a variable */
    var code=prompt("What is the code?");
    
    /* collect the code fromt the user (the number used to make the code) 
    with a prompt, save as a variable*/
    var key=prompt("What is the code key?");
    
    /* convert the code (a string variable)
    at each space character*/
    var array= code.split(" "); 
    
    /* create a new string variable to store 
    the message */
    var message="";
    
    /* use a for loop to turn each number from the
    code array back into a letter*/
    for (i=0; i<array.length; i++){
    	message+= String.fromCharCode(array[i]-key);
    }
    
    /* alert the translated message to the user*/
    alert(message);
}