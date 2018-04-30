var memImgPath="./images/Memberdrinks";
var members=['memberdrink-a','memberdrink-b','memberdrink-c','memberdrink-d','memberdrink-e','memberdrink-f','memberdrink-g'];
var memberinfo=['membera','memberb','memberc','memberd','membere','memberf','memberg'];
var links=['https://www.facebook.com/profile.php?id=100009696256117','https://www.facebook.com/heynoparking','https://www.facebook.com/profile.php?id=1377193600','https://www.facebook.com/profile.php?id=100004978595970','https://www.facebook.com/profile.php?id=100000483641975','https://www.facebook.com/alanqq0624','https://www.facebook.com/yun.kim.12979'];
var member_now=0;

$(document).ready(function() {
	getmember();
})

function getmember()        //get member's drinks
{
  imgPath=memImgPath+"/"+members[member_now];
  $('#drinks').css('background-image', "url("+imgPath+"1.png)");
  getmember_member_pic(imgPath);
}

function getmember_member_pic(memberPath)    //get split drinks and member's pic
{
  if(members[member_now]!="memberdrink-f" && members[member_now]!="memberdrink-g")
  {
    $('#member_info').css('background-image', "url("+memImgPath+"/"+memberinfo[member_now]+".png)");
    $('#drinks_top').css('background-image', "url("+memberPath+"2.png)");
    $('#member_pic').css('background-image', "url("+memberPath+"4.png)");
    $('#drinks_bottom').css('background-image', "url("+memberPath+"3.png)");
  }
  else
  {
    $('#member_info').css('background-image', "url("+memImgPath+"/"+memberinfo[member_now]+".png)");
    $('#drinks_top').css('background-image', "none");
    $('#member_pic').css('background-image', "url("+memberPath+"3.png)");
    $('#drinks_bottom').css('background-image', "url("+memberPath+"2.png)");
  }
}

$(".pre_arrow").click(function(){
   if(member_now<=0)
       member_now += 7
   member_now-=1;
   getmember();
});

$(".next_arrow").click(function(){
   if(member_now>=6)
       member_now -= 7
   member_now+=1;
   getmember();
});

$("#drinks").click(function()
{
    resetAnimation("#drinks","doshake",0);
	setTimeout("member_info_display()",1000);
});

$("#arrow_black").click(function()
{
	$('.member_drinks').css('animation','driftResetfromLeft 1s forwards');
	$(".member_info_display").fadeOut();
    $("#arrow_black").fadeOut();
	$("#member_info").fadeOut();
	$("#bring_back").fadeOut();
    resetAnimation("#drinks","doshake",1);
	setTimeout("backToChoose();",1000);  
});

$("#bring_back").click(function()
{
    window.open(links[member_now]);
});

function backToChoose()
{
    $('#member_pic').css('animation','member_driftDown 2s forwards');
    setTimeout("$('#drinks_top').css('animation','driftDownBack 1s forwards');$('#drinks_bottom').css('animation','driftUpBack 1s forwards');",1000);
    setTimeout("$('#drinks_top').css('visibility','hidden');$('#drinks_bottom').css('visibility','hidden');",2000);
	setTimeout("$('#drinks').show();$('.pre_arrow').show();$('.next_arrow').show();",2000);
    setTimeout("$('#member_pic').fadeOut(500);",1600);
}

function member_info_display()
{
	$("#drinks").hide();
	$("#drinks").removeClass();
	$(".pre_arrow").fadeOut();
	$(".next_arrow").fadeOut();
	$("#drinks_top").css('visibility','visible');
	$("#drinks_bottom").css('visibility','visible');
	$("#member_pic").fadeIn();
	$("#drinks_top").css('animation','driftUp 1s forwards');
	$("#drinks_bottom").css('animation','driftDown 1s forwards');
    $('#member_pic').css('animation','member_driftUp 2s forwards');
	setTimeout("$('.member_drinks').css('animation','driftLeft 1s forwards');",2000);
	setTimeout("member_info_show();",3000);
};

function member_info_show()
{
	$(".member_info_display").css('display','grid');
	$(".member_info_display").css('transform','translateX(0%)');
    $("#arrow_black").fadeIn();
	$("#member_info").fadeIn();
	$("#bring_back").fadeIn();
    $("#member_info_display").fadeIn();
}

function resetAnimation(selectorName,animationClassName,aniStatus)
{
    if(aniStatus==0){
        $(selectorName).css("animation", "shake 0.5s ease 2 alternate");
    }
    else{
        $(selectorName).css("animation", "floatUpAndDown 3s infinite");
    }
};


