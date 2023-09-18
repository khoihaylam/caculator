 let button1=document.querySelectorAll("button")//TAO nodelist
// console.log(button1)
let input=document.getElementById("con")
// console.log(input)
//vong lap for de duyet phan tu trong nodelist//duyet cac button trong nodelist
for(let i=0;i<button1.length;i++){
    button1[i].addEventListener("click",function(){
        let number=button1[i].innerHTML//thay doi noi dung van ban
        if(number=="C"){
            clearinput()
        }
        else if(number=="="){
            caculateinput()
        }
        else{
            append(number)
        }
    })
}
function clearinput(){
    input.value=""//gia tri la rong
}
function caculateinput(){
    input.value=eval(input.value)//ham truyen vao cuc du lieu la ham glocal

}
function append(number){
    input.value+=number//tang com so len
}
// xong project thu 4