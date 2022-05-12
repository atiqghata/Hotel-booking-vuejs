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
                <img src="../assets/images/contact-banner.jpg" alt="" />
                <div class="banner-heading">
                    <h1>Contact Us</h1>
                </div>
            </div>


            <div class="contact-section  my-5 mx-4">
                <div class="row m-0">
                    <div class="col-4">
                        <div class="contact-detail py-5">
                            <h2>Contact Details</h2>
                            <p>Get in touch with us for any questions about our projects.</p>
                            <div class="d-flex align-items-center mt-5">
                                <div class="contact-icon me-4 ms-2" style="width:40px">
                                    <img src="../assets/images/contact-1.png" class="w-100" alt="" />
                                </div>
                                <div class="contact-details">
                                    <h4>Head Office</h4>
                                    <p class="m-0">2035 Sunset Lake Rd Suite B-2,<br />Newark,New Castle, DE-19702</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mt-5">
                                <div class="contact-icon me-4 ms-2" style="width:40px">
                                    <img src="../assets/images/contact-2.png" class="w-100" alt="" />
                                </div>
                                <div class="contact-details">
                                    <h4>Email Us</h4>
                                    <p class="m-0">Info@himalayanleisure.com</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mt-5">
                                <div class="contact-icon me-4 ms-2" style="width:40px">
                                    <img src="../assets/images/contact-3.png" class="w-100" alt="" />
                                </div>
                                <div class="contact-details">
                                    <h4>Call Support</h4>
                                    <p class="m-0">+977 98510 94157</p>
                                </div>
                            </div>

                            <div class="contact-social-icons mt-5">
                                <span><i class="fa fa-facebook-f"></i></span>
                                <span><i class="fa fa-instagram"></i></span>
                                <span><i class="fa fa-twitter"></i></span>
                                <span><i class="fa fa-linkedin"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="ms-5">
                            <h2>Send a Message</h2>
                            <form class="contact-form">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="Phone" />
                                <select class="form-control">
                                    <option>Company</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </select>
                                <input type="text" placeholder="Subject" />
                                <textarea class="w-100 mt-5" rows="7" placeholder="Message"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




            <div class="get-started-section mt-5">
                <h1>Your Trusted Travel Partner</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim</p>
                <button onclick="toggleInquiryModal()">GET STARTED NOW</button>
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
export default {
  name: 'ContactPage',
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