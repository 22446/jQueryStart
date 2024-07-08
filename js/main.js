///<reference types="../@types/jquery"/>

$("a[href^='#']").on("click",function(e){
    let current=e.target.getAttribute("href")
    let offsett=$(current).offset().top;
    $("body,html").animate({scrollTop:offsett},1000)
   
})

$(".click").on("click",function(){
    $(".remove").animate({width:"toggle" , padding:"toggle" },2000 ,function(){
      if($(".remove").hasClass("d-none"))
      {
        $(".sideButton .click").html("close")
        $(".remove").removeClass("d-none")
        $(".remove").removeClass("d-flex")
      }
      else{   
          $(".sideButton .click").html("open")
          $(".remove").addClass("d-none")
      }
    })  
})
$('#Duration').countdown({
  date: '12/24/2026 23:59:59'
  })
$(".sec1 h2").on("click",function(e){
  $(".test").not($(e.target).next()).slideUp(1000)
  $(e.target).next(".test").slideToggle(1000,function(){
    $(e.target).next(".test").removeClass("d-none")
  })
})

const num=100;
$("#exampleFormControlTextarea1").on("input",function(e){
  let count=e.target.value.length;
  let remain=num-count;
  $(".number").text(remain)

  if(remain<=0){
    $(".number").text("your available character finished")
    $(".number").addClass("text-danger")
    $(".removed").addClass("d-none")
   
  }else{
    $(".number").removeClass("text-danger")
    $(".removed").removeClass("d-none")

  }
})
