/**
 * update modal with Link
 * @param {object} event
 */
function updateLink(event) {
    switch (event.toElement.id) {
        case "getTask":
            updateMainModelContent("https://restapi.gopibabu.live/v1/tasks/{number}");
            break;
        case "deleteTask":
            updateMainModelContent("https://restapi.gopibabu.live/v1/tasks/{number}");
            break;
        case "completedTasks":
            updateMainModelContent("https://restapi.gopibabu.live/v1/tasks/complete");
            break;
        case "incompletedTasks":
            updateMainModelContent(
                "https://restapi.gopibabu.live/v1/tasks/incomplete"
            );
            break;
        case "allTasks":
            updateMainModelContent("https://restapi.gopibabu.live/v1/tasks");
            break;
        case "tasksByPageNumber":
            updateMainModelContent(
                "https://restapi.gopibabu.live/v1/tasks/page/{number}"
            );
            break;
        case "createNewTask":
            updateMainModelContent("https://restapi.gopibabu.live/v1/tasks", true);
            break;
        case "updateTask":
            updateMainModelContent(
                "https://restapi.gopibabu.live/v1/tasks/{number}",
                true
            );
            break;
        case "createUser":
            updateMainModelContentForUsers(
                "https://restapi.gopibabu.live/v1/users"
            );
            break;
        default:
            updateMainModelContent("API is not yet designed!!");
    }
}

/**
 * Update modal text with content
 * @param api
 * @param code_display
 */
function updateMainModelContent(api, code_display = false) {
    document.getElementById("mainModalContent").innerHTML = api;
    let codeUsers = document.getElementById("modalCodeUsers");
    codeUsers.style.display = "none";
    let code = document.getElementById("modalCode");
    if (code_display === false) {
        code.style.display = "none";
    } else {
        code.style.display = "block";
    }
}
/**
 * Update modal text with content
 * @param api
 * @param code_display
 */
function updateMainModelContentForUsers(api, code_display = false) {
    document.getElementById("mainModalContent").innerHTML = api;
    let code = document.getElementById("modalCode");
    code.style.display = "none";
    let codeUsers = document.getElementById("modalCodeUsers");
    codeUsers.style.display = "block";
}

document.getElementById("getTask").addEventListener("click", updateLink);
document.getElementById("deleteTask").addEventListener("click", updateLink);
document.getElementById("completedTasks").addEventListener("click", updateLink);
document
    .getElementById("incompletedTasks")
    .addEventListener("click", updateLink);
document.getElementById("allTasks").addEventListener("click", updateLink);
document
    .getElementById("tasksByPageNumber")
    .addEventListener("click", updateLink);
document.getElementById("createNewTask").addEventListener("click", updateLink);
document.getElementById("updateTask").addEventListener("click", updateLink);
document.getElementById("createUser").addEventListener("click", updateLink);
