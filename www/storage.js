function saveData(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


function loadData(key) {

    const data = localStorage.getItem(key);

    if (data) {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error("Failed to parse saved data for key:", key, error);
            return null;
        }
    }

    return null;

}


function deleteData(key) {

    localStorage.removeItem(key);

}


function clearStorage() {

    localStorage.clear();

}
