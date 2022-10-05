// 메뉴바 스크롤
    $(function(){
        $("#sub").hide();
        $("#main_nav").hover(function(){
            $(this).parent().find("#sub").slideDown();
            $(this).parent().hover(function(){

            },function(){
            $(this).parent().find("#sub").slideUp(900);
            });
        });
    });
    let hoverA = document.getElementsByClassName("hover-li")[4];
    window.onscroll = function(){
        scrollFunction();
    }
    function scrollFunction(){
        if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
            document.getElementById("header").style.background="rgb(254,217,0)";
        }else{
            document.getElementById("header").style.background="none";
        }
    }


    // 전체 메뉴
    function openNav(){
        document.getElementById("allNav").style.height="100%";
    }
    function closeNav(){
        document.getElementById("allNav").style.height="0";
    }


    // 이미지 배너
    let imgnum = 1;
        function imgbanner(imgitem){
            if(imgitem){
                if(imgnum == 2) return;
                imgnum++;
            }else{
                if(imgnum == 1) return;
                imgnum--;
            }
            let imgTag = document.getElementById("img_banner");
            imgTag.setAttribute("src","images/banner"+imgnum+".jpg");
        }
