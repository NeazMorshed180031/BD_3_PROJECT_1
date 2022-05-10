const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                const userAction = async () => {
                    const response = await put('http://localhost:8080/movies/api/v1/users/2/recommendations');
                    const myJson = await response.json(); //extract JSON from the http response
                    // do something with myJson
                  }
                if(pwField.type ==="password"){
                    pwField.type = "text";
                    const userAction = async () => {
                        const response = await put('http://localhost:8080/movies/api/v1/users/2/recommendations');
                        const myJson = await response.json(); //extract JSON from the http response
                        // do something with myJson
                      }

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });
