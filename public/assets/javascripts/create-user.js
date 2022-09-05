const createUser = async () => {
    let inputUsername = document.getElementById("inputUsername").value;
    console.log(inputUsername);
    let inputFirstName = document.getElementById("inputFirstName").value;
    console.log(inputFirstName);
    let inputLastName = document.getElementById("inputLastName").value;
    console.log(inputLastName);
    let inputBirthday = document.getElementById("inputBirthday").value;
    console.log(inputBirthday);
    let inputLocation = document.getElementById("inputLocation").value;
    console.log(inputLocation);
    let inputEmail = document.getElementById("inputEmail").value;
    console.log(inputEmail);
    let inputGender = document.getElementById("inputGender").value;
    console.log(inputGender);
    let inputPhone = document.getElementById("inputPhone").value;
    console.log(inputPhone);
    let inputPassword = document.getElementById("inputPassword").value;
    console.log(inputPassword);

    let resp = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: inputUsername,
            email: inputEmail,
            password: inputPassword,
            firstName: inputFirstName,
            lastName: inputLastName,
            birthday: inputBirthday,
            location: inputLocation,
            gender: inputGender,
            phone: inputPhone,
        }),
    });

    if (resp.status === 422) {
        alert(`Error creating user`);
    } else {
        alert(`User profile successfully created`);
        window.location.href = "/dashboard";
    }
};
