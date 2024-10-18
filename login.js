document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    const validEmail = "usuario@email.com";
    const validPassword = "123456";
    
   
    if (email === validEmail && password === validPassword) {
        alert("Login bem-sucedido!");
 
        window.location.href = "segundatela.html";
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
});