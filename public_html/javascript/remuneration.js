/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


window.addEventListener("load", function () {
    window.document.querySelector("#btnHello").addEventListener("click", function () {
        alert("coucou");
    }, false);
}, false);





window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", function () {
        if (window.document.querySelector("#i_nom").value === "" &&
                window.document.querySelector("#i_prenom").value === "") {
            alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
        } else {
            window.document.querySelector("#form_contact").submit(); // On peut envoyer
        }
    }, false);
}, false);