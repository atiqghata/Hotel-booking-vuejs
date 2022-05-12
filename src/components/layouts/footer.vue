<template>
        <footer class="p-4 py-5" :style="{'background-image': 'url('+ require('../../assets/images/footer-background.jpg')  +')'}">
        <div class="row mx-2 my-5">
            <div class="col-4">
                <div class="footer-company-info">
                    <div class="footer-logo"> <a href="/">
                <img src="../../assets/images/logo.png" alt="" />
            </a></div>
                    <div class="company-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt</div>
                    <div class="footer-social-icons">
                        <span><i class="fa fa-facebook-f"></i></span>
                        <span><i class="fa fa-instagram"></i></span>
                        <span><i class="fa fa-twitter"></i></span>
                        <span><i class="fa fa-linkedin"></i></span>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="footer-list">
                    <h4>COMPANY</h4>
                    <div>
                        <span></span>
                        <p>About Us</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Places</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Explore</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Career</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <div class="footer-list">
                    <h4>COMPANY</h4>
                    <div>
                        <span></span>
                        <p>About Us</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Places</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Explore</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Career</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="footer-contact-info">
                    <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                            <img src="../../assets/images/phone-icon.png" class="w-100" alt="" />
                        </div>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <p class="m-0">+977 98510 94157</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                            <img src="../../assets/images/mail-icon.png" class="w-100" alt="" />
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <p class="m-0">Info@himalayanleisure.com</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="contact-icon me-3">
                            <img src="../../assets/images/location-icon.png" class="w-100" alt="" />
                        </div>
                        <div class="contact-details">
                            <h4>Location</h4>
                            <p class="m-0">2035 Sunset Lake Rd Suite B-2,<br />Newark,New Castle, DE-19702</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-section mx-3">
            <div>&copy; 2021 Himalayan Leisure Inc</div>
            <div class="d-flex align-items-center">
                <p class="m-0 me-5">Secure Payments By</p>
                <div class="payment-methods">
                    <img src="../../assets/images/visa-img.jpg" alt="" />
                    <img src="../../assets/images/mastercard-img.jpg" alt="" />
                    <img src="../../assets/images/american-express-img.jpg" alt="" />
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
}
</script>