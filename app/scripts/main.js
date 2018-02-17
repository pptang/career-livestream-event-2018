$(document).ready(function() {
  const $allArticle = $('#all_article');
  const $speakerArticle = $('#speaker_article');
  const $eventIntro = $('#event_intro');
  const $allSection = $('#all_section');
  const $eventSection = $('#event_section');
  const $speakerSection = $('#speaker_section');
  $allArticle.click(function() {
    $allArticle.addClass('tab_selected');
    $speakerArticle.removeClass('tab_selected');
    $eventIntro.removeClass('tab_selected');
    $allSection.removeClass('hidden');
    $eventSection.addClass('hidden');
    $speakerSection.addClass('hidden');
  });
  $speakerArticle.click(function() {
    $allArticle.removeClass('tab_selected');
    $speakerArticle.addClass('tab_selected');
    $eventIntro.removeClass('tab_selected');
    $allSection.addClass('hidden');
    $eventSection.addClass('hidden');
    $speakerSection.removeClass('hidden');
  });
  $eventIntro.click(function() {
    $allArticle.removeClass('tab_selected');
    $speakerArticle.removeClass('tab_selected');
    $eventIntro.addClass('tab_selected');
    $allSection.addClass('hidden');
    $eventSection.removeClass('hidden');
    $speakerSection.addClass('hidden');
  });

  // $('.column-content__item').click(function () {
  //   var title = $(this).attr('data-title');
  //   var photo = $(this).attr('data-photo');
  //   var text = $(this).attr('data-text');
  //   var type = $(this).attr('data-type');

  //   if (type === 'article') {
  //     $('#modal-column .modal__column-title').text(title);
  //     $('#modal-column .modal__column-photo').attr('src', photo);
  //     $('#modal-column .modal__column-text').text(text);

  //     $('#modal-column').css('display', 'block');
  //     $('body').addClass('noscroll');
  //   }
  // });
  $('.speaker-content__item').click(function() {
    $('#modal-speaker').css('display', 'block');
    $('body').addClass('noscroll');
    var contentTitle = $(this).attr('data-content-title');
    var speakerTitle = $(this).attr('data-speaker-title');
    var speakerPic = $(this).attr('data-speaker-pic');
    var speakerIntro = $(this).attr('data-speaker-intro');
    var profileName = $(this).attr('data-profile-name');
    var profilePositionTitle = $(this).attr('data-profile-position-title');
    var profileJpYear = $(this).attr('data-profile-jp-year');
    var profileCareerSwitchTimes = $(this).attr('data-profile-career-switch-times');
    var profileOverseaExperience = $(this).attr('data-profile-oversea-experience');
    var profileJpFavorite = $(this).attr('data-profile-jp-favorite');
    var profileLifeDescription = $(this).attr('data-profile-life-description');
    var profileSuggestion = $(this).attr('data-profile-suggestion');

    $('#content-title').text(contentTitle);
    $('#speaker-title').text(speakerTitle);
    $('#speaker-pic').attr('src', speakerPic);
    $('#speaker-intro').text(speakerIntro);
    $('#profile-name').text(profileName);
    $('#profile-position-title').text(profilePositionTitle);
    $('#profile-jp-year').text(profileJpYear);
    $('#profile-career-switch-times').text(profileCareerSwitchTimes);
    $('#profile-oversea-experience').text(profileOverseaExperience);
    $('#profile-jp-favorite').text(profileJpFavorite);
    $('#profile-life-description').text(profileLifeDescription);
    $('#profile-suggestion').text(profileSuggestion);
  });

  $('.modal__speaker-content__close-btn').click(function() {
    $('#modal-speaker').css('display', 'none');
    $('body').removeClass('noscroll');
  });

  $('#modal__close').click(function() {
    $('#modal-member').css('display', 'none');
    $('body').removeClass('noscroll');
  });

  // $('.column__list-item').click(function () {
  //   var title = $(this).attr('data-title');
  //   var photo = $(this).attr('data-photo');
  //   var text = $(this).attr('data-text');

  //   $('#modal-column .modal__column-title').text(title);
  //   $('#modal-column .modal__column-photo').attr('src', photo);
  //   $('#modal-column .modal__column-text').text(text);

  //   $('#modal-column').css('display', 'block');
  //   $('body').addClass('noscroll');
  // });

  $('#modal-close').click(function() {
    $('#modal-column').css('display', 'none');
    $('body').removeClass('noscroll');
  });

  $('.speaker__list-item').click(function() {
    var video = $(this).attr('data-video');

    $('#modal-speaker iframe').attr('src', video);
    $('#modal-speaker').css('display', 'block');
    $('body').addClass('noscroll');
  });

  $('#modal-speaker-close').click(function() {
    $('#modal-speaker').css('display', 'none');
    $('#modal-speaker iframe').attr('src', '');
    $('body').removeClass('noscroll');
  });

  window.onclick = function(event) {
    var targetId = $(event.target).attr('id');
    switch (targetId) {
      case 'modal-member':
        $('#modal-member').css('display', 'none');
        $('body').removeClass('noscroll');
        break;
      case 'modal-column':
        $('#modal-column').css('display', 'none');
        $('body').removeClass('noscroll');
        break;
      case 'modal-speaker':
        $('#modal-speaker').css('display', 'none');
        $('#modal-speaker iframe').attr('src', '');
        $('body').removeClass('noscroll');
        break;
    }
  };

  var youtubeResize = function() {
    var width = $(window).width();
    if (width < 800) {
      $('#ytplayer').attr('width', width);
    }
  };
  youtubeResize();

  $(window).resize(function() {
    youtubeResize();
  });

  $('.menu-wrapper a').click(function() {
    $('.navbar__menu').click();
    // const targetSection = $($(this).attr('href'));
    // console.log(targetSection.offset().top);
    // $('body').animate({
    //   scrollTop: targetSection.offset().top
    // }, 500);
    // return false;
  });
});
