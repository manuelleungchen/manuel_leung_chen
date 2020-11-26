
let modalTitle = document.querySelector(".modal-title");
let modalDescrip = document.querySelector("#modal-descrip");
let modalImg = document.querySelector("#modal-img");
let modalGithubButton = document.querySelector("#github-button");
let modalUrlButton = document.querySelector("#url-button");


$('.more-button').on('click', function () {
    let projectMenu = $(this).parent();

    modalTitle.textContent = $(this).siblings(".project-title").text();
    modalDescrip.textContent = projectMenu.attr("data-descrip");

    modalImg.src = projectMenu.siblings(".project-image").attr("src");

    modalGithubButton.setAttribute("href", $(this).data("github"))
    modalUrlButton.setAttribute("href", $(this).data("url"))

})