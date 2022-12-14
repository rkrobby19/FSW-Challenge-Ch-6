const deleteAllDataHandler = async (id) => {
    console.log(id);
    let ans = confirm("Are you sure to delete all data from this User?");
    if (ans) {
        await fetch(`http://localhost:8000/users/${id}`, {
            method: "DELETE",
        });

        await fetch(`http://localhost:8000/users/${id}/biodata`, {
            method: "DELETE",
        });

        await fetch(`http://localhost:8000/users/${id}/game-histories`, {
            method: "DELETE",
        });

        location.reload();
    }
};
