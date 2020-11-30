
let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themedot = document.getElementsByClassName('theme-dots');

for(var i=0; themedot.length>i; i++){
    themedot[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == "light"){
        document.getElementById('theme-style').href = "css/index.css"
    }
    if(mode == "blue"){
        document.getElementById('theme-style').href = "css/blue.css"
    }
    if(mode == "green"){
        document.getElementById('theme-style').href = "css/green.css"
    }
    if(mode == "purple"){
        document.getElementById('theme-style').href = "css/purple.css"
    }

    localStorage.setItem('theme', mode)
}