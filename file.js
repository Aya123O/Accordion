var heading = document.getElementsByClassName('child1');
for(i=0;i< heading.length;i++){
    heading[i].addEventListener('click',function(){
        let para=this.nextElementSibling
        this.classList.toggle('active');
        if(para.style.maxHeight){
            para.style.maxHeight=null
            ;

        }else{
            para.style.maxHeight=para.scrollHeight + "px";
            document.getElementsByClassName('icon').style.display="none"



        }




    });
}
