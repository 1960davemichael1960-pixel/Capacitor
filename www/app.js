function saveUser() {

    const name = document.getElementById("nameInput").value.trim();

    if (name === "") {
        showMessage("Please enter a name.");
        return;
    }

    const user = {
        name: name,
        savedAt: new Date().toISOString()
    };

    saveData("user", user);

    showMessage("Saved locally!");
}


function showUser() {

    const user = loadData("user");

    if (user) {
        document.getElementById("nameInput").value = user.name;

        showMessage(
            "Hello " + user.name + "! Data loaded."
        );
    } else {
        showMessage("No saved data found.");
    }
}


function clearUser() {

    deleteData("user");

    document.getElementById("nameInput").value = "";

    showMessage("Data cleared.");
}


function showMessage(message) {

    document.getElementById("output").textContent = message;

          }
