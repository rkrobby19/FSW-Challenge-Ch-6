const addGameHistory = async (userId) => {
    console.log(userId);
    let regDate = document.getElementById("inputDate").value;
    console.log(regDate);
    let regPlaytime = document.getElementById("inputPlaytime").value;
    console.log(regPlaytime);
    let regPoints = document.getElementById("inputPoints").value;
    console.log(regPoints);

    const resp = await fetch(
        `http://localhost:8000/users/${userId}/game-history`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: regDate,
                playTime: regPlaytime,
                exp: regPoints,
                UserId: userId,
            }),
        }
    );

    if (resp.status === 201) {
        alert("Successfully insert data");
        document.getElementById("inputDate").value = null;
        document.getElementById("inputPlaytime").value = null;
        document.getElementById("inputPoints").value = null;
    } else {
        alert("Inser data failed");
    }
    location.reload();
};

const deleteHandler = async (id) => {
    console.log(id);
    let ans = confirm("Are you sure?");
    if (ans) {
        await fetch(`http://localhost:8000/users/${id}/game-history`, {
            method: "DELETE",
        });

        location.reload();
    }
};
