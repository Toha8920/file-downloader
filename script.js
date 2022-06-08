const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");
downloadBtn.addEventListener("click",(e) => {
    e.preventDefault()//preventing form from submitting
    downloadBtn.innerText ="Donloading File...";
    fetchFile(fileInput.value);
})

function fetchFile(url){
    //fetching file & returning response as blob
    fetch(url).then(res => res.blob()).then(file =>{
        //url.createObjURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;//passing tempurl as href value of<a> tag
        //passing filename as download value of <a> tag
        aTag.download = url.replace();
        document.body.appendChild(aTag);//adding <a> tag inside body
        aTag.click();//clicking <a> tag so the file download
        aTag.remove();//removing <a> tag once file download
        URL.revokeObjectURL(tempUrl);//removing tempurl from the documents
        downloadBtn.innerText ="Donloading File...";

    }).catch(() => {
        //catch method will call if any error comes during downloading
        downloadBtn.innerText ="Donload File...";
        alert("Failed to download file");    
    });
}