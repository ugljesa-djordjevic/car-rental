window.onload = function(){
    document.querySelector("#booker").addEventListener("click", checkForm);
    document.getElementById("phone-number").addEventListener("keyup", addLine);
    document.getElementById("datepicker").addEventListener("keyup", Slasher);
    document.getElementById("datepicker2").addEventListener("keyup", Slasher);
    document.querySelector("#contactBtn").addEventListener("click", checkCont);
    document.getElementById("datepicker2").addEventListener("keyup", checker);
    document.querySelector("#all").addEventListener("click", carFilter);
    document.querySelector("#sedan").addEventListener("click", carFilter);
    document.querySelector("#suv").addEventListener("click", carFilter);
    document.querySelector("#coupe").addEventListener("click", carFilter);
    document.querySelector("#pickup").addEventListener("click", carFilter);
    document.querySelector("#convertible").addEventListener("click", carFilter);

    $.ajax({
        url : "data/cars.json",
        method : "GET",
        type : "json",
        success : function(cars) {
            var printing = "";
            for(let c of cars) {
                    printing += 
                    `
                    <div class="col-md-3 single-team">
                        <div class="thumb">
                                <img class="img-fluid" src="${c.src}" alt="">
                                <hr class="carCaption" />
                            <a href="#book">
                            <div class="align-items-center justify-content-center d-flex">
                                <h4 class="${c.style}">${c.status}</h4>
                            </div>
                            </a>
                        </div>
                        <div class="meta-text mt-30 text-center">
                            <h4>${c.car}</h4>
                            <p>${c.desc}</p>									    	
                        </div>
                    </div>
                    `
                }
            
            
               document.getElementById("carPrint").innerHTML = printing;
        },
        error : function(xhr, error, status) {
            alert(status);
        }
    });
    function printFeature(){
        var printing = "";
        printing = 
        `
        <div class="col-lg-4 col-md-6">
        <div class="single-feature">
            <h4><span class="lnr lnr-user"></span>Expert Technicians</h4>
            <p>
                Our Technicians are always focused to maintain best performance and reliability of our cars.
            </p>
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="single-feature">
            <h4><span class="lnr lnr-license"></span>Professional Service</h4>
            <p>
                Our Services will always be here for you, ready to help you on any way possible.
            </p>								
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="single-feature">
            <h4><span class="lnr lnr-phone"></span>Great Support</h4>
            <p>
                Our Support is always available for our customers. We always take care of you.
            </p>								
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="single-feature">
            <h4><span class="lnr lnr-rocket"></span>Technical Skills</h4>
            <p>
                We have a big skill in Technical services, that is why our cars are more reliable.
            </p>				
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="single-feature">
            <h4><span class="lnr lnr-diamond"></span>Highly Recomended</h4>
            <p>
                We are Acknowledged and Recomended all over the world by many companies.
            </p>								
        </div>
    </div>
    <div class="col-lg-4 col-md-6">
        <div class="single-feature">
            <h4><span class="lnr lnr-bubble"></span>Positive Reviews</h4>
            <p>
                Most of our Reviews are positive to the roof and our customers come back.
            </p>									
        </div>
    </div>	
        `
        document.querySelector("#featurePrint").innerHTML = printing;
    }
    printFeature();

    function printAbout(){
        var printing = "";
        printing = `
                    <div class="row border-yellow justify-content-center align-items-center">
						<div class="col-lg-6 no-padding home-about-left">
							<img class="img-fluid" src="img/about-img.jpg" alt="">
						</div>
						<div class="col-lg-6 no-padding home-about-right">
							<h1>Globally Connected <br>
							by Large Network</h1>
							<p>
								<span>We are here to listen from you deliver exellence</span>
							</p>
							<p>
								We have centers all our the globe which gives you oportunity to rent our cars wherever you are.
							</p>
							<a class="text-uppercase primary-btn" href="#service">get details</a>
						</div>
                    </div>
                    `
         document.querySelector("#about").innerHTML = printing;
    }
    printAbout();

    const nav = document.querySelector('.nav-menu');
    const navMenu = document.querySelectorAll('.nav-menu li');

    document.querySelector('.burger').addEventListener('click', function(){
        nav.classList.add('nav-active');
        navMenu.forEach((element, index) => {
            if(element.style.animation){
                element.style.animation = '';
            }
            else{
                element.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        });

        
    });

    document.querySelector('#closeMenu').addEventListener('click', function(){
        nav.classList.remove('nav-active');
    });
}

function checkForm(e){
    var name, email, number, takingDate, returningDate, isValid;

    sel = document.querySelector("#selection").value;
    name = document.querySelector("#name").value.trim();
    email = document.querySelector("#mail").value.trim();
    number = document.querySelector("#phone-number").value.trim();
    takingDate = document.querySelector("#datepicker").value.trim();
    returningDate = document.querySelector("#datepicker2").value.trim();
    


    var rename, reemail, renumber, retakingDate, rereturningDate;

    rename = /^[A-Z]\w{2,14}(\s[A-Z]\w{2,14})*$/;
    reemail = /^\w+([\.\-]\w+)*@\w+([\.\-]\w+)*(\.\w{2,4})+$/;
    retakingDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    rereturningDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    renumber = /^06[01234569]\/[\d]{3}\-[\d]{2}-[\d]{1,2}$/;

    var nameError, emailError, tdateError, rdateError, phoneError;

    selError = document.querySelector("#sel-error"); 
    nameError = document.querySelector("#name-error");
    emailError = document.querySelector("#email-error");
    tdateError = document.querySelector("#date-error");
    rdateError = document.querySelector("#date-error2");
    phoneError = document.querySelector("#phone-number-error");
    noError = document.querySelector("#good");

    if(sel == "0"){
        selError.innerHTML = "Choose one option";
        isValid = false;
    }
    else{
        selError.innerHTML = "";
    }

    if(name == ""){
        nameError.innerHTML = "Name field is empty";
        isValid = false;
    }
    else{
        if(!rename.test(name)){
            nameError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            nameError.innerHTML = "";
        }
    }

    if(email == ""){
        emailError.innerHTML = "Email field is empty";
        isValid = false;
    }
    else{
        if(!reemail.test(email)){
            emailError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            emailError.innerHTML = "";
        }
    }

    if(takingDate == ""){
        tdateError.innerHTML = "Date field is empty";
        isValid = false;
    }
    else{
        if(!retakingDate.test(takingDate)){
            tdateError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            tdateError.innerHTML = "";
        }
    }

    if(returningDate == ""){
        rdateError.innerHTML = "Date field is empty";
        isValid = false;
    }
    else{
        if(!rereturningDate.test(returningDate)){
            rdateError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            rdateError.innerHTML = "";
        }
    }

    if(number == ""){
        phoneError.innerHTML = "Number field is empty";
        isValid = false;
    }
    else{
        if(!renumber.test(number)){
            phoneError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            phoneError.innerHTML = "";
        }
    }

    if(isValid == false){
        e.preventDefault();
    }

}

function Slasher() {
    var vald = document.getElementById("datepicker").value.trim();
    if(vald.length == 2 || vald.length == 5)
    {
        vald += "/";
    }
    document.getElementById("datepicker").value = vald;

    var vald2 = document.getElementById("datepicker2").value.trim();
    if(vald2.length == 2 || vald2.length == 5)
    {
        vald2 += "/";
    }
    document.getElementById("datepicker2").value = vald2;
}

function checker(){
    var d1 = document.getElementById("datepicker").value;
    var d2 = document.getElementById("datepicker2").value;
    var er = document.getElementById("date-error2");

    if(d1 > d2){
        er.innerHTML = "Drop off date can't be before Pickup date";
    }
    else{
        er.innerHTML = "";
    }
}

function addLine() {
    var val = document.getElementById("phone-number").value.trim();

    if(val.length == 3)
    {
        val += "/";
    }

    if(val.length == 7 || val.length == 10){
        val += "-";
    }
    document.getElementById("phone-number").value = val;
}

function checkCont(e){

    var name, email, sub, isValid;

    name = document.querySelector("#namec").value.trim();
    email = document.querySelector("#mailc").value.trim();
    sub = document.querySelector("#subc").value.trim();

    var rename, reemail;

    rename = /^[A-Z]\w{2,14}(\s[A-Z]\w{2,14})*$/;
    reemail = /^\w+([\.\-]\w+)*@\w+([\.\-]\w+)*(\.\w{2,4})+$/;

    var nameError, emailError, subError;

    nameError = document.querySelector("#name-error1");
    emailError = document.querySelector("#email-error1");
    subError = document.querySelector("#sub-error");

    if(name == ""){
        nameError.innerHTML = "Name field is empty";
        isValid = false;
    }
    else{
        if(!rename.test(name)){
            nameError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            nameError.innerHTML = "";
        }
    }

    if(email == ""){
        emailError.innerHTML = "Email field is empty";
        isValid = false;
    }
    else{
        if(!reemail.test(email)){
            emailError.innerHTML = "This is not a good format";
            isValid = false;
        }else{
            emailError.innerHTML = "";
        }
    }

    if(sub == ""){
        subError.innerHTML = "Subject field is empty";
        isValid = false;
    }
    else{
        subError.innerHTML = "";
    }

    if(isValid == false){
        e.preventDefault();
    }

}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

function carFilter(){
    var button = this.id;
    var arr;
    if(button == "all"){
            $.ajax({
                url : "data/cars.json",
                method : "GET",
                type : "json",
                success : function(cars) {
            var printing = "";
            for(let c of cars) {
                printing += 
                `
                <div class="col-md-3 single-team">
                    <div class="thumb">
                            <img class="img-fluid" src="${c.src}" alt="">
                            <hr class="carCaption" />
                        <a href="#book">
                        <div class="align-items-center justify-content-center d-flex">
                            <h4 class="${c.style}">${c.status}</h4>
                        </div>
                        </a>
                    </div>
                    <div class="meta-text mt-30 text-center">
                        <h4>${c.car}</h4>
                        <p>${c.desc}</p>									    	
                    </div>
                </div>
                `
                }

                document.getElementById("carPrint").innerHTML = printing;
            },
            error : function(xhr, error, status) {
                alert(status);
            }
        });

       
    }
    else{
        $.ajax({
            url : "data/cars.json",
            method : "GET",
            type : "json",
            success : function(cars) {
                
                
                arr = cars.filter(el =>  el.desc.toLowerCase().indexOf(button) !== -1);
                var printing = "";
                for(let c of arr) {
                    printing += 
                    `
                    <div class="col-md-3 single-team">
                        <div class="thumb">
                                <img class="img-fluid" src="${c.src}" alt="">
                                <hr class="carCaption" />
                            <a href="#book">
                            <div class="align-items-center justify-content-center d-flex">
                                <h4 class="${c.style}">${c.status}</h4>
                            </div>
                            </a>
                        </div>
                        <div class="meta-text mt-30 text-center">
                            <h4>${c.car}</h4>
                            <p>${c.desc}</p>									    	
                        </div>
                    </div>
                    `
                }
            
            
                document.getElementById("carPrint").innerHTML = printing;
                
            },
                error : function(xhr, error, status) {
                    alert(status);
                }
        });
    }
    console.log(button);
}

function initMap() {
    var pancevo = {lat: 44.861135, lng: 20.650154};

    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: pancevo});

    var marker = new google.maps.Marker({position: pancevo, map: map});
  }

  
    