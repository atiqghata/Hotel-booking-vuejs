<template>
    <navbarComponent />
        <div class="quick-inquiry-modal d-none" id="quick-inquiry-modal">
        <div class="booking-modal-inner quick-inquiry-modal-inner">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <div class="proceed-booking-header">
                        <h6 class="fw-bolder m-0">QUICK INQUIRY</h6>
                        <i class="bi bi-x-lg" onclick="toggleInquiryModal()" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="col-12 p-0">
                    <div class="pt-4 ">
                        <div class="login-form">
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" class="form-control" name="fullname" id="fullname"
                                    aria-describedby="helpId" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username or E-mail</label>
                                <input type="text" class="form-control" name="username" id="username"
                                    aria-describedby="helpId" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label for="telephone" class="form-label">Telephone</label>
                                <input type="tel" class="form-control" name="telephone" id="telephone"
                                    aria-describedby="helpId" placeholder="">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Notes</label>
                                <textarea class="form-control"></textarea>
                            </div>
                            <button class="mb-3" onclick="toggleInquiryModal()">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <main>
        <div class="main-banner position-relative">
            <img src="../assets/images/clients-banner.jpg" alt="" />
            <div class="banner-heading justify-content-center">
                <h1>Our Clients</h1>
            </div>
        </div>
        <div class="text-center p-5">
            <h2 style="color: #3484f5;" class="fw-bolder mb-5">View Our Esteemed Clients</h2>
            <p class="fs-5">On the other hand we denounce with righteous indignation and dislike men who are so beguiled
                and demoralized by the charms of pleasure of
                the moment so blinded.</p>
        </div>
        <div class="row clients-row m-3">
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-1.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-2.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-3.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-4.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-5.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-6.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-7.png" alt="client" />
                </div>
            </div>
            <div class="col-3 p-0">
                <div class="clients-card p-3 m-3 section-border shadow">
                    <img src="../assets/images/client-6.png" alt="client" />
                </div>
            </div>
        </div>

        <div class="get-started-section mt-5">
            <h1>Your Trusted Travel Partner</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt
                ut labore
                et dolore magna aliqua. Ut enim ad minim</p>
            <button onclick="toggleInquiryModal()">GET STARTED NOW</button>
        </div>

        <div class="subscribtion-section p-5">
            <p>Don’t wait any longer. Contact Us</p>
            <div class="d-flex justify-content-between">
                <div class="d-flex align-items-end">
                    <img src="../assets/images/phone-icon-blue.png" alt="" />
                    <h5>+1800-333 578 </h5>
                </div>
                <div class="d-flex  align-items-end">
                    <img src="../assets/images/mail-icon-blue.png" alt="" />
                    <h5>info@himalayanleisure.com</h5>
                </div>
                <div class="d-flex  align-items-center">
                    <input type="text" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div class="reviews-section position-relative">
            <div class="reviews">
                <div class="review">
                    <div class="review-image">
                        <img src="../assets/images/rev-1.jpg" alt="" />
                    </div>
                    <div class="review-text">
                        <p>"Great things are done when men and mountains are meet"</p>
                        <h5>- Willam Koinas</h5>
                    </div>
                </div>
                <div class="review">
                    <div class="review-image">
                        <img src="../assets/images/rev-2.jpg" alt="" />
                    </div>
                    <div class="review-text">
                        <p>"Great things are done when men and mountains are meet"</p>
                        <h5>- Willam Koinas</h5>
                    </div>
                </div>
                <div class="review">
                    <div class="review-image">
                        <img src="../assets/images/rev-3.jpg" alt="" />
                    </div>
                    <div class="review-text">
                        <p>"Great things are done when men and mountains are meet"</p>
                        <h5>- Willam Koinas</h5>
                    </div>
                </div>
            </div>
            <img src="../assets/images/review-banner.jpg" alt="" class="w-100" />
        </div>
    </main>
    <footerComponent />
</template>
<script>
import navbarComponent from './layouts/navbar.vue'
import footerComponent from './layouts/footer.vue'
// import { onMounted } from '@vue/runtime-core'
export default {
  name: 'TourDetails',
  components:{
      navbarComponent,
      footerComponent
  }
}
</script>
<style>

.carousel-item:first-child>.tour-review-containerdiv,
.tour-review-container>div:first-child {
    background-image: url('../assets/images/tour-review-1.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(2) .tour-review-container>div,
.tour-review-container>div:nth-child(2) {
    background-image: url('../assets/images/tour-review-2.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(3) .tour-review-container>div,
.tour-review-container>div:nth-child(3) {
    background-image: url('../assets/images/tour-review-3.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(4) .tour-review-container>div,
.tour-review-container>div:nth-child(4) {
    background-image: url('../assets/images/tour-review-4.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(5) .tour-review-container>div,
.tour-review-container>div:nth-child(5) {
    background-image: url('../assets/images/tour-review-5.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(6) .tour-review-container>div,
.tour-review-container>div:nth-child(6) {
    background-image: url('../assets/images/tour-review-6.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(7) .tour-review-container>div,
.tour-review-container>div:nth-child(7) {
    background-image: url('../assets/images/tour-review-7.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(8) .tour-review-container>div,
.tour-review-container>div:nth-child(8) {
    background-image: url('../assets/images/tour-review-8.jpg');
    background-size: cover;
    background-position: center;
}

.carousel-item:nth-child(9) .tour-review-container>div,
.tour-review-container>div:nth-child(9) {
    background-image: url('../assets/images/tour-review-2.jpg');
    background-size: cover;
    background-position: center;
    background-color: black;
}


</style>