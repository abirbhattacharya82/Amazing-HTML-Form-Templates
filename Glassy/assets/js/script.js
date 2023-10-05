var a = 1
        var show = document.getElementById("password")
        var eye = document.getElementById("eye")

        eye.addEventListener("click", function () {
            if (a == 1) {
                eye.className = "fa-solid fa-eye"
                show.type = "text"
                a = 0
            }
            else {
                eye.className = "fa-solid fa-eye-slash"
                show.type = "password"
                a = 1;
            }
        })