const login = async () => {
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;

    let resp = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        }),
    });

    if (resp.status === 401) {
        alert("Wrong email or password for Admin");
    } else {
        alert("You are authorized");
        window.location.href = "/dashboard";
    }
};
