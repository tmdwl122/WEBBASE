// var elDt = document.querySelectorAll('.qna dt')
// var elIcon = document.querySelectorAll('.qna i')
// for (let i=0; i<4; i++) {
//     elDt[i].addEventListener('click',function(){
//         for (let j=0; j<4; j++) {
//             if(j!==i) {
//                 elDt[j].classList.remove('on')
//                 elIcon[j].classList.remove('fa-minus')
//                 elIcon[j].classList.add('fa-plus')
//             }
//         }
//         if(elDt[i].classList.contains('on')) {
//             elDt[i].classList.remove('on')
//             elIcon[i].classList.add('fa-plus')
//             elIcon[i].classList.remove('fa-minus')
//         } else {
//             elDt[i].classList.add('on')
//             elIcon[i].classList.remove('fa-plus')
//             elIcon[i].classList.add('fa-minus')
//         }
//     })
// }

//공지사항 슬라이드
$('.qna dt').eq(0).next().slideDown()
$(".qna dt").click(function(){
    // $(this).toggleClass('on')
    $(this).next().slideToggle(300)
    if($(this).find('i').hasClass('fa-plus')){
        $(this).find('i').addClass('fa-minus').removeClass('fa-plus')
    } else {
        $(this).find('i').addClass('fa-plus').removeClass('fa-minus')
    }
    // $(this).siblings('dt').removeClass('on')
    $(this).siblings('dt').next().slideUp(300)
    $(this).siblings('dt').find('i').removeClass('fa-minus').addClass('fa-plus')
})

$(".qna dt a").on('click', function(e){
    e.preventDefault()
})

