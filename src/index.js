
//For uppercase
document.getElementById("upper-case").addEventListener("click", function ()
    {
        let input = document.getElementById("textarea").value;
        document.getElementById("textarea").value = input.toUpperCase();

    }
)
//For lowercase
document.getElementById("lower-case").addEventListener("click", function ()
    {
        let input = document.getElementById("textarea").value;
        document.getElementById("textarea").value = input.toLowerCase();

    }
)
//For Proper case or Title case
document.getElementById("proper-case").addEventListener("click", function ()
    {
        let input = document.getElementById("textarea").value;
        document.getElementById("textarea").value = toProperCase(input);
    }
)
//Function for ProperCase
function toProperCase(input){
    let sentence = input.toLowerCase().split(" ");
    for (let i = 0 ; i<sentence.length ; i++){
        sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
}

//Sentence Case function
function toSentenceCase(input){
    let newString = input.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return newString;
}
//Sentence Case Implementation
document.getElementById("sentence-case").addEventListener("click", function ()
    {
        let input = document.getElementById("textarea").value;
        document.getElementById("textarea").value = toSentenceCase(input);
    }
)

//Download button
document.getElementById("save-text-file").addEventListener("click", function ()
    {
        let input = document.getElementById("textarea").value;
        download("text.txt",input);
    }
)
//Function to execute download
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}