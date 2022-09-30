const ham = $('#js-hamburger')
const nav = $('#js-nav')
const item = $('.js-item')
ham.on('click', function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active') // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active') // ナビゲーションメニューにactiveクラスを付け外し
})

item.on('click', function () {
  //ハンバーガーメニューをクリックしたら
  ham.toggleClass('active') // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active') // ナビゲーションメニューにactiveクラスを付け外し
})


$(function(){

	const navigation = $('.navigation');
  const contact = $('.navigation__item--contact')
	$(window).scroll(function () {
		if ($(this).scrollTop() > 694) { //スクロールが500pxを越えたら
			navigation.addClass('black');
			contact.addClass('border-black');

		} else { //スクロールが500pxを越えなければ
			navigation.removeClass('black');
			contact.removeClass('border-black');
		}
	});

});