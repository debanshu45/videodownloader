//scroll to top
var btn = $("#button");
$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

// submit form
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// var searchVideo = true;
// $(".btn-search").on("click", function (event) {
//   submitTheForm(event);
// });
// function submitTheForm(event) {
//   event.preventDefault();
//   var downloadUrl = document.forms["download-form"]["video"].value;
//   if (downloadUrl == null || downloadUrl == "") {
//    $('.alert-warning').addClass('show');
//   } else {
//     if (searchVideo == true) {
//       $("#loading-message").show();
//       $(".hideOnDownload").hide();
//       $("footer").hide();
//       searchVideo = false;

//       setTimeout(function () {
//         $("#download-form")[0].submit();
//       }, 3000);

//       setTimeout(function () {
//         searchVideo = true;
//       }, 30000);
//     }
//   }
// }

$('.close').on('click',function(){
  $(this).parent('.alert').removeClass('show');
})

//sending url

const downloadBtn = document.getElementById('download');
const link = downloadBtn.getAttribute('href');

downloadBtn.addEventListener('click', function(event){
  event.preventDefault();
  function onStartedDownload(id) {
    console.log(`Started downloading: ${id}`);
  }
  
  function onFailed(error) {
    console.log(`Download failed: ${error}`);
  }
  
  var downloadUrl = link;
  
  var downloading = browser.downloads.download({
    url : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-XqN-d4_cr_dkCHGIbdvPVx5EksOYdDTthg&usqp=CAU",
    filename : 'my-image-again.png',
    conflictAction : 'uniquify'
  });
  
  downloading.then(onStartedDownload, onFailed);
  });