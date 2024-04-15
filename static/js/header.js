document.querySelector("#entrar").addEventListener("click", function () {
    window.location.href = "static/html/forms/form1.html";
});

const storedData = localStorage.getItem("formData");

if (storedData) {
    const formData = JSON.parse(storedData);
    document.querySelector("#entrar").style.display = "none";
    document.querySelector("#avatar").style.display = "block";
    document.querySelector("#usuarioName").innerHTML = formData.fullName;
    var avatarImg = document.getElementById("avatarImg");
    avatarImg.src = formData.photo;
}

document.querySelector("#avatar").addEventListener("click", function () {
    const userNav = document.getElementById("userNav");
    if (userNav.style.display === "none") {
        userNav.style.display = "flex";
    } else {
        userNav.style.display = "none";
    }
});

document.querySelector("#changeProfile").addEventListener("click", function () {
    window.location.href = "static/html/forms/form1.html";
});

document.querySelector("#filtro").addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    var arrow = document.querySelector("#arrow");
    
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        arrow.innerHTML = "&#x25B4;";
    } else {
        navbar.style.display = "none";
        arrow.innerHTML = "&#x25BE;";
    }
});

document.querySelector("#filtroM").addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    var arrow = document.querySelector("#arrow");
    
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        arrow.innerHTML = "&#x25B4;";
    } else {
        navbar.style.display = "none";
        arrow.innerHTML = "&#x25BE;";
    }
});

