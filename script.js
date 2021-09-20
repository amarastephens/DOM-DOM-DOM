window.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    button.innerHTML = "Add Square";
    document.body.appendChild(button);


    let counter = 1

    button.addEventListener("click", function () {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.className = "div";
        div.style.backgroundColor = "black";
        div.style.flexWrap = "wrap";
        div.style.display = "inline-flex";
        div.style.width = "100px";
        div.style.height = "100px";

        div.id = counter
        counter++
    
    div.addEventListener("mouseover", function () {

        div.textContent = div.id;
        div.style.color = "white";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
   
        div.addEventListener("mouseout", function () {

            div.textContent = ""
        })
            div.addEventListener("click", function () {

                let colors = ["#F4A381", "#01ABA9", "#ffdc40", "#FF5733", "#F333FF", "#33FFE0", "#7433FF", "#33FF36"];
                div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

            

                div.addEventListener("dblclick", function () {

                 if (div.id % 2 == 0) {

                        div.nextSibling.remove()
                    }
                    
                    else if ((div.id % 2 == 0) && (div.id % 2 === null)) {
                        alert("There isn't another square!")
                    }
                  
                    else if (div.previousSibling === null) {
                        alert("There isn't another square!")
                    }
                    else { div.previousSibling.remove() }




           
                })

            })

        })


    })






















})