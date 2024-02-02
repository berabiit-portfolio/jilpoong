$(function() {
    var adRandom = new Array();
        adRandom[0] = "ad_iphone"
        adRandom[1] = "ad_windows"
        adRandom[2] = "ad_fifa"
        adRandom[3] = "ad_canon"
    var adImg = Math.floor(Math.random()*adRandom.length);
    
    /* 광고 추가 */
    $(".main_ad").prepend("<button class="+adRandom[adImg]+"><img src='/jilpoong/assets/images/"+adRandom[adImg]+".png' alt='iPhone 6 구부린 것, 이상. 직접 구부릴 수 있는 플랙서블 디자인을 경험하세요.'></button>");

    /* 광고 클릭 이벤트 */
    $(".main_ad .ad_iphone").click(function() {
        alert("페이지가 만료되었습니다.")
    });
    $(".main_ad .ad_windows").click(function() {
        alert("페...페이지가 치명상을 입었습니다.")
    });
    $(".main_ad .ad_fifa").click(function() {
        alert("2015년 1월 1일 출시")
    });
    $(".main_ad .ad_canon").click(function() {
        alert("아쉽게도 어제 끝난 이벤트랍니다ㅋ")
    });
});

$(function() {
    $(".mn01").click(function() {
		$(".pr_lst li").removeClass("on")
		$(".sec_pr_area div").addClass("hide")
		$(".sec_pr_area .desc01").removeClass("hide").addClass("show")
		$(".mn01").addClass("on")
	})
    $(".mn02").click(function(){
		$(".pr_lst li").removeClass("on")
		$(".sec_pr_area div").addClass("hide")
		$(".sec_pr_area .desc02").removeClass("hide").addClass("show")
		$(".mn02").addClass("on")
	})
    $(".mn03").click(function(){
		$(".pr_lst li").removeClass("on")
		$(".sec_pr_area div").addClass("hide")
		$(".sec_pr_area .desc03").removeClass("hide").addClass("show")
		$(".mn03").addClass("on")
	})
    $(".mn05").click(function(){
		$(".pr_lst li").removeClass("on")
		$(".sec_pr_area div").addClass("hide")
		$(".sec_pr_area .desc05").removeClass("hide").addClass("show")
		$(".mn05").addClass("on")
	})
    $(".mn06").click(function(){
		$(".pr_lst li").removeClass("on")
		$(".sec_pr_area div").addClass("hide")
		$(".sec_pr_area .desc06").removeClass("hide").addClass("show")
		$(".mn06").addClass("on")
	})
    $(".mn07").click(function(){
		$(".pr_lst li").removeClass("on")
		$(".sec_pr_area div").addClass("hide")
		$(".sec_pr_area .desc07").removeClass("hide").addClass("show")
		$(".mn07").addClass("on")
	})
});