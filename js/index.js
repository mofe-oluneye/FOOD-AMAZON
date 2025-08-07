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
           else {
        // convert to form data
        const signData = new FormData();
        signData.append("name", getName);
        signData.append("email", getEmail);
        signData.append("phone", getPhone);
        signData.append("password", getPassword);     
           // request method
        const signMethod = {
            method: 'POST',
            body: signData
        }        
        // endpoint
        const url = "https://cyrilyoruba.juadebgabriel.com/yorubalearning/api/register_admin";    
            // callimg the api
        fetch(url, signMethod)
        .then(response => response.json())
        .then(result => {
            console.log(result)        

                if (result.status === "success") {
                Swal.fire({
                    icon: 'success',
                    text: `${result.message}`,
                    confirmButtonColor: "#2D85DE"

                })         
                       setTimeout(() => {
                    location.href = "index.html"
                }, 4000)
            }

            else {
                Swal.fire({
                    icon: 'info',
                    text: `${result.message}`,
                    confirmButtonColor: "#2D85DE"

                })
                spinItem.style.display = "none";
            }        })
        .catch(error => {
            console.log('error', error)
            Swal.fire({
                icon: 'info',
                text: `${result.message}`,
                confirmButtonColor: "#2D85DE"

            })
            spinItem.style.display = "none";
        });
    }
} 

    

