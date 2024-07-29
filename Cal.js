
let str = "";

let dis = document.querySelector("#val");

let one = document.querySelector("#thertin");
let two = document.querySelector("#fourtin");
let three = document.querySelector("#fiftin");
let four = document.querySelector("#nine");
let five = document.querySelector("#ten");
let six = document.querySelector("#eleven");
let seven = document.querySelector("#five");
let eight = document.querySelector("#six");
let nine = document.querySelector("#seven");
let zero = document.querySelector("#seventin");
let AC = document.querySelector("#one");
let DE = document.querySelector("#two");
let plus = document.querySelector("#sixtin");
let minus = document.querySelector("#twelve");
let mul = document.querySelector("#eight");
let div = document.querySelector("#four");
let per = document.querySelector("#three");
let dot = document.querySelector("#eightin");
let e2 = document.querySelector("#ninetin");

one.addEventListener("click",()=>{
    str+='1';
    if(dis.innerHTML=='0'){
        dis.innerHTML='1'
    }
    else{
    dis.innerHTML+='1';
    }
})

two.addEventListener("click",()=>{
    str+='2';
    if(dis.innerHTML=='0'){
        dis.innerHTML='2'
    }
    else{
    dis.innerHTML+='2';
    }
})

three.addEventListener("click",()=>{
    str+='3';
    if(dis.innerHTML=='0'){
        dis.innerHTML='3'
    }
    else{
    dis.innerHTML+='3';
    }
})

four.addEventListener("click",()=>{
    str+='4';
    if(dis.innerHTML=='0'){
        dis.innerHTML='4'
    }
    else{
    dis.innerHTML+='4';
    }
})

five.addEventListener("click",()=>{
    str+='5';
    if(dis.innerHTML=='0'){
        dis.innerHTML='5'
    }
    else{
    dis.innerHTML+='5';
    }
})

six.addEventListener("click",()=>{
    str+='6';
    if(dis.innerHTML=='0'){
        dis.innerHTML='6'
    }
    else{
    dis.innerHTML+='6';
    }
})

seven.addEventListener("click",()=>{
    str+='7';
    if(dis.innerHTML=='0'){
        dis.innerHTML='7'
    }
    else{
    dis.innerHTML+='7';
    }
})

eight.addEventListener("click",()=>{
    str+='8';
    if(dis.innerHTML=='0'){
        dis.innerHTML='8'
    }
    else{
    dis.innerHTML+='8';
    }
})

nine.addEventListener("click",()=>{
    str+='9';
    if(dis.innerHTML=='0'){
        dis.innerHTML='9'
    }
    else{
    dis.innerHTML+='9';
    }
})

zero.addEventListener("click",()=>{
    str+='0';
    if(dis.innerHTML=='0'){
        dis.innerHTML='0'
    }
    else{
    dis.innerHTML+='0';
    }
})

plus.addEventListener("click",()=>{
    str+='+';
    dis.innerHTML+='+';
})

minus.addEventListener("click",()=>{
    str+='-';
    dis.innerHTML+='-';
})

mul.addEventListener("click",()=>{
    str+='x';
    dis.innerHTML+='x';
})

div.addEventListener("click",()=>{
    str+='/';
    dis.innerHTML+='/';
})

per.addEventListener("click",()=>{
    str+='%';
    dis.innerHTML+='%';
})

dot.addEventListener("click",()=>{
    str+='.';
    dis.innerHTML+='.';
})

AC.addEventListener("click",()=>{
    str="";
    dis.innerHTML='0';
})

DE.addEventListener("click",()=>{
    str = str.slice(0,-1);
    dis.innerHTML=dis.innerHTML.slice(0,-1);
})

e2.addEventListener("click",()=>{
    let i = dis.innerHTML.length-1;
    let f=0;
    let pf = 0;
    let pf1 = 0;
    let pf2 = 0;
    let val1=0;
    let val2=0;
    let t = 1;
    let c;
    console.log(dis.innerHTML);
    while(i>=0){
        if(dis.innerHTML[i]=='+'||dis.innerHTML[i]=='-'||dis.innerHTML[i]=='x'||dis.innerHTML[i]=='/'){
            f=1;
            if(dis.innerHTML[i]=='+'){
                c = '+';
            }
            else if(dis.innerHTML[i]=='-'){
                c = '-';
            }
            else if(dis.innerHTML[i]=='x'){
                c = 'x';
            }
            else{
                c = '/';
            }
        }
        else if(dis.innerHTML[i]=='%'){
            pf=1;
            if(f==1){
                pf2=1;
            }
            else{
                pf1 = 1;
            }
        }
       i--;
    }
    let parts = dis.innerHTML.split(c);
    if(pf==1){
        if(pf2==1){
            parts[0]=parts[0].split(0,-1);
            val2 = parseFloat(parts[0]);
            val2/=100;
            val1 = parseFloat(parts[1]);
        }
        else{
            parts[1]=parts[1].split(0,-1);
            val1 = parseFloat(parts[1]);
            val1/=100;
            val2 = parseFloat(parts[0]);
        }
    }
    else{
    val1 = parseFloat(parts[1]);
    val2 = parseFloat(parts[0]);
    }
    console.log(val1);
    console.log(val2);
    let ans;
    if(c=='+'){
        ans = val1+val2;
    }
    else if(c=='-'){
        ans = val2-val1;
    }
    else if(c=='x'){
        ans = val2*val1;
    }
    else{
        ans = val2/val1;
    }
    dis.innerHTML = ans.toString();
})