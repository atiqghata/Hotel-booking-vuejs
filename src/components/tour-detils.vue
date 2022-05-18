<template>
    <navbarComponent />
     <div class="tour-modal d-none" id="tour-modal">
        <div class="tour-modal-inner">
            <div id="step-1" class="step-1 active">
                <div class="top-nav-modal">
                    <div class="active">
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 1</p>
                    </div>
                    <div>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 2</p>
                    </div>
                    <div>
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 3</p>
                    </div>
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 4</p>
                    </div>
                </div>
                <div class="tour-modal-body p-4">
                    <h2 class="text-center mb-5">How Will You Be Traveling?</h2>
                    <div class="d-flex traveling-section justify-content-between p-5 mb-5">
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/solo-avatar.png" alt="" />
                            <h5>Solo</h5>
                        </div>
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/couple-avatar.png" alt="" />
                            <h5>Couple</h5>
                        </div>
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/family-avatar.png" alt="" />
                            <h5>Family</h5>
                        </div>
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/group-avatar.png" alt="" />
                            <h5>Group</h5>
                        </div>
                    </div>
                    <div class="text-end px-5 mb-4">
                        <button class="next-button" onclick="changeTab('step-2', 'step-1')">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div id="step-2" class="step-2">
                <div class="top-nav-modal">
                    <div>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 1</p>
                    </div>
                    <div class="active">
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 2</p>
                    </div>
                    <div>
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 3</p>
                    </div>
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 4</p>
                    </div>
                </div>
                <div class="tour-modal-body p-4">
                    <h2 class="text-center mb-4">When Do You Plan To Travel?</h2>
                    <div class="d-flex traveling-section justify-content-between p-5">
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/clock-icon.png" alt="" />
                            <h5>I have My Date</h5>
                        </div>
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/calender-icon.png" alt="" />
                            <h5>I have Approx. Date</h5>
                        </div>
                        <div class="shadow section-border">
                            <img src="../assets/images/modal-images/empty-calender-icon.png" alt="" />
                            <h5>No Still Planning</h5>
                        </div>
                    </div>
                    <div class="calender-input px-5 mb-5">
                        <div>
                            <input type="date" />
                            <div>
                                <img src="../assets/images/modal-images/calender-black.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <input type="date" />
                            <div>
                                <img src="../assets/images/modal-images/calender-black.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center px-5 mb-4">
                        <button class="back-button" onclick="changeTab('step-1', 'step-2')">
                            Back
                        </button>
                        <button class="next-button" onclick="changeTab('step-3', 'step-2')">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div id="step-3" class="step-3">
                <div class="top-nav-modal">
                    <div>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 1</p>
                    </div>
                    <div>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 2</p>
                    </div>
                    <div class="active">
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 3</p>
                    </div>
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 4</p>
                    </div>
                </div>
                <div class="tour-modal-body p-4">
                    <h2 class="text-center mb-4">Trip Of Your Choice</h2>
                    <div class="d-flex traveling-section justify-content-evenly p-5">
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="trip" id="" value="checkedValue">
                                I have my preferred trip
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="trip" id="" value="checkedValue">
                                I have my preferred trip
                            </label>
                        </div>
                    </div>
                    <div class="w-100 modal-input px-5 mb-4">
                        <input type="text" class="form-control w-100" placeholder="Where do you want to visit?" />
                        <textarea class="form-control w-100" placeholder="Describe" rows="5">
                        </textarea>
                    </div>
                    <div class="d-flex justify-content-between align-items-center px-5 mb-4">
                        <button class="back-button" onclick="changeTab('step-2', 'step-3')">
                            Back
                        </button>
                        <button class="next-button" onclick="changeTab('step-4', 'step-3')">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div id="step-4" class="step-4">
                <div class="top-nav-modal">
                    <div>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 1</p>
                    </div>
                    <div>
                        <i class="fa fa-filter" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 2</p>
                    </div>
                    <div>
                        <i class="fa fa-tag" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 3</p>
                    </div>
                    <div class="active">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p class="m-0 ms-2">Step 4</p>
                    </div>
                </div>
                <div class="tour-modal-body p-4">
                    <h2 class="text-center mb-4">Your Personal Information</h2>
                    <h6 class="text-center">Already Member ?</h6>
                    <div class="d-flex bool-btn justify-content-center px-5 pt-2 pb-4">
                        <button class="selected">Yes</button>
                        <button>No</button>
                    </div>
                    <div class="w-100 modal-input px-5 mb-4">
                        <input type="text" class="mb-3 form-control w-100 " placeholder="Name" />
                        <input type="text" class="mb-3 form-control w-100 " placeholder="Email" />
                        <input type="text" class="mb-3 form-control w-100 " placeholder="Contact Number" />
                        <input type="text" class="mb-3 form-control w-100 " placeholder="Country" />
                    </div>
                    <div class="d-flex justify-content-between align-items-center px-5 mb-4">
                        <button class="back-button" onclick="changeTab('step-3', 'step-4')">
                            Back
                        </button>
                        <button class="next-button" onclick="toggleModal()">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="proceed-booking-modal d-none" id="proceed-booking-modal">
        <div class="booking-modal-inner">
            <div class="row m-0">
                <div class="col-12 p-0">
                    <div class="proceed-booking-header">
                        <h6 class="fw-bolder m-0">PROCEED BOOKING</h6>
                        <i class="bi bi-x-lg" onclick="toggleProceedBookingModal()" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="col-6 p-0 pb-4">
                    <div class="p-4 ps-0 section-border border-bottom-0 border-top-0 border-start-0">
                        <h6 class="fw-bolder mb-4">ALREADY A MEMBER?</h6>
                        <div class="login-form">
                            <div class="mb-4">
                                <label for="username" class="form-label">Username or E-mail</label>
                                <input type="text" class="form-control" name="username" id="username"
                                    aria-describedby="helpId" placeholder="">
                            </div>
                            <div class="mb-4">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" name="password" id="password"
                                    aria-describedby="helpId" placeholder="">
                            </div>
                            <button class="mb-4" onclick="window.location.href= './booking.html'">SIGN
                                IN</button>
                            <a href="#" class="text-decoration-none d-block primarycolor">Forget Password?</a>
                        </div>
                    </div>
                </div>
                <div class="col-6 p-0 pb-4">
                    <div class="text-center  py-4 px-5 pe-0">
                        <h6 class="fw-bolder mb-3">DON'T HAVE AN ACCOUNT? CREATE ONE.</h6>
                        <small class="d-block mb-4">When you book with an account, you will be able to track your
                            payment
                            status, track the
                            confirmation and you can also rate the tour after you finished the tour.</small>
                        <button class="w-100 mb-4" onclick="window.location.href= './booking.html'">SIGN
                            UP</button>
                        <h6 class="fw-bolder mb-3">Or Continue As Guest</h6>
                        <button class="w-100 mb-4" onclick="window.location.href= './booking.html'">CONTINUE AS
                            GUEST</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        <div class="main-banner position-relative tour-details-banner">
            <img src="../assets/images/tour-details-banner.jpg" alt="" />
            <div class="banner-heading justify-content-between align-items-end mx-5">
                <div>
                    <h1 class="mb-4 fs-1">Everest Base Camp Trek</h1>
                    <div class="d-flex align-items-center mb-4 ">
                        <div>
                            <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                            <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                            <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                            <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                            <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                        </div>
                        <p class="fst-italic text-white m-0 ms-4 ">Rated 4.5 from 45 reviews </p>
                    </div>
                </div>
                <div class="banner-buttons">
                    <div class="mb-3">
                        <button>
                            <i class="fas fa-images me-2"></i>View Photos
                        </button>
                        <button class="ms-4">
                            <i class="fas fa-video me-2" aria-hidden="true"></i>Video Preview
                        </button>
                    </div>
                    <div class="d-flex align-items-center mb-4 justify-content-end">
                        <i class="fa fa-check-circle-o primarycolor me-2" aria-hidden="true"></i>
                        <p class="m-0 text-white">Free Cancellation 60 Days Before Departure</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="general-section tour-details-section-nav row m-0 pt-5">
            <div class="col-12 p-0">
                <div id="navbar">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs tour-details-nav" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a href="#overview" class="nav-link overview"><img
                                    src="../assets/images/tour-details-images/overview-icon.png" alt="" />
                                Overview</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#itinerary" class="nav-link itinerary"><img
                                    src="../assets/images/tour-details-images/filter-icon.png" alt="" />
                                Itinerary</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#costing" class="nav-link costing"><img
                                    src="../assets/images/tour-details-images/cost-icon.png" alt="" /> Costing</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#map" class="nav-link map"><img
                                    src="../assets/images/tour-details-images/marker-icon.png" alt="" /> Map</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#gears" class="nav-link gears"><img
                                    src="../assets/images/tour-details-images/gear-icon.png" alt="" /> Gears</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#faq" class="nav-link faq"><img
                                    src="../assets/images/tour-details-images/question-icon.png" alt="" /> FAQ</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a href="#support" class="nav-link support"><img
                                    src="../assets/images/tour-details-images/support-icon.png" alt="" />
                                Support</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <div class="text-end">
                                <h5 class="fw-bold m-0 text-decoration-line-through">$2,900</h5>
                                <h4 class="fw-bold m-0 primarycolor"><small class="fw-normal fs-6">From</small> $2,550
                                </h4>
                                <small class="primarycolor">per person</small>
                            </div>
                        </li>
                        <!-- <li class="nav-item nav-dropdown" role="presentation"> -->
                        <li id="discount-button" class="nav-item nav-button justify-content-end position-relative"
                            role="presentation">
                            <!-- <select>
                                <option>Group Discount</option>
                                <option>25%</option>
                                <option>50%</option>
                                <option>75%</option>
                                <option>100%</option>
                            </select> -->
                            <button style="background-color: white; color: #f37050; width: 100%;"
                                class="d-flex align-items-center justify-content-evenly">Group Discount <i
                                    class="bi bi-chevron-down"></i></button>
                            <div class="group-discount-modal-inner shadow">
                                <h3 class="text-center p-3" style="color: #f37050;">We Offer Group Discount</h3>
                                <div>
                                    <div class="d-flex justify-content-between" style="border-bottom: 1px solid gray;">
                                        <h4>No of Persons</h4>
                                        <h4>Price per Person</h4>
                                    </div>
                                    <div
                                        class="d-flex py-3 mt-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">1 Pax</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1470</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">2 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1170</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">3 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1150</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">4 - 6 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1125</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">7 - 12 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1100</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">13 - 18 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1075</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">19 - 24 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1050</h5>
                                    </div>
                                    <div
                                        class="d-flex py-3 group-discount-table-rows align-items-center justify-content-between">
                                        <h5 class="text-nowrap m-0 fw-normal">25 - 30 Paxes</h5>
                                        <span></span>
                                        <h5 class="text-nowrap m-0">US$ 1030</h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item nav-button" role="presentation">
                            <button onclick="toggleProceedBookingModal()"> Book Now</button>
                        </li>
                    </ul>

                    <!-- Tab panes -->

                </div>
            </div>
        </div>
        <div class="general-section tour-details-section p-5">
            <div class="row m-0">
                <div class="col-9 p-0">
                    <div class="me-5">
                        <div class="tab-content tour-details-tabs">
                            <div>
                                <section id="overview" class="sidebar-box bg-white section-border tour-first-section">
                                    <div class="siderbar-box-body d-flex align-items-stretch position-relative">
                                        <div class="feature-tag">
                                            <p class="m-0 fs-6">Featured</p>
                                        </div>
                                        <div class="row w-100 m-0 p-0">
                                            <div class="col-3 p-0">
                                                <div class="itineraray-section">
                                                    <h5 class="fw-bold">Duration</h5>
                                                    <img src="../assets/images/tour-details-images/clock-colored.png"
                                                        alt="" />
                                                    <h5>7-9 Days</h5>
                                                </div>
                                                <div class="itineraray-section">
                                                    <h5 class="fw-bold">Activity</h5>
                                                    <img src="../assets/images/tour-details-images/activity.png"
                                                        alt="" />
                                                    <h5>PARAGLIDING</h5>
                                                </div>
                                                <div class="itineraray-section">
                                                    <h5 class="fw-bold">Destination</h5>
                                                    <img src="../assets/images/tour-details-images/nepal-flag.png"
                                                        alt="" />
                                                    <h5>Nepal</h5>
                                                </div>
                                                <div class="itineraray-list px-4 pt-2">
                                                    <img src="../assets/images/tour-details-images/clock-colored.png"
                                                        alt="" />
                                                    <div>
                                                        <h5>Duration</h5>
                                                        <h6>
                                                            7-9 Days
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="itineraray-list px-4">
                                                    <img src="../assets/images/tour-details-images/activity.png"
                                                        alt="" />
                                                    <div>
                                                        <h5>Activity</h5>
                                                        <h6>
                                                            PARAGLIDING
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div
                                                    class="itineraray-list px-4 pb-4 section-border border-start-0 border-end-0 border-top-0">
                                                    <img src="../assets/images/tour-details-images/nepal-flag.png"
                                                        alt="" />
                                                    <div>
                                                        <h5>Destination</h5>
                                                        <h6>
                                                            Nepal
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-9">
                                                <div class="row m-0 h-100">
                                                    <div
                                                        class="col-6 d-flex justify-content-evenly flex-column p-0 px-4 h-100">
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/trip-grade.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>TRIP GRADE</h5>
                                                                <h6>
                                                                    Moderate
                                                                    <span onmouseenter="dropdownToggle(this)"
                                                                        onmouseleave="dropdownToggle(this)"
                                                                        class="position-relative popover-main ms-2">
                                                                        <i
                                                                            class="bi bi-exclamation-square primarycolor pb-2"></i>
                                                                        <div class="custom-popover">
                                                                            <p class="m-0">Require Trekkers to be
                                                                                active, and
                                                                                previous trekking experience is a bonus
                                                                                (Max elevation 5500m.)</p>
                                                                        </div>
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/group-icon.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>GROUP SIZE</h5>
                                                                <h6>Min 1 Pax.</h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/accomodation.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>ACCOMODATION</h5>
                                                                <h6>Hotel / Guesthouse</h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/trip-grade.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>REGION</h5>
                                                                <h6>Moderate
                                                                    <span onmouseenter="dropdownToggle(this)"
                                                                        onmouseleave="dropdownToggle(this)"
                                                                        class="position-relative popover-main ms-2">
                                                                        <i
                                                                            class="bi bi-exclamation-square primarycolor pb-2"></i>
                                                                        <div class="custom-popover">
                                                                            <p class="m-0">Require Trekkers to be
                                                                                active, and
                                                                                previous trekking experience is a bonus
                                                                                (Max elevation 5500m.)</p>
                                                                        </div>
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/group-icon.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>START-END</h5>
                                                                <h6>Min 1 Pax.</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="col-6 d-flex justify-content-evenly flex-column p-0 px-4 h-100">
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/trip-grade.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>MAX ALTITUDE</h5>
                                                                <h6>5545 Meter</h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/group-icon.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>MEALS</h5>
                                                                <h6>B.L.D
                                                                    <span onmouseenter="dropdownToggle(this)"
                                                                        onmouseleave="dropdownToggle(this)"
                                                                        class="position-relative popover-main ms-2">
                                                                        <i
                                                                            class="bi bi-exclamation-square primarycolor pb-2"></i>
                                                                        <div class="custom-popover">
                                                                            <p class="m-0">Require Trekkers to be
                                                                                active, and
                                                                                previous trekking experience is a bonus
                                                                                (Max elevation 5500m.)</p>
                                                                        </div>
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/accomodation.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>BEST SEASON</h5>
                                                                <h6>March - May & Sept - Dec</h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/trip-grade.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>DISTANCE</h5>
                                                                <h6>5545 Meter
                                                                    <span onmouseenter="dropdownToggle(this)"
                                                                        onmouseleave="dropdownToggle(this)"
                                                                        class="position-relative popover-main ms-2">
                                                                        <i
                                                                            class="bi bi-exclamation-square primarycolor pb-2"></i>
                                                                        <div class="custom-popover">
                                                                            <p class="m-0">Require Trekkers to be
                                                                                active, and
                                                                                previous trekking experience is a bonus
                                                                                (Max elevation 5500m.)</p>
                                                                        </div>
                                                                    </span>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div class="itineraray-list">
                                                            <img src="../assets/images/tour-details-images/group-icon.png"
                                                                alt="" />
                                                            <div>
                                                                <h5>DAILY ACTIVITY</h5>
                                                                <h6>B.L.D</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section id="overview" class="sidebar-box bg-white section-border">
                                    <div class="sidebar-box-heading fs-5 p-4">
                                        <img src="../assets/images/tour-details-images/overview-icon.png"
                                            alt="" />Overview
                                    </div>
                                    <div class="siderbar-box-body p-4">
                                        <p>Traveling to Amsterdam from Malta was not a long trip (less than 3 hours) and
                                            on arrival we were
                                            greeted by beautiful weather, not too hot just perfect. Getting to the ship
                                            was pretty easy and we were
                                            greeted by the crew on the jetty who took in our luggage on board.We had the
                                            whole afternoon to tour
                                            the city on our own which was quite an adventure with all the 'wild' shops
                                            and 'smoke in the air'. People
                                            were still disembarking from the previous Europe river cruiseprevious Europe
                                            river cruise and all
                                            seemed very relaxed.</p>
                                        <br />
                                        <p>We had the whole afternoon to tour the city on our own which was quite an
                                            adventure with all the 'wild'
                                            shops and 'smoke in the air'. We got back in time to find our cabin 'Rm 226'
                                            which looked very
                                            welcoming on arrival and became more and more familiar during our holiday.We
                                            had the whole
                                            afternoon to tour the city on our own which was quite an adventure with all
                                            the 'wild' shops and 'smoke
                                            in the air'. We got back in time to find our cabin 'Rm 226' which looked
                                            very welcoming on arrival and
                                            became more and more familiar during our holiday.</p>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section id="itinerary" class="sidebar-box bg-white section-border mb-5">
                                    <div
                                        class="sidebar-box-heading fs-5 p-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <img src="../assets/images/tour-details-images/filter-icon.png"
                                                alt="" />Itinerary
                                        </div>
                                        <div>
                                            <button><i class="bi bi-file-earmark-pdf"></i> Download Brochure</button>
                                        </div>
                                    </div>
                                    <div class="siderbar-box-body d-flex align-items-stretch     p-4">
                                        <div class="accordion-border"></div>
                                        <div class="accordion-section">
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                            aria-expanded="false" aria-controls="collapseOne">
                                                            <span>
                                                                <!-- <i class="fa fa-map-marker-alt"></i> -->
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </span>
                                                            Day 1 Male/South Malé Atoll (1L, 1D)
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                                        aria-labelledby="headingOne" data-bs-parent="#accordiOnexample">
                                                        <div class="accordion-body">
                                                            <div class="daily-info">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Distance</small>
                                                                    <h6>7.4 km / 4.6 miles</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" />
                                                                    </svg>
                                                                    <small class="d-block">Highest Altitude</small>
                                                                    <h6>3,440m / 11,285 ft</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 448 512">
                                                                        <path
                                                                            d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Duration</small>
                                                                    <h6>6 hours</h6>
                                                                </div>
                                                            </div>
                                                            <p>You will be met by airport representatives who will
                                                                transfer you to Male before going
                                                                to the waterfront to meet our boat captain and crew.
                                                                Once settled into our cabins,
                                                                we will depart. Cruise south for 2-3 hours through the
                                                                Vaadhoo Canal to a nearby
                                                                island in South Malé Atoll; probably Guraidhoo, a small
                                                                inhabited island where the
                                                                plan is to moor in (or just outside) the small harbour
                                                                for the first night on board.</p>
                                                            <div class="accomodation-info">
                                                                <div class="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z" />
                                                                    </svg>
                                                                    <p>Overnight stay at Sakura Guest House, room with
                                                                        attached bathroom</p>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 416 512">
                                                                        <path
                                                                            d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" />
                                                                    </svg>
                                                                    <p>Included standard meals (Breakfast + Lunch +
                                                                        Dinner)</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item mt-4">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            <span>
                                                                <!-- <i class="fa fa-map-marker-alt"></i> -->
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </span>
                                                            Day 1 Male/South Malé Atoll (1L, 1D)
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordiTwoxample">
                                                        <div class="accordion-body">
                                                            <div class="daily-info">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Distance</small>
                                                                    <h6>7.4 km / 4.6 miles</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" />
                                                                    </svg>
                                                                    <small class="d-block">Highest Altitude</small>
                                                                    <h6>3,440m / 11,285 ft</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 448 512">
                                                                        <path
                                                                            d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Duration</small>
                                                                    <h6>6 hours</h6>
                                                                </div>
                                                            </div>
                                                            <p>You will be met by airport representatives who will
                                                                transfer you to Male before going
                                                                to the waterfront to meet our boat captain and crew.
                                                                Once settled into our cabins,
                                                                we will depart. Cruise south for 2-3 hours through the
                                                                Vaadhoo Canal to a nearby
                                                                island in South Malé Atoll; probably Guraidhoo, a small
                                                                inhabited island where the
                                                                plan is to moor in (or just outside) the small harbour
                                                                for the first night on board.</p>
                                                            <div class="accomodation-info">
                                                                <div class="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z" />
                                                                    </svg>
                                                                    <p>Overnight stay at Sakura Guest House, room with
                                                                        attached bathroom</p>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 416 512">
                                                                        <path
                                                                            d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" />
                                                                    </svg>
                                                                    <p>Included standard meals (Breakfast + Lunch +
                                                                        Dinner)</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item mt-4">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            <span>
                                                                <!-- <i class="fa fa-map-marker-alt"></i> -->
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </span>
                                                            Day 1 Male/South Malé Atoll (1L, 1D)
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordiThreexample">
                                                        <div class="accordion-body">
                                                            <div class="daily-info">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Distance</small>
                                                                    <h6>7.4 km / 4.6 miles</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" />
                                                                    </svg>
                                                                    <small class="d-block">Highest Altitude</small>
                                                                    <h6>3,440m / 11,285 ft</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 448 512">
                                                                        <path
                                                                            d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Duration</small>
                                                                    <h6>6 hours</h6>
                                                                </div>
                                                            </div>
                                                            <p>You will be met by airport representatives who will
                                                                transfer you to Male before going
                                                                to the waterfront to meet our boat captain and crew.
                                                                Once settled into our cabins,
                                                                we will depart. Cruise south for 2-3 hours through the
                                                                Vaadhoo Canal to a nearby
                                                                island in South Malé Atoll; probably Guraidhoo, a small
                                                                inhabited island where the
                                                                plan is to moor in (or just outside) the small harbour
                                                                for the first night on board.</p>
                                                            <div class="accomodation-info">
                                                                <div class="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z" />
                                                                    </svg>
                                                                    <p>Overnight stay at Sakura Guest House, room with
                                                                        attached bathroom</p>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 416 512">
                                                                        <path
                                                                            d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" />
                                                                    </svg>
                                                                    <p>Included standard meals (Breakfast + Lunch +
                                                                        Dinner)</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item mt-4">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                            aria-expanded="false" aria-controls="collapseFour">
                                                            <span>
                                                                <!-- <i class="fa fa-map-marker-alt"></i> -->
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </span>
                                                            Day 1 Male/South Malé Atoll (1L, 1D)
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFour"
                                                        data-bs-parent="#accordiFourxample">
                                                        <div class="accordion-body">
                                                            <div class="daily-info">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Distance</small>
                                                                    <h6>7.4 km / 4.6 miles</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" />
                                                                    </svg>
                                                                    <small class="d-block">Highest Altitude</small>
                                                                    <h6>3,440m / 11,285 ft</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 448 512">
                                                                        <path
                                                                            d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Duration</small>
                                                                    <h6>6 hours</h6>
                                                                </div>
                                                            </div>
                                                            <p>You will be met by airport representatives who will
                                                                transfer you to Male before going
                                                                to the waterfront to meet our boat captain and crew.
                                                                Once settled into our cabins,
                                                                we will depart. Cruise south for 2-3 hours through the
                                                                Vaadhoo Canal to a nearby
                                                                island in South Malé Atoll; probably Guraidhoo, a small
                                                                inhabited island where the
                                                                plan is to moor in (or just outside) the small harbour
                                                                for the first night on board.</p>
                                                            <div class="accomodation-info">
                                                                <div class="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z" />
                                                                    </svg>
                                                                    <p>Overnight stay at Sakura Guest House, room with
                                                                        attached bathroom</p>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 416 512">
                                                                        <path
                                                                            d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" />
                                                                    </svg>
                                                                    <p>Included standard meals (Breakfast + Lunch +
                                                                        Dinner)</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item mt-4">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                            aria-expanded="false" aria-controls="collapseFive">
                                                            <span>
                                                                <!-- <i class="fa fa-map-marker-alt"></i> -->
                                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                            </span>
                                                            Day 1 Male/South Malé Atoll (1L, 1D)
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse"
                                                        aria-labelledby="headingFive"
                                                        data-bs-parent="#accordiFivexample">
                                                        <div class="accordion-body">
                                                            <div class="daily-info">
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Distance</small>
                                                                    <h6>7.4 km / 4.6 miles</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z" />
                                                                    </svg>
                                                                    <small class="d-block">Highest Altitude</small>
                                                                    <h6>3,440m / 11,285 ft</h6>
                                                                </div>
                                                                <div>
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 448 512">
                                                                        <path
                                                                            d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z" />
                                                                    </svg>
                                                                    <small class="d-block">Trek Duration</small>
                                                                    <h6>6 hours</h6>
                                                                </div>
                                                            </div>
                                                            <p>You will be met by airport representatives who will
                                                                transfer you to Male before going
                                                                to the waterfront to meet our boat captain and crew.
                                                                Once settled into our cabins,
                                                                we will depart. Cruise south for 2-3 hours through the
                                                                Vaadhoo Canal to a nearby
                                                                island in South Malé Atoll; probably Guraidhoo, a small
                                                                inhabited island where the
                                                                plan is to moor in (or just outside) the small harbour
                                                                for the first night on board.</p>
                                                            <div class="accomodation-info">
                                                                <div class="">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 640 512">
                                                                        <path
                                                                            d="M624 448h-24.68L359.54 117.75l53.41-73.55c5.19-7.15 3.61-17.16-3.54-22.35l-25.9-18.79c-7.15-5.19-17.15-3.61-22.35 3.55L320 63.3 278.83 6.6c-5.19-7.15-15.2-8.74-22.35-3.55l-25.88 18.8c-7.15 5.19-8.74 15.2-3.54 22.35l53.41 73.55L40.68 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h608c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM320 288l116.36 160H203.64L320 288z" />
                                                                    </svg>
                                                                    <p>Overnight stay at Sakura Guest House, room with
                                                                        attached bathroom</p>
                                                                </div>
                                                                <div class="mt-3">
                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 416 512">
                                                                        <path
                                                                            d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z" />
                                                                    </svg>
                                                                    <p>Included standard meals (Breakfast + Lunch +
                                                                        Dinner)</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>

                            <div>
                                <section id="costing" class="sidebar-box bg-white section-border">
                                    <div class="sidebar-box-heading fs-5 p-4">
                                        <img src="../assets/images/tour-details-images/cost-icon.png" alt="" />Costing
                                    </div>
                                    <div class="siderbar-box-body p-4">
                                        <h5 class="text-success">What is included in the tour price?</h5>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-check-circle ms-4 me-3 text-success fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-success">(2 airport transfers for international
                                                    arrival and international departure)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-check-circle ms-4 me-3 text-success fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-success">(Ax Oximeter will help to find Oxygen
                                                    saturation level in your body, it's important to find with altitude
                                                    sickness)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-check-circle ms-4 me-3 text-success fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-success">(2 airport transfers for international
                                                    arrival and international departure)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-check-circle ms-4 me-3 text-success fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-success">(Ax Oximeter will help to find Oxygen
                                                    saturation level in your body, it's important to find with altitude
                                                    sickness)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-check-circle ms-4 me-3 text-success fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-success">(2 airport transfers for international
                                                    arrival and international departure)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-check-circle ms-4 me-3 text-success fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-success">(2 airport transfers for international
                                                    arrival and international departure)</small>
                                            </div>
                                        </div>
                                        <h5 class="text-danger mt-5">What is included in the tour price?</h5>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-x-circle ms-4 me-3 text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-danger">(Nepal via fees; 15 days - USD 30, 30 Days -
                                                    USD 50, 90 Days - USD 125 | Visa extension - USD 3 per day, Late
                                                    fine - USD 5 per day)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-x-circle ms-4 me-3 text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-danger">(Costs are not refundable and transferable in
                                                    any mean if you leave the trek and want to return from the trek
                                                    earlier than scheduled)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-x-circle ms-4 me-3 text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-danger">(It is not included also and late departures
                                                    than scheduled itinerary whether it's voluntarily or due to
                                                    unforeseen circumstances)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-x-circle ms-4 me-3 text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-danger">(Ax Oximeter will help to find Oxygen
                                                    saturation level in your body, it's important to find with altitude
                                                    sickness)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-x-circle ms-4 me-3 text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-danger">(2 airport transfers for international
                                                    arrival and international departure)</small>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center my-3">
                                            <div>
                                                <i class="bi bi-x-circle ms-4 me-3 text-danger fs-4"></i>
                                            </div>
                                            <div>
                                                <p class="m-0">Airport pickup and drop services on a private vehicle
                                                    including
                                                    before and after the trek</p>
                                                <small class="text-danger">(Please ask us if you are confused about any
                                                    services)</small>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section id="map" class="sidebar-box bg-white section-border">
                                    <div
                                        class="sidebar-box-heading fs-5 p-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <img src="../assets/images/tour-details-images/marker-icon.png" alt="" />Map
                                        </div>
                                        <div>
                                            <button><i class="bi bi-file-earmark-pdf"></i> Download Map</button>
                                        </div>
                                    </div>
                                    <div class="siderbar-box-body p-4 position-relative">
                                        <div class="zoom-buttons">
                                            <button data-zoom-up><i class="fa fa-search-plus"
                                                    aria-hidden="true"></i></button>
                                            <button data-zoom-down><i class="fa fa-search-minus"
                                                    aria-hidden="true"></i></button>
                                        </div>
                                        <div class="embed-responsive embed-responsive-4by3 section-border">
                                            <div id="myWindow" class="embed-responsive-item">
                                                <img id="myContent" src="../assets/images/tour-details-images/map.jpg"
                                                    alt="" />

                                            </div>
                                        </div>

                                        <!-- <div class="custom-modules">
                                            <div class="custom-out-zoomer">-</div>
                                            <div class="custom-slider"></div>
                                            <div class="custom-in-zoomer">+</div>
                                        </div> -->
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section id="gears" class="sidebar-box bg-white section-border">
                                    <div
                                        class="sidebar-box-heading fs-5 p-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <img src="../assets/images/tour-details-images/gear-icon.png" alt="" />Gears
                                        </div>
                                        <div>
                                            <button><i class="bi bi-file-earmark-pdf"></i> Download Gear List</button>
                                        </div>
                                    </div>
                                    <div class="siderbar-box-body p-4">
                                        <ul>
                                            <li>Waterproof trekking boots / Flip Flops</li>
                                            <li>Long sleeve shirts</li>
                                            <li>Water bottles or camel bag /
                                                purification or camel bag</li>
                                            <li>Waterproof trekking boots / Flip Flops</li>
                                            <li>Long sleeve shirts</li>
                                            <li>Water bottles or camel bag /
                                                purification or camel bag</li>

                                            <li>Socks / Undergarments</li>
                                            <li>Waterproof trekking boots / Flip Flops</li>
                                            <li>Long sleeve shirts</li>
                                            <li>Water bottles or camel bag</li>
                                            <li>Long sleeve shirts</li>
                                            <li>Waterproof trekking boots / Flip Flops</li>
                                            <li>Long sleeve shirts</li>
                                            <li>Water bottles</li>
                                            <li>Long sleeve shirts</li>
                                            <li>Waterproof trekking boots / Flip Flops</li>
                                            <li>Long sleeve shirts</li>
                                            <li>WWater bottles or camel bag /
                                                purification or camel bag</li>
                                            <li>Long sleeve shirts</li>
                                            <li>WWaterproof trekking boots / Flip Flops</li>
                                            <li>Long sleeve shirts</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section id="faq" class="sidebar-box bg-white section-border">
                                    <div
                                        class="sidebar-box-heading fs-5 p-3 px-4 d-flex justify-content-between align-items-center">
                                        <div>
                                            <img src="../assets/images/tour-details-images/question-icon.png"
                                                alt="" />FAQ
                                        </div>
                                        <div>
                                            <button onclick="expandAll(this)">Expand All</button>
                                        </div>
                                    </div>
                                    <div class="siderbar-box-body p-4">
                                        <div class="accordion faqs mt-4" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                        How to analyze marketing strategies?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show"
                                                    aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        Woe facilisis arbauitoc moderatius id. Uis ei rationibus
                                                        definiebas, eu qui
                                                        purto zril laoreet. Ae arror omnium
                                                        interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit
                                                        amet, te tidens
                                                        qloriatur temporibus qui. Etiam rhoncus.
                                                        Maecenas tempus, tellus aget. Woe facilisis arbauitoc moderatius
                                                        id. Uis ei
                                                        rationibus definiebas, eu qui purto zril
                                                        laoreet. Ae arror omnium interpretaris pr.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion mt-4" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                            How can I customize projects to add members?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse"
                                                        aria-labelledby="headingTwo" data-bs-parent="#accordiTwoxample">
                                                        <div class="accordion-body">
                                                            Woe facilisis arbauitoc moderatius id. Uis ei rationibus
                                                            definiebas, eu qui
                                                            purto zril laoreet. Ae arror omnium
                                                            interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit
                                                            amet, te tidens
                                                            qloriatur temporibus qui. Etiam rhoncus.
                                                            Maecenas tempus, tellus aget. Woe facilisis arbauitoc
                                                            moderatius id. Uis ei
                                                            rationibus definiebas, eu qui purto zril
                                                            laoreet. Ae arror omnium interpretaris pr.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion mt-4" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">
                                                            Why you respond so much late?
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse"
                                                        aria-labelledby="headingThree"
                                                        data-bs-parent="#accordiThreexample">
                                                        <div class="accordion-body">
                                                            Woe facilisis arbauitoc moderatius id. Uis ei rationibus
                                                            definiebas, eu qui
                                                            purto zril laoreet. Ae arror omnium
                                                            interpretaris pro, alia illum ea vim. Lorem ipsum dolor sit
                                                            amet, te tidens
                                                            qloriatur temporibus qui. Etiam rhoncus.
                                                            Maecenas tempus, tellus aget. Woe facilisis arbauitoc
                                                            moderatius id. Uis ei
                                                            rationibus definiebas, eu qui purto zril
                                                            laoreet. Ae arror omnium interpretaris pr.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section id="support" class="sidebar-box bg-white section-border">
                                    <div class="sidebar-box-heading fs-5 p-4">
                                        <img src="../assets/images/tour-details-images/support-icon.png" alt="" />Support
                                    </div>
                                    <div class="siderbar-box-body p-4">
                                        <small><strong class="fs-6">Meals and Accommodation:</strong>
                                            Best Season for the Trek:
                                            Langtang Circuit Trekking is complete tea house based route hence we will be
                                            sleeping and eating in
                                            the lodges. However, in Kathmandu we provide 3 star category hotel
                                            accommodation with only breakfast. The lodges on the trek will
                                            be mostly shared bathroom / shared toilet while in 1/2 places we may provide
                                            you rooms with private toilet (depending on
                                            availability).</small>
                                        <br />
                                        <br />
                                        <small>The meals on the trek will be mostly locally prepared using local
                                            ingredients
                                            most of the time however Kathmandu offers a wide
                                            selection of meals in basic to high standard luxury lounges. On the trek,
                                            the number of meal items will be limited to a small number
                                            and the tastes might not be similar to the actual item; pizza may not taste
                                            like pizza.</small>
                                        <br />
                                        <br />
                                        <small><strong class="fs-6">Best Season for the Trek:</strong>
                                            Spring and autumn are considered better for Langtang Gosainkunda Helambu
                                            Trek. The best time to trek
                                            is usually during the dry season, from September to early December and early
                                            March to early June. In the winter and spring, there is a
                                            chance of snow on Gosainkunda Pass and Tserko RI might be inaccessible,
                                            while rainfall can make parts of the trail impassable in
                                            monsoon even though the trek can be tried in the monsoon / rainy season.
                                            Autumn ensures a clear and dry high-mountain pass with
                                            a good chance of a clear view towering Himalayan peaks..</small>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 p-0">
                    <div class="siderbar">
                        <div class="sidebar-box bg-white section-border mb-5">
                            <div class="sidebar-box-heading fs-5 p-4">Need help booking ?</div>
                            <div class="siderbar-box-body p-4 px-5">
                                <button class="inquiry-button" onclick="toggleInquiryModal()">Quick Inquiry</button>
                                <button class="inquiry-button mt-3" onclick="toggleModal()">Customize Your Trip</button>
                            </div>
                        </div>
                        <div class="sidebar-box bg-white section-border mb-5">
                            <div class="sidebar-box-heading fs-5 p-4">Why book with us ?</div>
                            <div class="siderbar-box-body p-4">
                                <div class="d-flex mb-2">
                                    <img src="../assets/images/rates-icon.png" alt="" />
                                    <h6 class="m-0 ms-2 primarycolor">Best Rates</h6>
                                </div>
                                <div class="mb-4">
                                    <small> Get best rates, or get a refund.<br />
                                        No booking fees. Save money
                                    </small>
                                </div>
                                <div class="d-flex mb-2">
                                    <img src="../assets/images/selection-icon.png" alt="" />
                                    <h6 class="m-0 ms-2 primarycolor">Largest Selection</h6>
                                </div>
                                <div class="mb-4">
                                    <small>140,000+ hotels worldwide</small><br />
                                    <small>130+ airlines</small><br />
                                    <small>Over 3 million guest reviews</small>
                                </div>
                                <div class="d-flex mb-2">
                                    <img src="../assets/images/24-7-icon.png" alt="" />
                                    <h6 class="m-0 ms-2 primarycolor">We're Always Here</h6>
                                </div>
                                <div class="">
                                    <small>Call or email us, anytime <br />
                                        Get 24-hour support before, during, and
                                        after your trip
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-box bg-white section-border mb-5">
                            <div class="sidebar-box-heading fs-5 p-4">Recommended Tours</div>
                            <div class="siderbar-box-body p-4">
                                <div class="recommended-tours-card d-flex mb-4">
                                    <div class="tour-image">
                                        <img src="../assets/images/tour-1.jpg" alt="" />
                                        <div class="best-seller">
                                            <p>Best Seller</p>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="tour-details p-2">
                                        <h6 class="m-0 pe-3">Mount Kilimanjaro,
                                            Mme Route</h6>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <div class="tour-review">
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <small>(1 review)</small>
                                            </div>
                                            <div class="tour-price text-center">
                                                <small class="m-2 d-block">From</small>
                                                <h6 class="primarycolor m-0">$350</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="recommended-tours-card d-flex mb-4">
                                    <div class="tour-image">
                                        <img src="../assets/images/tour-2.jpg" alt="" />
                                        <div class="best-seller">
                                            <p>Best Seller</p>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="tour-details p-2">
                                        <h6 class="m-0 pe-3">Mount Kilimanjaro,
                                            Mme Route</h6>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <div class="tour-review">
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <small>(1 review)</small>
                                            </div>
                                            <div class="tour-price text-center">
                                                <small class="m-2 d-block">From</small>
                                                <h6 class="primarycolor m-0">$350</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="recommended-tours-card d-flex mb-4">
                                    <div class="tour-image">
                                        <img src="../assets/images/tour-3.jpg" alt="" />
                                        <div class="best-seller">
                                            <p>Best Seller</p>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="tour-details p-2">
                                        <h6 class="m-0 pe-3">Mount Kilimanjaro,
                                            Mme Route</h6>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <div class="tour-review">
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <small>(1 review)</small>
                                            </div>
                                            <div class="tour-price text-center">
                                                <small class="m-2 d-block">From</small>
                                                <h6 class="primarycolor m-0">$350</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="recommended-tours-card d-flex mb-4">
                                    <div class="tour-image">
                                        <img src="../assets/images/tour-1.jpg" alt="" />
                                        <div class="best-seller">
                                            <p>Best Seller</p>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="tour-details p-2">
                                        <h6 class="m-0 pe-3">Mount Kilimanjaro,
                                            Mme Route</h6>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <div class="tour-review">
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <small>(1 review)</small>
                                            </div>
                                            <div class="tour-price text-center">
                                                <small class="m-2 d-block">From</small>
                                                <h6 class="primarycolor m-0">$350</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="recommended-tours-card d-flex">
                                    <div class="tour-image">
                                        <img src="../assets/images/tour-3.jpg" alt="" />
                                        <div class="best-seller">
                                            <p>Best Seller</p>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div class="tour-details p-2">
                                        <h6 class="m-0 pe-3">Mount Kilimanjaro,
                                            Mme Route</h6>
                                        <div class="d-flex justify-content-between align-items-end">
                                            <div class="tour-review">
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <i class="fa fa-star-o primarycolor" aria-hidden="true"></i>
                                                <small>(1 review)</small>
                                            </div>
                                            <div class="tour-price text-center">
                                                <small class="m-2 d-block">From</small>
                                                <h6 class="primarycolor m-0">$350</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-box bg-white section-border mb-5">
                            <div class="sidebar-box-heading fs-5 p-4">24/7 Customer Support</div>
                            <div class="siderbar-box-body p-4">
                                <div class="d-flex align-items-center mb-2">
                                    <img src="../assets/images/call-icon.png" alt="" />
                                    <small class="m-0 ms-2">(01)234-567-8910</small>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <img src="../assets/images/mail-icon-small.png" alt="" />
                                    <small class="m-0 ms-2">Support@gmail.com</small>
                                </div>
                                <div class="d-flex align-items-center mb-2">
                                    <img src="../assets/images/clock-icon.png" alt="" />
                                    <small class="m-0 ms-2"><b>08:00am : 05:30 pm</b> (Mon to Sat)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-0">
                <div class="col-12 p-0">
                    <div class="sidebar-box bg-white section-border reviews-section-main">
                        <div class="sidebar-box-heading fs-5 d-flex justify-content-between align-items-center">
                            <div class="ps-4">
                                <img src="../assets/images/tour-details-images/review-icon.png"
                                    style="height: 25px; margin-right: 15px;                                  "
                                    alt="" /> Reviews
                            </div>
                            <div>
                                <span class="primarycolor">Sort :</span>
                                <button class="fw-bold">Rating <i class="fa fa-sort-amount-desc"
                                        aria-hidden="true"></i></button>
                                <button class="fw-bold active">Date <i class="fa fa-sort-amount-desc"
                                        aria-hidden="true"></i></button>
                            </div>
                        </div>
                        <div class="siderbar-box-body reviews-grid">
                            <div class="row m-0 p-5">
                                <div class="col-4">
                                    <div class="review-card shadow section-border p-4 py-4">
                                        <div class="review-user-info">
                                            <div>
                                                <img src="../assets/images/tour-details-images/review-avatar.png"
                                                    alt="" />
                                                <div class="user-details">
                                                    <h5 class="m-0">Kim Niddery</h5>
                                                    <div>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>- London</p>
                                        </div>
                                        <small class="d-block my-4">Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company. Excellent communication.</small>
                                        <div class="d-flex justify-content-between">
                                            <button>Read more</button>
                                            <div>
                                                <img src="../assets/images/clock-icon.png" alt="" class="me-2" />
                                                <small class="fst-italic">May 5, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-card shadow section-border p-4 py-4 mt-4">
                                        <div class="review-user-info">
                                            <div>
                                                <img src="../assets/images/tour-details-images/review-avatar.png"
                                                    alt="" />
                                                <div class="user-details">
                                                    <h5 class="m-0">Kim Niddery</h5>
                                                    <div>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>- London</p>
                                        </div>
                                        <small class="d-block my-4">Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company. Excellent communication.
                                            Easy and simple with a great value. I would definitely
                                            use them again!
                                            <br /><br />
                                            Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company.<br /><br />
                                            Excellent communication. Easy and simple with a
                                            great value. I would definitely use them again</small>
                                        <div class="d-flex justify-content-between">
                                            <button>Read more</button>
                                            <div>
                                                <img src="../assets/images/clock-icon.png" alt="" class="me-2" />
                                                <small class="fst-italic">May 5, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="review-card shadow section-border p-4 py-4">
                                        <div class="review-user-info">
                                            <div>
                                                <img src="../assets/images/tour-details-images/review-avatar.png"
                                                    alt="" />
                                                <div class="user-details">
                                                    <h5 class="m-0">Kim Niddery</h5>
                                                    <div>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>- London</p>
                                        </div>
                                        <small class="d-block my-4">Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company. Excellent communication.
                                            Easy and simple with a great value. I would definitely
                                            use them again!
                                            <br /><br />
                                            Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company.<br /><br />
                                            Excellent communication. Easy and simple with a
                                            great value. I would definitely use them again</small>
                                        <div class="d-flex justify-content-between">
                                            <button>Read more</button>
                                            <div>
                                                <img src="../assets/images/clock-icon.png" alt="" class="me-2" />
                                                <small class="fst-italic">May 5, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-card shadow section-border p-4 py-4 mt-4">
                                        <div class="review-user-info">
                                            <div>
                                                <img src="../assets/images/tour-details-images/review-avatar.png"
                                                    alt="" />
                                                <div class="user-details">
                                                    <h5 class="m-0">Kim Niddery</h5>
                                                    <div>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>- London</p>
                                        </div>
                                        <small class="d-block my-4">Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company. Excellent communication.</small>
                                        <div class="d-flex justify-content-between">
                                            <button>Read more</button>
                                            <div>
                                                <img src="../assets/images/clock-icon.png" alt="" class="me-2" />
                                                <small class="fst-italic">May 5, 2020</small>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-4">
                                    <div class="review-card shadow section-border p-4 py-4">
                                        <div class="review-user-info">
                                            <div>
                                                <img src="../assets/images/tour-details-images/review-avatar.png"
                                                    alt="" />
                                                <div class="user-details">
                                                    <h5 class="m-0">Kim Niddery</h5>
                                                    <div>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>- London</p>
                                        </div>
                                        <small class="d-block my-4">Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company. Excellent communication.</small>
                                        <div class="d-flex justify-content-between">
                                            <button>Read more</button>
                                            <div>
                                                <img src="../assets/images/clock-icon.png" alt="" class="me-2" />
                                                <small class="fst-italic">May 5, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-card shadow section-border p-4 py-4 mt-4">
                                        <div class="review-user-info">
                                            <div>
                                                <img src="../assets/images/tour-details-images/review-avatar.png"
                                                    alt="" />
                                                <div class="user-details">
                                                    <h5 class="m-0">Kim Niddery</h5>
                                                    <div>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                        <i class="fa fa-star primarycolor" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>- London</p>
                                        </div>
                                        <small class="d-block my-4">Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company. Excellent communication.
                                            Easy and simple with a great value. I would definitely
                                            use them again!
                                            <br /><br />
                                            Great company. Excellent communication. Easy and
                                            simple with a great value. I would definitely use them
                                            again!Great company.<br /><br />
                                            Excellent communication. Easy and simple with a
                                            great value. I would definitely use them again</small>
                                        <div class="d-flex justify-content-between">
                                            <button>Read more</button>
                                            <div>
                                                <img src="../assets/images/clock-icon.png" alt="" class="me-2" />
                                                <small class="fst-italic">May 5, 2020</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-5 pt-4 text-center">
                                <button class="load-more-button"><i class="fa fa-spinner" aria-hidden="true"></i> Load
                                    More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
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