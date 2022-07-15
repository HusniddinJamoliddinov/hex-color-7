function renderHexes(wrapper, count){

  function randomColor(){
    let color = "#";
    let str = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++){
      color += str[Math.floor(Math.random()*16)];
    }
    return color;
  }

  const body = document.body;
  body.style.margin = "0px";
  body.style.padding = "0px";
  body.style.boxSizing = "border-box";
  body.style.fontFamily = "sans-serif";
  

  const title  = document.createElement('h2');
  title.style.textAlign = "center";
  title.style.fontSize = "30px";
  title.style.fontWeight = "700";
  title.style.marginBottom = "200px";
  
  const btnGroup = document.createElement("div");
  btnGroup.style.width = "85%";
  btnGroup.style.height = "max-content";
  btnGroup.style.marginLeft = "auto";
  btnGroup.style.marginRight = "auto";
  btnGroup.style.display = "grid";
  btnGroup.style.gridTemplateColumns = `repeat(${Math.ceil(Math.sqrt(count))}, 1fr)`;
  btnGroup.style.gap = "20px";

  for(let i = 0; i < count; i++){
    const btn = document.createElement("div");
    btn.className = "color-btn";
    btn.innerHTML = randomColor();
    btn.style.backgroundColor = btn.innerHTML;
    if(i == 0){
      title.innerHTML = btn.innerHTML;
      body.style.backgroundColor = btn.innerHTML;
    }
    btn.addEventListener("click", ()=>{
      body.style.backgroundColor = btn.innerHTML;
      title.innerHTML = btn.innerHTML;
    })

    btnGroup.appendChild(btn);
  }

  wrapper.appendChild(title);
  wrapper.appendChild(btnGroup);
  body.appendChild(wrapper);
}

module.exports = {
  renderHexes,
}