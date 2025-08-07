function signUp(event){

    event.preventDefault(); 

    const spinItem = document.querySelector(".spin");
    spinItem.style.display = "inline-block";
    
    
      const getName = document.getElementById("name").value;
    const getEmail = document.getElementById("email").value;
    const getPhone = document.getElementById("phoneNumber").value;
    const getPassword = document.getElementById("enter Password").value;  
    // const getPassword = document.getElementById("defaultCheck1").value;  
    // const Pass = document.getElementById("defaultCheck1");


    if (getName === "" || getEmail === "" || getPhone === "" || getPassword === "" ) {
        Swal.fire({
            icon: 'info',
            text: 'All fields are required! including the privacy policy and terms of use',
            confirmButtonColor: "#2D85DE"
        })       
         spinItem.style.display = "none";
        return;
}  
}