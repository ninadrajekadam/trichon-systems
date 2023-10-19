$(() => {
    $('#year').text(new Date().getFullYear()); //current year shown in footer

    //nav height for a top margin to set on main tag
    let navHeight = $('.navbar')[0].offsetHeight;
    if ($('.main').hasClass() !== 'home-main') $('.main').css({'margin-top' : navHeight + 10 +'px'});

    //navbar toggle button icon
    if($('.navbar-toggler').hasClass('collapsed') === false) {
        $('.navbar-toggler').addClass('collapsed');
        $('.fa-chevron-right').removeClass('fa-rotate-180');
    }
}); 

//navbar code
let navbar = `
    <div class="container">
        <a class="navbar-brand" href="../"><img src="../img/logo.png" class="logo" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarMenu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="../">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="../about-us.html">About us</a></li>
                <li class="nav-item"><a class="nav-link" href="../products.html">Products</a></li>
                <li class="nav-item"><a class="nav-link" href="../contact-us.html">Contact us</a></li>
            </ul>
        </div>
    </div>`;
// $('#navbar').html(navbar);

//footer code
let footer = `
    <div class="container">
        <h6 class="mb-0">
            <i class="fa-regular fa-copyright"></i> <span id="year"></span>. Trichon Systems. All rights reserved
        </h6>
    </div>`;
$('#footer').html(footer);
