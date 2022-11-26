let content = document.getElementById("content")
let submitButton = document.getElementById("submitContent")
let posts = document.getElementById("posts")
let title = document.getElementById("title")

submitButton.addEventListener("click", () =>  {
    let newPost = document.createElement("p")
    newPost.innerHTML += `<strong>${title.value}<\strong><br>`
    newPost.innerHTML += content.value
    posts.appendChild(newPost)
    content.value = ""
    title.value = ""
});