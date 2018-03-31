
document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.createElement('div');
    wrapper.id = "my_centered_buttons";
    let button = document.createElement('button');
    button.innerText = 'SING';
    wrapper.appendChild(button);
    document.body.appendChild(wrapper);
    button.onclick = sing;
});



function sing() {
    let names = ["Tyler", "Stephen", "John", "Skyler", "Ronnie"];

    let newDiv = document.createElement('div');
    newDiv.className = "friend";

    for (i = 0; i < names.length; i++) {

        let header = document.createElement("h3");
        header.innerHTML = names[i];
        newDiv.appendChild(header);

        for (j = 99; j > 0; j--) {
            let para = document.createElement("p");
            if (j == 1) {
                para.innerHTML = "1 line of code in the file, 1 line of code; " +
                    names[i] + " strikes one out, clears it all out, no more lines of code in the file";
            }
            else {
                para.innerHTML = j + " lines of code in the file, " + j
                    + " lines of code; " + names[i] + " strikes one out, clears it all out, "
                    + (j - 1) + " lines of code in the file";
            }
            newDiv.appendChild(para);
        }
    }
    document.body.appendChild(newDiv);
};

