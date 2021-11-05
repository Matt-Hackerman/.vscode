var isCrossed=0;
            var c=0;
            function strikeThrough(thing){
                if(thing.value=='false'){
                    var btn=document.getElementById(thing.id);
                    btn.innerHTML=thing.id;
                    let place=document.getElementById(thing.id);
                    document.body.replaceChild(btn, place);
                    console.log(thing.value);
                    thing.value='true';
                    console.log(thing.value);
                    isCrossed=0;
                }
                else if(thing.value=='true'){
                    var but=document.getElementById(thing.id);
                    but.innerHTML='<strike>'+thing.id+'</strike>';
                    console.log(thing.value);
                    thing.value='false';
                    console.log(thing.value);
                    let place=document.getElementById(thing.id);
                    document.body.replaceChild(but, place);
                    isCrossed=1;
                }
            }
            function add(){
                console.log("Hello")
                var item=window.prompt("Enter an item you want to add");
                let newBtn=document.createElement("BUTTON");
                newBtn.innerHTML=item;
                newBtn.setAttribute('id',item);
                newBtn.setAttribute('onclick', "strikeThrough(this)");
                newBtn.setAttribute('value', "true");
                document.body.appendChild(newBtn);
                c+=1;
            }
            function boughtItems(thing){
                console.log("outside")
                for(let i=0;i<100;i++){
                    console.log("INside")
                    if(document.body.getElementsByTagName("button")[i].value=='true'){
                    console.log("Inside if loop")
                    let para=document.createElement("p")
                    let k=document.createTextNode(document.body.getElementsByTagName("button")[i].id);
                    document.body.appendChild(para)
                    document.body.appendChild(k);
                    }
                }
            }
            function notBoughtItem(things){
                console.log("outside")
                for(let i=0;i<100;i++){
                    console.log("INside")
                    if(document.body.getElementsByTagName("button")[i].value=='false'){
                    console.log("Inside if loop")
                    let para=document.createElement("p")
                    let k=document.createTextNode(document.body.getElementsByTagName("button")[i].id);
                    document.body.appendChild(para)
                    document.body.appendChild(k);
                    }
                }
            }