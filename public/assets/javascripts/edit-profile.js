const editUserProfile = async (userId) => {
    let inputFirstName = document.getElementById("inputFirstName").value;
    console.log(inputFirstName);
    let inputLastName = document.getElementById("inputLastName").value;
    console.log(inputLastName);
    let inputBirthday = document.getElementById("inputBirthday").value;
    console.log(inputBirthday);
    let inputLocation = document.getElementById("inputLocation").value;
    console.log(inputLocation);
    let inputGender = document.getElementById("inputGender").value;
    console.log(inputGender);
    let inputPhone = document.getElementById("inputPhone").value;
    console.log(inputPhone);

    console.log(userId);

    let resp = await fetch(`http://localhost:8000/users/${userId}/biodata`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstName: inputFirstName,
            lastName: inputLastName,
            birthday: inputBirthday,
            location: inputLocation,
            gender: inputGender,
            phone: inputPhone,
        }),
    });

    if (resp.status === 202) {
        alert("Data Has Been Updated");
    } else {
        alert("Failed Update Data");
    }
};
