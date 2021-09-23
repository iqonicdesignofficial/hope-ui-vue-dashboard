<template>
    <span class="uisheet screen-darken" ></span>
        <div id="main" class="header" :style= "`background: url(${require('@/assets/images/dashboard/top-image.jpg')}); background-size: cover; background-repeat: no-repeat; height: 100vh;position: relative;`">
            <div class="main-img">
            <div class="container">
                <svg width="150" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-0.423828" y="34.5762" width="50" height="7.14286" rx="3.57143" transform="rotate(-45 -0.423828 34.5762)" fill="white"/>
                    <rect x="14.7295" y="49.7266" width="50" height="7.14286" rx="3.57143" transform="rotate(-45 14.7295 49.7266)" fill="white"/>
                    <rect x="19.7432" y="29.4902" width="28.5714" height="7.14286" rx="3.57143" transform="rotate(45 19.7432 29.4902)" fill="white"/>
                    <rect x="19.7783" y="-0.779297" width="50" height="7.14286" rx="3.57143" transform="rotate(45 19.7783 -0.779297)" fill="white"/>
                </svg>
                <h1 class="my-4">
                    <span>Hope UI - Design System</span>
                </h1>
                <h4 class="text-white mb-5">Production ready FREE Open Source <b>Dashboard UI Kit</b> and <b>Design System</b>.</h4>
                <div class="d-flex justify-content-center align-items-center">
                <div>
                     <router-link target="_blank" class="btn btn-light bg-white"  :to="{name: 'default.dashboard'}">Dashboard Demo</router-link>
                </div>
                <div class="ms-3">
                    <a class="btn btn-light bg-white" href="#components">UI KIT</a>
                </div>
            </div>
        </div>
            </div>
            <div class="container">
            <nav class="nav navbar navbar-expand-lg navbar-light top-1 rounded">
                <div class="container-fluid">
                    <a class="navbar-brand mx-2" href="#">
                        <svg width="30" class="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor"></rect>
                            <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor"></rect>
                            <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor"></rect>
                            <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor"></rect>
                        </svg>
                        <h5 class="logo-title">Hope UI</h5>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-2" aria-controls="navbar-2" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar-2">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-start">
                            <li class="nav-item me-3">
                                <a class="nav-link" aria-current="page" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/"  target="_blank">Documentation</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-success" aria-current="page" href="https://iqonic.design/product/admin-templates/hope-ui-admin-free-open-source-bootstrap-admin-template/" target="_blank">
                                    <svg width="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z" fill="currentColor"></path>
                                    </svg>
                                    Download
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
             </div>
        </div>
        <div class=" body-class-1 container">
            <aside class="mobile-offcanvas bd-aside card iq-document-card sticky-xl-top text-muted align-self-start mb-5 mt-n5" id="left-side-bar">
                <div class="offcanvas-header p-0">
                    <button class="btn-close float-end"></button>
                </div>
                <h2 class="h6 pb-2 border-bottom">On this page</h2>
                <nav className="small" id="elements-section">
                    <ul class="list-unstyled mb-0">
                        <li class="mt-2">
                            <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#components-collapse" aria-controls="components-collapse">Components</button>
                            <ul className="list-unstyled ps-3 collapse show" id="components-collapse" style="">
                                <li><a class="nav-link d-inline-flex align-items-center rounded"  href="#accordion">Accordion</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#alerts">Alerts</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#badge">Badge</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#breadcrumb">Breadcrumb</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#buttons">Buttons</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#button-group">Button Group</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#calendar">Calendar</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#card">Card</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#carousel">Carousel</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#dropdowns">Dropdowns</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#list-group">List Group</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#modal">Modal</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#navs">Navs</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#navbar">Navbar</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#off-canvas">Off Canvas</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#pagination">Pagination</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#popovers">Popovers</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#progress">Progress</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#scrollspy">Scrollspy</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#spinners">Spinners</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#toasts">Toasts</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#tooltips">Tooltips</a></li>
                            </ul>
                        </li>
                        <li class="my-2">
                            <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#forms-collapse" aria-controls="forms-collapse">Forms</button>
                            <ul class="list-unstyled ps-3 collapse" id="forms-collapse" href="#forms" style="">
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#overview">Overview</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#disabled-forms">Disabled Forms</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#sizing">Sizing</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#input-group">Input Group</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#a-form-control">Alertnate Input</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#floating-labels">Floating Labels</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#a-floating-labels">Alertnate Float Labels</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#toggle-btn">Toggle Button</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#validation">Validation</a></li>
                            </ul>
                        </li>
                        <li class="mb-2">
                            <button class="btn d-inline-flex align-items-center collapsed" data-bs-toggle="collapse" aria-expanded="false" data-bs-target="#contents-collapse" aria-controls="contents-collapse">Contents</button>
                            <ul class="list-unstyled ps-3 collapse" id="contents-collapse" href="#content" style="">
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#typography">Typography</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#images">Images</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#tables">Tables</a></li>
                                <li><a class="nav-link d-inline-flex align-items-center rounded" href="#figures">Figures</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div class="bd-cheatsheet container-fluid bg-trasprent mt-n5">
                <section id="components">
                    <div class="iq-side-content sticky-xl-top">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="fw-bold">
                                    Components
                                </h4>
                            </div>
                        </div>
                    </div>
                    <article id="accordion" data-bs-spy="scroll" data-bs-target="#elements-section" data-bs-offset="0" tabindex="0">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Accordion</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Accordian" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card iq-doc-head">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-accordion-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-accordion-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-accordion-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <accordion id="accordionExample">
                                                <accordion-header id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Accordion Item #1
                                                    </button>
                                                </accordion-header>
                                                <accordion-body id="collapseOne" bodyClass="collapse show" ariaLabelledby="headingOne" parentId="#accordionExample">
                                                    <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </accordion-body>
                                                <accordion-header id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Accordion Item #2
                                                    </button>
                                                </accordion-header>
                                                <accordion-body id="collapseTwo" ariaLabelledby="headingTwo" parentId="#accordionExample">
                                                    <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </accordion-body>
                                                <accordion-header id="headingThree">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Accordion Item #3
                                                    </button>
                                                </accordion-header>
                                                <accordion-body id="collapseThree" ariaLabelledby="headingThree" parentId="#accordionExample">
                                                    <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                                </accordion-body>
                                            </accordion>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-accordion-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;accordion id=&#x22;accordionExample&#x22;&#x3E;
                    &#x3C;accordion-header id=&#x22;headingOne&#x22;&#x3E;
                        &#x3C;button class=&#x22;accordion-button&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;collapse&#x22; data-bs-target=&#x22;#collapseOne&#x22; aria-expanded=&#x22;true&#x22; aria-controls=&#x22;collapseOne&#x22;&#x3E;
                            Accordion Item #1
                        &#x3C;/button&#x3E;
                    &#x3C;/accordion-header&#x3E;
                    &#x3C;accordion-body id=&#x22;collapseOne&#x22; bodyClass=&#x22;collapse show&#x22; ariaLabelledby=&#x22;headingOne&#x22; parentId=&#x22;#accordionExample&#x22;&#x3E;
                        &#x3C;strong&#x3E;This is the first item&#x27;s accordion body.&#x3C;/strong&#x3E; It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&#x27;s also worth noting that just about any HTML can go within the &#x3C;code&#x3E;.accordion-body&#x3C;/code&#x3E;, though the transition does limit overflow.
                    &#x3C;/accordion-body&#x3E;
                    &#x3C;accordion-header id=&#x22;headingTwo&#x22;&#x3E;
                        &#x3C;button class=&#x22;accordion-button collapsed&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;collapse&#x22; data-bs-target=&#x22;#collapseTwo&#x22; aria-expanded=&#x22;false&#x22; aria-controls=&#x22;collapseTwo&#x22;&#x3E;
                            Accordion Item #2
                        &#x3C;/button&#x3E;
                    &#x3C;/accordion-header&#x3E;
                    &#x3C;accordion-body id=&#x22;collapseTwo&#x22; ariaLabelledby=&#x22;headingTwo&#x22; parentId=&#x22;#accordionExample&#x22;&#x3E;
                        &#x3C;strong&#x3E;This is the first item&#x27;s accordion body.&#x3C;/strong&#x3E; It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&#x27;s also worth noting that just about any HTML can go within the &#x3C;code&#x3E;.accordion-body&#x3C;/code&#x3E;, though the transition does limit overflow.
                    &#x3C;/accordion-body&#x3E;
                    &#x3C;accordion-header id=&#x22;headingThree&#x22;&#x3E;
                        &#x3C;button class=&#x22;accordion-button collapsed&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;collapse&#x22; data-bs-target=&#x22;#collapseThree&#x22; aria-expanded=&#x22;false&#x22; aria-controls=&#x22;collapseThree&#x22;&#x3E;
                            Accordion Item #3
                        &#x3C;/button&#x3E;
                    &#x3C;/accordion-header&#x3E;
                    &#x3C;accordion-body id=&#x22;collapseThree&#x22; ariaLabelledby=&#x22;headingThree&#x22; parentId=&#x22;#accordionExample&#x22;&#x3E;
                        &#x3C;strong&#x3E;This is the first item&#x27;s accordion body.&#x3C;/strong&#x3E; It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&#x27;s also worth noting that just about any HTML can go within the &#x3C;code&#x3E;.accordion-body&#x3C;/code&#x3E;, though the transition does limit overflow.
                    &#x3C;/accordion-body&#x3E;
                &#x3C;/accordion&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="alerts" data-bs-spy="scroll" data-bs-target="#elements-section" data-bs-offset="0" tabindex="0">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Alerts</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Alert" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-alert-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-alert-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-alert-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <alert variant="primary" :isdismissable="true" className="alert-solid fade show">
                                                A simple primary alert with
                                                <a href="#" class="alert-link">an example link</a>Give it a click if you like.
                                            </alert>
                                        </div>
                                        <div class="bd-example">
                                            <alert variant="primary" :isdismissable="true" className="fade show">
                                                A simple primary alert with
                                                <a href="#" class="alert-link">an example link</a>Give it a click if you like.
                                            </alert>
                                        </div>
                                        <div class="bd-example">
                                            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                                                <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </symbol>
                                                <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                                </symbol>
                                                <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </symbol>
                                            </svg>
                                            <div class="alert alert-success d-flex align-items-center" role="alert">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#check-circle-fill" />
                                                </svg>
                                                <div>
                                                    An example success alert with an icon
                                                </div>
                                            </div>
                                            <div class="alert alert-warning d-flex align-items-center" role="alert">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#exclamation-triangle-fill" />
                                                </svg>
                                                <div>
                                                    An example warning alert with an icon
                                                </div>
                                            </div>
                                            <div class="alert alert-danger d-flex align-items-center" role="alert">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#exclamation-triangle-fill" />
                                                </svg>
                                                <div>
                                                    An example danger alert with an icon
                                                </div>
                                            </div>
                                            <alert variant="primary" className="d-flex align-items-center fade show">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#info-fill" />
                                                </svg>
                                                <div>
                                                    An example alert with an icon
                                                </div>
                                            </alert>
                                            <alert variant="success" className="d-flex align-items-center fade show">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#check-circle-fill" />
                                                </svg>
                                                <div>
                                                    An example success alert with an icon
                                                </div>
                                            </alert>
                                            <alert variant="warning" className="d-flex align-items-center fade show">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#exclamation-triangle-fill" />
                                                </svg>
                                                <div>
                                                    An example warning alert with an icon
                                                </div>
                                            </alert>
                                            <alert variant="danger" className="d-flex align-items-center fade show">
                                                <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                                                    <use xlink:href="#exclamation-triangle-fill" />
                                                </svg>
                                                <div>
                                                    An example danger alert with an icon
                                                </div>
                                            </alert>
                                        </div>
                                        <div class="bd-example">
                                            <alert variant="success" :isdismissable="true" className="alert-left fade show mb-3" buttonClass="btn-close-white">
                                                <span> This is a success alert—check it out!</span>
                                            </alert>
                                            <alert variant="info" :isdismissable="true" className="alert-top fade show mb-3" buttonClass="btn-close-white">
                                                <span> This is a info alert—check it out!</span>
                                            </alert>
                                            <alert variant="warning" :isdismissable="true" className="alert-right fade show mb-3" buttonClass="btn-close-white">
                                                <span> This is a warning alert—check it out!</span>
                                            </alert>
                                            <alert variant="danger" :isdismissable="true" className="alert-bottom fade show" buttonClass="btn-close-white">
                                                <span> This is a danger alert—check it out!</span>
                                            </alert>
                                        </div>
                                        <div class="bd-example">
                                            <alert variant="warning" :isdismissable="true" className="rounded-0 fade show">
                                                <span>This is a warning alert—check it out!</span>
                                            </alert>
                                            <alert variant="warning" :isdismissable="true" className="alert-solid rounded-0 fade show" buttonClass="btn-close-white">
                                                <span>This is a warning alert—check it out!</span>
                                            </alert>
                                        </div>
                                        <div class="bd-example">
                                            <alert variant="success" className="mb-0">
                                                <h4 class="alert-heading">Well done!</h4>
                                                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                                <hr>
                                                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                            </alert>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-alert-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">   &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;alert variant=&#x22;primary&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;alert-solid fade show&#x22;&#x3E;
                    A simple primary alert with
                    &#x3C;a href=&#x22;#&#x22; class=&#x22;alert-link&#x22;&#x3E;an example link&#x3C;/a&#x3E;Give it a click if you like.
                &#x3C;/alert&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;alert variant=&#x22;primary&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;fade show&#x22;&#x3E;
                    A simple primary alert with
                    &#x3C;a href=&#x22;#&#x22; class=&#x22;alert-link&#x22;&#x3E;an example link&#x3C;/a&#x3E;Give it a click if you like.
                &#x3C;/alert&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;svg xmlns=&#x22;http://www.w3.org/2000/svg&#x22; style=&#x22;display: none;&#x22;&#x3E;
                    &#x3C;symbol id=&#x22;check-circle-fill&#x22; fill=&#x22;currentColor&#x22; viewBox=&#x22;0 0 16 16&#x22;&#x3E;
                        &#x3C;path d=&#x22;M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z&#x22; /&#x3E;
                    &#x3C;/symbol&#x3E;
                    &#x3C;symbol id=&#x22;info-fill&#x22; fill=&#x22;currentColor&#x22; viewBox=&#x22;0 0 16 16&#x22;&#x3E;
                        &#x3C;path d=&#x22;M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z&#x22; /&#x3E;
                    &#x3C;/symbol&#x3E;
                    &#x3C;symbol id=&#x22;exclamation-triangle-fill&#x22; fill=&#x22;currentColor&#x22; viewBox=&#x22;0 0 16 16&#x22;&#x3E;
                        &#x3C;path d=&#x22;M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z&#x22; /&#x3E;
                    &#x3C;/symbol&#x3E;
                &#x3C;/svg&#x3E;
                &#x3C;div class=&#x22;alert alert-success d-flex align-items-center&#x22; role=&#x22;alert&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#check-circle-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example success alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;alert alert-warning d-flex align-items-center&#x22; role=&#x22;alert&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#exclamation-triangle-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example warning alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;alert alert-danger d-flex align-items-center&#x22; role=&#x22;alert&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#exclamation-triangle-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example danger alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;alert variant=&#x22;primary&#x22; className=&#x22;d-flex align-items-center fade show&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#info-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;success&#x22; className=&#x22;d-flex align-items-center fade show&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#check-circle-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example success alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;warning&#x22; className=&#x22;d-flex align-items-center fade show&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#exclamation-triangle-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example warning alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;danger&#x22; className=&#x22;d-flex align-items-center fade show&#x22;&#x3E;
                    &#x3C;svg class=&#x22;bi flex-shrink-0 me-2&#x22; width=&#x22;24&#x22; height=&#x22;24&#x22;&#x3E;
                        &#x3C;use xlink:href=&#x22;#exclamation-triangle-fill&#x22; /&#x3E;
                    &#x3C;/svg&#x3E;
                    &#x3C;div&#x3E;
                        An example danger alert with an icon
                    &#x3C;/div&#x3E;
                &#x3C;/alert&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;alert variant=&#x22;success&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;alert-left fade show mb-3&#x22; buttonClass=&#x22;btn-close-white&#x22;&#x3E;
                    &#x3C;span&#x3E; This is a success alert&#x2014;check it out!&#x3C;/span&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;info&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;alert-top fade show mb-3&#x22; buttonClass=&#x22;btn-close-white&#x22;&#x3E;
                    &#x3C;span&#x3E; This is a info alert&#x2014;check it out!&#x3C;/span&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;warning&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;alert-right fade show mb-3&#x22; buttonClass=&#x22;btn-close-white&#x22;&#x3E;
                    &#x3C;span&#x3E; This is a warning alert&#x2014;check it out!&#x3C;/span&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;danger&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;alert-bottom fade show&#x22; buttonClass=&#x22;btn-close-white&#x22;&#x3E;
                    &#x3C;span&#x3E; This is a danger alert&#x2014;check it out!&#x3C;/span&#x3E;
                &#x3C;/alert&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;alert variant=&#x22;warning&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;rounded-0 fade show&#x22;&#x3E;
                    &#x3C;span&#x3E;This is a warning alert&#x2014;check it out!&#x3C;/span&#x3E;
                &#x3C;/alert&#x3E;
                &#x3C;alert variant=&#x22;warning&#x22; :isdismissable=&#x22;true&#x22; className=&#x22;alert-solid rounded-0 fade show&#x22; buttonClass=&#x22;btn-close-white&#x22;&#x3E;
                    &#x3C;span&#x3E;This is a warning alert&#x2014;check it out!&#x3C;/span&#x3E;
                &#x3C;/alert&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;alert variant=&#x22;success&#x22; className=&#x22;mb-0&#x22;&#x3E;
                    &#x3C;h4 class=&#x22;alert-heading&#x22;&#x3E;Well done!&#x3C;/h4&#x3E;
                    &#x3C;p&#x3E;Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.&#x3C;/p&#x3E;
                    &#x3C;hr&#x3E;
                    &#x3C;p class=&#x22;mb-0&#x22;&#x3E;Whenever you need to, be sure to use margin utilities to keep things nice and tidy.&#x3C;/p&#x3E;
                &#x3C;/alert&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>

                                    </div>
                                </div>

                        </div>
                    </article>
                    <article id="badge">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Badge</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Badges" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-badge-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-badge-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-badge-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <badge tag="p" badgeClass="h1">Example heading <innercontent innerClass="badge bg-primary">New</innercontent></badge>
                                            <badge tag="p" badgeClass="h2">Example heading <innercontent innerClass="badge bg-secondary">New</innercontent></badge>
                                            <badge tag="p" badgeClass="h3">Example heading <innercontent innerClass="badge bg-success">New</innercontent></badge>
                                            <badge tag="p" badgeClass="h4">Example heading <innercontent innerClass="badge bg-danger">New</innercontent></badge>
                                            <badge tag="p" badgeClass="h5">Example heading <innercontent innerClass="badge bg-warning">New</innercontent></badge>
                                            <badge tag="p" badgeClass="h6">Example heading <innercontent innerClass="badge bg-info">New</innercontent></badge>
                                        </div>
                                        <div class="bd-example">
                                            <innercontent innerClass="badge rounded-pill bg-primary">Primary</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-secondary">Secondary</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-success">Success</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-danger">Danger</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-warning">Warning</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-info">Info</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-light text-dark">Light</innercontent>
                                            <innercontent innerClass="badge rounded-pill bg-dark">Dark</innercontent>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-badge-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;badge tag=&#x22;p&#x22; badgeClass=&#x22;h1&#x22;&#x3E;Example heading &#x3C;innercontent innerClass=&#x22;badge bg-primary&#x22;&#x3E;New&#x3C;/innercontent&#x3E;&#x3C;/badge&#x3E;
                &#x3C;badge tag=&#x22;p&#x22; badgeClass=&#x22;h2&#x22;&#x3E;Example heading &#x3C;innercontent innerClass=&#x22;badge bg-secondary&#x22;&#x3E;New&#x3C;/innercontent&#x3E;&#x3C;/badge&#x3E;
                &#x3C;badge tag=&#x22;p&#x22; badgeClass=&#x22;h3&#x22;&#x3E;Example heading &#x3C;innercontent innerClass=&#x22;badge bg-success&#x22;&#x3E;New&#x3C;/innercontent&#x3E;&#x3C;/badge&#x3E;
                &#x3C;badge tag=&#x22;p&#x22; badgeClass=&#x22;h4&#x22;&#x3E;Example heading &#x3C;innercontent innerClass=&#x22;badge bg-danger&#x22;&#x3E;New&#x3C;/innercontent&#x3E;&#x3C;/badge&#x3E;
                &#x3C;badge tag=&#x22;p&#x22; badgeClass=&#x22;h5&#x22;&#x3E;Example heading &#x3C;innercontent innerClass=&#x22;badge bg-warning&#x22;&#x3E;New&#x3C;/innercontent&#x3E;&#x3C;/badge&#x3E;
                &#x3C;badge tag=&#x22;p&#x22; badgeClass=&#x22;h6&#x22;&#x3E;Example heading &#x3C;innercontent innerClass=&#x22;badge bg-info&#x22;&#x3E;New&#x3C;/innercontent&#x3E;&#x3C;/badge&#x3E;
            &#x3C;/div&#x3E;

             &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-primary&#x22;&#x3E;Primary&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-secondary&#x22;&#x3E;Secondary&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-success&#x22;&#x3E;Success&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-danger&#x22;&#x3E;Danger&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-warning&#x22;&#x3E;Warning&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-info&#x22;&#x3E;Info&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-light text-dark&#x22;&#x3E;Light&#x3C;/innercontent&#x3E;
                &#x3C;innercontent innerClass=&#x22;badge rounded-pill bg-dark&#x22;&#x3E;Dark&#x3C;/innercontent&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="breadcrumb">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Breadcrumb</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Breadcrumb" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Breadcrumb-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Breadcrumb-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Breadcrumb-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <breadcrumb ariaLabel="breadcrumb" innerClass="breadcrumb">
                                                <breadcrumbcontent liClass="active" ariaCurrent="page">Home</breadcrumbcontent>
                                            </breadcrumb>
                                            <breadcrumb ariaLabel="breadcrumb" innerClass="breadcrumb">
                                                <breadcrumbcontent><a href="#">Home</a></breadcrumbcontent>
                                                <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                                            </breadcrumb>
                                            <breadcrumb ariaLabel="breadcrumb" innerClass="breadcrumb">
                                                <breadcrumbcontent><a href="#">Home</a></breadcrumbcontent>
                                                <breadcrumbcontent><a href="#">Library</a></breadcrumbcontent>
                                                <breadcrumbcontent liClass="active" ariaCurrent="page">Data</breadcrumbcontent>
                                            </breadcrumb>
                                            <breadcrumb style="--bs-breadcrumb-divider: '>';" ariaLabel="breadcrumb" innerClass="breadcrumb">
                                                <breadcrumbcontent><a href="#">Home</a></breadcrumbcontent>
                                                <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                                            </breadcrumb>
                                            <breadcrumb style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" ariaLabel="breadcrumb" innerClass="breadcrumb">
                                                <breadcrumbcontent><a href="#">Home</a></breadcrumbcontent>
                                                <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                                            </breadcrumb>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Breadcrumb-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
    <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;breadcrumb ariaLabel=&#x22;breadcrumb&#x22; innerClass=&#x22;breadcrumb&#x22;&#x3E;
                    &#x3C;breadcrumbcontent liClass=&#x22;active&#x22; ariaCurrent=&#x22;page&#x22;&#x3E;Home&#x3C;/breadcrumbcontent&#x3E;
                &#x3C;/breadcrumb&#x3E;
                &#x3C;breadcrumb ariaLabel=&#x22;breadcrumb&#x22; innerClass=&#x22;breadcrumb&#x22;&#x3E;
                    &#x3C;breadcrumbcontent&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/breadcrumbcontent&#x3E;
                    &#x3C;breadcrumbcontent liClass=&#x22;active&#x22; ariaCurrent=&#x22;page&#x22;&#x3E;Library&#x3C;/breadcrumbcontent&#x3E;
                &#x3C;/breadcrumb&#x3E;
                &#x3C;breadcrumb ariaLabel=&#x22;breadcrumb&#x22; innerClass=&#x22;breadcrumb&#x22;&#x3E;
                    &#x3C;breadcrumbcontent&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/breadcrumbcontent&#x3E;
                    &#x3C;breadcrumbcontent&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Library&#x3C;/a&#x3E;&#x3C;/breadcrumbcontent&#x3E;
                    &#x3C;breadcrumbcontent liClass=&#x22;active&#x22; ariaCurrent=&#x22;page&#x22;&#x3E;Data&#x3C;/breadcrumbcontent&#x3E;
                &#x3C;/breadcrumb&#x3E;
                &#x3C;breadcrumb style=&#x22;--bs-breadcrumb-divider: &#x27;&#x3E;&#x27;;&#x22; ariaLabel=&#x22;breadcrumb&#x22; innerClass=&#x22;breadcrumb&#x22;&#x3E;
                    &#x3C;breadcrumbcontent&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/breadcrumbcontent&#x3E;
                    &#x3C;breadcrumbcontent liClass=&#x22;active&#x22; ariaCurrent=&#x22;page&#x22;&#x3E;Library&#x3C;/breadcrumbcontent&#x3E;
                &#x3C;/breadcrumb&#x3E;
                &#x3C;breadcrumb style=&#x22;--bs-breadcrumb-divider: url(&#x26;#34;data:image/svg+xml,%3Csvg xmlns=&#x27;http://www.w3.org/2000/svg&#x27; width=&#x27;8&#x27; height=&#x27;8&#x27;%3E%3Cpath d=&#x27;M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z&#x27; fill=&#x27;currentColor&#x27;/%3E%3C/svg%3E&#x26;#34;);&#x22; ariaLabel=&#x22;breadcrumb&#x22; innerClass=&#x22;breadcrumb&#x22;&#x3E;
                    &#x3C;breadcrumbcontent&#x3E;&#x3C;a href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;&#x3C;/breadcrumbcontent&#x3E;
                    &#x3C;breadcrumbcontent liClass=&#x22;active&#x22; ariaCurrent=&#x22;page&#x22;&#x3E;Library&#x3C;/breadcrumbcontent&#x3E;
                &#x3C;/breadcrumb&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>

                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="buttons">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Button</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Button" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Button-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Button-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Button-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <buttons buttonClass="btn-primary">Default</buttons>
                                            <buttons buttonClass="btn-primary rounded-pill">Rounded</buttons>
                                            <buttons buttonClass="btn-primary rounded-pill">
                                                <span class="btn-inner">
                                                    <svg width="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                With Icon
                                            </buttons>
                                            <buttons  buttonClass="btn-icon btn-primary">
                                                <span class="btn-inner">
                                                    <svg width="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </buttons>
                                        </div>
                                        <div class="bd-example">
                                            <buttons type="button" buttonClass="btn-primary">Primary</buttons>
                                            <buttons type="button" buttonClass="btn-secondary">Secondary</buttons>
                                            <buttons type="button" buttonClass="btn-success">Success</buttons>
                                            <buttons type="button" buttonClass="btn-danger">Danger</buttons>
                                            <buttons type="button" buttonClass="btn-warning">Warning</buttons>
                                            <buttons type="button" buttonClass="btn-info">Info</buttons>
                                            <buttons type="button" buttonClass="btn-light">Light</buttons>
                                            <buttons type="button" buttonClass="btn-dark">Dark</buttons>
                                            <buttons type="button" buttonClass="btn-link">Link</buttons>
                                        </div>
                                        <div class="bd-example">
                                            <buttons type="button" buttonClass="btn-outline-primary">Primary</buttons>
                                            <buttons type="button" buttonClass="btn-outline-secondary">Secondary</buttons>
                                            <buttons type="button" buttonClass="btn-outline-success">Success</buttons>
                                            <buttons type="button" buttonClass="btn-outline-danger">Danger</buttons>
                                            <buttons type="button" buttonClass="btn-outline-warning">Warning</buttons>
                                            <buttons type="button" buttonClass="btn-outline-info">Info</buttons>
                                            <buttons type="button" buttonClass="btn-outline-light">Light</buttons>
                                            <buttons type="button" buttonClass="btn-outline-dark">Dark</buttons>
                                        </div>
                                        <div class="bd-example">
                                            <buttons type="button" buttonClass="btn-primary btn-xs mr-2">Ex small</buttons>
                                            <buttons type="button" buttonClass="btn-primary btn-sm">Small button</buttons>
                                            <buttons type="button" buttonClass="btn-primary">Default button</buttons>
                                            <buttons type="button" buttonClass="btn-primary btn-lg">Large button</buttons>
                                        </div>
                                        <div class="bd-example">
                                            <buttons type="button" buttonClass="btn-soft-info">Info</buttons>
                                            <buttons type="button" buttonClass="btn-soft-primary">Primary</buttons>
                                            <buttons type="button" buttonClass="btn-soft-success">Success</buttons>
                                            <buttons type="button" buttonClass="btn-soft-danger">Danger</buttons>
                                            <buttons type="button" buttonClass="btn-soft-warning">Warning</buttons>
                                            <buttons type="button" buttonClass="btn-soft-light">Light</buttons>
                                            <buttons type="button" buttonClass="btn-soft-dark">Dark</buttons>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Button-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
<pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;buttons buttonClass=&#x22;btn-primary&#x22;&#x3E;Default&#x3C;/buttons&#x3E;
            &#x3C;buttons buttonClass=&#x22;btn-primary rounded-pill&#x22;&#x3E;Rounded&#x3C;/buttons&#x3E;
            &#x3C;buttons buttonClass=&#x22;btn-primary rounded-pill&#x22;&#x3E;
                &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
                    &#x3C;svg width=&#x22;20&#x22; fill=&#x22;none&#x22; stroke=&#x22;currentColor&#x22; viewBox=&#x22;0 0 24 24&#x22;
                        xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
                        &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&#x22;&#x3E;
                        &#x3C;/path&#x3E;
                    &#x3C;/svg&#x3E;
                &#x3C;/span&#x3E;
                With Icon
            &#x3C;/buttons&#x3E;
            &#x3C;buttons  buttonClass=&#x22;btn-icon btn-primary&#x22;&#x3E;
                &#x3C;span class=&#x22;btn-inner&#x22;&#x3E;
                    &#x3C;svg width=&#x22;20&#x22; fill=&#x22;none&#x22; stroke=&#x22;currentColor&#x22; viewBox=&#x22;0 0 24 24&#x22;
                        xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
                        &#x3C;path stroke-linecap=&#x22;round&#x22; stroke-linejoin=&#x22;round&#x22; stroke-width=&#x22;2&#x22; d=&#x22;M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z&#x22;&#x3E;
                        &#x3C;/path&#x3E;
                    &#x3C;/svg&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/buttons&#x3E;
        &#x3C;/div&#x3E;
       &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary&#x22;&#x3E;Primary&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;Secondary&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-success&#x22;&#x3E;Success&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-danger&#x22;&#x3E;Danger&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-warning&#x22;&#x3E;Warning&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-info&#x22;&#x3E;Info&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-light&#x22;&#x3E;Light&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-dark&#x22;&#x3E;Dark&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-link&#x22;&#x3E;Link&#x3C;/buttons&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary btn-xs mr-2&#x22;&#x3E;Ex small&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary btn-sm&#x22;&#x3E;Small button&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary&#x22;&#x3E;Default button&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary btn-lg&#x22;&#x3E;Large button&#x3C;/buttons&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-info&#x22;&#x3E;Info&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-primary&#x22;&#x3E;Primary&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-success&#x22;&#x3E;Success&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-danger&#x22;&#x3E;Danger&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-warning&#x22;&#x3E;Warning&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-light&#x22;&#x3E;Light&#x3C;/buttons&#x3E;
            &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-soft-dark&#x22;&#x3E;Dark&#x3C;/buttons&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="button-group">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Button Group</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Buttongroup" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Buttongroup-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Buttongroup-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Buttongroup-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                                <buttongroup buttongrpClass="btn-group me-2" ariaLabel="First group">
                                                    <buttons type="button" buttonClass="btn-secondary">1</buttons>
                                                    <buttons type="button" buttonClass="btn-secondary">2</buttons>
                                                    <buttons type="button" buttonClass="btn-secondary">3</buttons>
                                                    <buttons type="button" buttonClass="btn-secondary">4</buttons>
                                                </buttongroup>
                                                <buttongroup buttongrpClass="btn-group me-2" ariaLabel="Second group">
                                                    <buttons type="button" buttonClass="btn-secondary">5</buttons>
                                                    <buttons type="button" buttonClass="btn-secondary">6</buttons>
                                                    <buttons type="button" buttonClass="btn-secondary">7</buttons>
                                                </buttongroup>
                                                <buttongroup buttongrpClass="btn-group" ariaLabel="Third group">
                                                    <buttons type="button" buttonClass="btn-secondary">8</buttons>
                                                </buttongroup>
                                            </div>
                                        </div>
                                        <div class="bd-example">
                                            <buttongroup buttongrpClass="btn-group" ariaLabel="Basic example">
                                                <buttons type="button" buttonClass="btn-primary">Home</buttons>
                                                <buttons type="button" buttonClass="btn-outline-primary">Profile</buttons>
                                                <buttons type="button" buttonClass="btn-outline-primary">Message</buttons>
                                            </buttongroup>
                                        </div>
                                        <div class="bd-example">
                                            <buttongroup buttongrpClass="btn-group-vertical" ariaLabel="Basic example">
                                                <buttons type="button" buttonClass="btn-primary">Home</buttons>
                                                <buttons type="button" buttonClass="btn-outline-primary">Profile</buttons>
                                                <buttons type="button" buttonClass="btn-outline-primary">Message</buttons>
                                            </buttongroup>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Buttongroup-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div class=&#x22;btn-toolbar&#x22; role=&#x22;toolbar&#x22; aria-label=&#x22;Toolbar with button groups&#x22;&#x3E;
                    &#x3C;buttongroup buttongrpClass=&#x22;btn-group me-2&#x22; ariaLabel=&#x22;First group&#x22;&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;1&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;2&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;3&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;4&#x3C;/buttons&#x3E;
                    &#x3C;/buttongroup&#x3E;
                    &#x3C;buttongroup buttongrpClass=&#x22;btn-group me-2&#x22; ariaLabel=&#x22;Second group&#x22;&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;5&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;6&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;7&#x3C;/buttons&#x3E;
                    &#x3C;/buttongroup&#x3E;
                    &#x3C;buttongroup buttongrpClass=&#x22;btn-group&#x22; ariaLabel=&#x22;Third group&#x22;&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-secondary&#x22;&#x3E;8&#x3C;/buttons&#x3E;
                    &#x3C;/buttongroup&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
              &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                    &#x3C;buttongroup buttongrpClass=&#x22;btn-group&#x22; ariaLabel=&#x22;Basic example&#x22;&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary&#x22;&#x3E;Home&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-outline-primary&#x22;&#x3E;Profile&#x3C;/buttons&#x3E;
                        &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-outline-primary&#x22;&#x3E;Message&#x3C;/buttons&#x3E;
                    &#x3C;/buttongroup&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;buttongroup buttongrpClass=&#x22;btn-group-vertical&#x22; ariaLabel=&#x22;Basic example&#x22;&#x3E;
                    &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-primary&#x22;&#x3E;Home&#x3C;/buttons&#x3E;
                    &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-outline-primary&#x22;&#x3E;Profile&#x3C;/buttons&#x3E;
                    &#x3C;buttons type=&#x22;button&#x22; buttonClass=&#x22;btn-outline-primary&#x22;&#x3E;Message&#x3C;/buttons&#x3E;
                &#x3C;/buttongroup&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="calendar">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Calendar</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Vaniladatepicker" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Calendar-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Calendar-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-Calendar-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <div class="input-group">
                                             <Datepicker v-model="picked" type="text"  placeholder="Date Picker" class="form-control">
                                            <input class="form-control vanila-datepicker" placeholder="Date Picker">
                                             </Datepicker>
                                        </div>
                                    </div>
                                    <div class="bd-example">
                                        <div class="form-group vanila-daterangepicker d-flex flex-row">
                                            <Datepicker v-model="picked" placeholder="From Date"  class="form-control">
                                            <input class="form-control vanila-datepicker"  name="start" placeholder="From Date">
                                            </Datepicker>
                                            <span class="flex-grow-0">
                                                <span class="btn">To</span>
                                            </span>
                                           <Datepicker v-model="picked" placeholder="From Date"  class="form-control">
                                            <input class="form-control vanila-datepicker"  name="start" placeholder="From Date">
                                            </Datepicker>
                                        </div>
                                    </div>
                                    <div class="bd-example">
                                        <div class="input-group">
                                            <div class="vanila-datepicker"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-Calendar-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                    &#x3C;Datepicker v-model=&#x22;picked&#x22; type=&#x22;text&#x22;  placeholder=&#x22;Date Picker&#x22; class=&#x22;form-control&#x22;&#x3E;
                &#x3C;input class=&#x22;form-control vanila-datepicker&#x22; placeholder=&#x22;Date Picker&#x22;&#x3E;
                    &#x3C;/Datepicker&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-group vanila-daterangepicker d-flex flex-row&#x22;&#x3E;
                &#x3C;Datepicker v-model=&#x22;picked&#x22; placeholder=&#x22;From Date&#x22;  class=&#x22;form-control&#x22;&#x3E;
                &#x3C;input class=&#x22;form-control vanila-datepicker&#x22;  name=&#x22;start&#x22; placeholder=&#x22;From Date&#x22;&#x3E;
                &#x3C;/Datepicker&#x3E;
                &#x3C;span class=&#x22;flex-grow-0&#x22;&#x3E;
                    &#x3C;span class=&#x22;btn&#x22;&#x3E;To&#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;Datepicker v-model=&#x22;picked&#x22; placeholder=&#x22;From Date&#x22;  class=&#x22;form-control&#x22;&#x3E;
                &#x3C;input class=&#x22;form-control vanila-datepicker&#x22;  name=&#x22;start&#x22; placeholder=&#x22;From Date&#x22;&#x3E;
                &#x3C;/Datepicker&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                &#x3C;div class=&#x22;vanila-datepicker&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="card">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Card</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Cards" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-card-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-card-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-card-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <div class="row  row-cols-1 row-cols-md-2 g-4">
                                                <div class="col">
                                                    <iq-card className="mb-0">
                                                        <template v-slot:cardImage>
                                                            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                                        </template>
                                                        <template v-slot:body>
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                                        </template>
                                                    </iq-card>
                                                </div>
                                                <div class="col">
                                                    <iq-card className="mb-0">
                                                        <template v-slot:headerTitle>
                                                            Featured
                                                        </template>
                                                        <template v-slot:body>
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                                        </template>
                                                        <template v-slot:footer>
                                                            2 days ago
                                                        </template>
                                                    </iq-card>
                                                </div>
                                                <div class="col">
                                                    <iq-card className="mb-0">
                                                        <template v-slot:body>
                                                            <h5 class="card-title">Card title</h5>
                                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        </template>
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item">An item</li>
                                                            <li class="list-group-item">A second item</li>
                                                            <li class="list-group-item">A third item</li>
                                                        </ul>
                                                        <template v-slot:footer>
                                                            <a href="#" class="card-link">Card link</a>
                                                            <a href="#" class="card-link">Another link</a>
                                                        </template>
                                                    </iq-card>
                                                </div>
                                                <div class="col">
                                                    <cards className="mb-0">
                                                        <div class="row g-0">
                                                            <div class="col-md-4">
                                                                <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="30%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
                                                            </div>
                                                            <div class="col-md-8">
                                                                <cardbody>
                                                                    <h5 class="card-title">Card title</h5>
                                                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                                                </cardbody>
                                                            </div>
                                                        </div>
                                                    </cards>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-card-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
<pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div class=&#x22;row  row-cols-1 row-cols-md-2 g-4&#x22;&#x3E;
                    &#x3C;div class=&#x22;col&#x22;&#x3E;
                        &#x3C;iq-card className=&#x22;mb-0&#x22;&#x3E;
                            &#x3C;template v-slot:cardImage&#x3E;
                                &#x3C;svg class=&#x22;bd-placeholder-img card-img-top&#x22; width=&#x22;100%&#x22; height=&#x22;180&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Image cap&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;40%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22; dy=&#x22;.3em&#x22;&#x3E;Image cap&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                            &#x3C;/template&#x3E;
                            &#x3C;template v-slot:body&#x3E;
                                &#x3C;h5 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h5&#x3E;
                                &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;
                                &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;
                            &#x3C;/template&#x3E;
                        &#x3C;/iq-card&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col&#x22;&#x3E;
                        &#x3C;iq-card className=&#x22;mb-0&#x22;&#x3E;
                            &#x3C;template v-slot:headerTitle&#x3E;
                                Featured
                            &#x3C;/template&#x3E;
                            &#x3C;template v-slot:body&#x3E;
                                &#x3C;h5 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h5&#x3E;
                                &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;
                                &#x3C;a href=&#x22;#&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Go somewhere&#x3C;/a&#x3E;
                            &#x3C;/template&#x3E;
                            &#x3C;template v-slot:footer&#x3E;
                                2 days ago
                            &#x3C;/template&#x3E;
                        &#x3C;/iq-card&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col&#x22;&#x3E;
                        &#x3C;iq-card className=&#x22;mb-0&#x22;&#x3E;
                            &#x3C;template v-slot:body&#x3E;
                                &#x3C;h5 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h5&#x3E;
                                &#x3C;p class=&#x22;card-text&#x22;&#x3E;Some quick example text to build on the card title and make up the bulk of the card&#x27;s content.&#x3C;/p&#x3E;
                            &#x3C;/template&#x3E;
                            &#x3C;ul class=&#x22;list-group list-group-flush&#x22;&#x3E;
                                &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;An item&#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;A second item&#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;list-group-item&#x22;&#x3E;A third item&#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                            &#x3C;template v-slot:footer&#x3E;
                                &#x3C;a href=&#x22;#&#x22; class=&#x22;card-link&#x22;&#x3E;Card link&#x3C;/a&#x3E;
                                &#x3C;a href=&#x22;#&#x22; class=&#x22;card-link&#x22;&#x3E;Another link&#x3C;/a&#x3E;
                            &#x3C;/template&#x3E;
                        &#x3C;/iq-card&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col&#x22;&#x3E;
                        &#x3C;cards className=&#x22;mb-0&#x22;&#x3E;
                            &#x3C;div class=&#x22;row g-0&#x22;&#x3E;
                                &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
                                    &#x3C;svg class=&#x22;bd-placeholder-img&#x22; width=&#x22;100%&#x22; height=&#x22;250&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Image&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;30%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22; dy=&#x22;.3em&#x22;&#x3E;Image&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                                &#x3C;/div&#x3E;
                                &#x3C;div class=&#x22;col-md-8&#x22;&#x3E;
                                    &#x3C;cardbody&#x3E;
                                        &#x3C;h5 class=&#x22;card-title&#x22;&#x3E;Card title&#x3C;/h5&#x3E;
                                        &#x3C;p class=&#x22;card-text&#x22;&#x3E;This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.&#x3C;/p&#x3E;
                                        &#x3C;p class=&#x22;card-text&#x22;&#x3E;&#x3C;small class=&#x22;text-muted&#x22;&#x3E;Last updated 3 mins ago&#x3C;/small&#x3E;&#x3C;/p&#x3E;
                                    &#x3C;/cardbody&#x3E;
                                &#x3C;/div&#x3E;
                            &#x3C;/div&#x3E;
                        &#x3C;/cards&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="carousel">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Carousel</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Coursel" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Carousel-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Carousel-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Carousel-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                                                <div class="carousel-indicators">
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item">
                                                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="46%" y="50%" fill="#555" dy=".3em">First slide</text></svg>

                                                        <div class="carousel-caption d-none d-md-block">
                                                            <h5>First slide label</h5>
                                                            <p>Some representative placeholder content for the first slide.</p>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item active">
                                                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="46%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>

                                                        <div class="carousel-caption d-none d-md-block">
                                                            <h5>Second slide label</h5>
                                                            <p>Some representative placeholder content for the second slide.</p>
                                                        </div>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="46%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>

                                                        <div class="carousel-caption d-none d-md-block">
                                                            <h5>Third slide label</h5>
                                                            <p>Some representative placeholder content for the third slide.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Carousel-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div id=&#x22;carouselExampleCaptions&#x22; class=&#x22;carousel slide&#x22; data-bs-ride=&#x22;carousel&#x22;&#x3E;
                    &#x3C;div class=&#x22;carousel-indicators&#x22;&#x3E;
                        &#x3C;button type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide-to=&#x22;0&#x22; class=&#x22;&#x22; aria-label=&#x22;Slide 1&#x22;&#x3E;&#x3C;/button&#x3E;
                        &#x3C;button type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide-to=&#x22;1&#x22; aria-label=&#x22;Slide 2&#x22; class=&#x22;active&#x22; aria-current=&#x22;true&#x22;&#x3E;&#x3C;/button&#x3E;
                        &#x3C;button type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide-to=&#x22;2&#x22; aria-label=&#x22;Slide 3&#x22; class=&#x22;&#x22;&#x3E;&#x3C;/button&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;carousel-inner&#x22;&#x3E;
                        &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
                            &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg d-block w-100&#x22; width=&#x22;800&#x22; height=&#x22;400&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: First slide&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#777&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#555&#x22; dy=&#x22;.3em&#x22;&#x3E;First slide&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                            &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
                                &#x3C;h5&#x3E;First slide label&#x3C;/h5&#x3E;
                                &#x3C;p&#x3E;Some representative placeholder content for the first slide.&#x3C;/p&#x3E;
                            &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;div class=&#x22;carousel-item active&#x22;&#x3E;
                            &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg d-block w-100&#x22; width=&#x22;800&#x22; height=&#x22;400&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Second slide&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#666&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#444&#x22; dy=&#x22;.3em&#x22;&#x3E;Second slide&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                            &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
                                &#x3C;h5&#x3E;Second slide label&#x3C;/h5&#x3E;
                                &#x3C;p&#x3E;Some representative placeholder content for the second slide.&#x3C;/p&#x3E;
                            &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;div class=&#x22;carousel-item&#x22;&#x3E;
                            &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg d-block w-100&#x22; width=&#x22;800&#x22; height=&#x22;400&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Third slide&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#555&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#333&#x22; dy=&#x22;.3em&#x22;&#x3E;Third slide&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                            &#x3C;div class=&#x22;carousel-caption d-none d-md-block&#x22;&#x3E;
                                &#x3C;h5&#x3E;Third slide label&#x3C;/h5&#x3E;
                                &#x3C;p&#x3E;Some representative placeholder content for the third slide.&#x3C;/p&#x3E;
                            &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;button class=&#x22;carousel-control-prev&#x22; type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide=&#x22;prev&#x22;&#x3E;
                        &#x3C;span class=&#x22;carousel-control-prev-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Previous&#x3C;/span&#x3E;
                    &#x3C;/button&#x3E;
                    &#x3C;button class=&#x22;carousel-control-next&#x22; type=&#x22;button&#x22; data-bs-target=&#x22;#carouselExampleCaptions&#x22; data-bs-slide=&#x22;next&#x22;&#x3E;
                        &#x3C;span class=&#x22;carousel-control-next-icon&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/span&#x3E;
                        &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Next&#x3C;/span&#x3E;
                    &#x3C;/button&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="dropdowns">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Dropdown</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Dropdown" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-dropdown-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-dropdown-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-dropdown-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButtonSM" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonSM">
                                                        <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                        <li><hr class="dropdown-divider"></li>
                                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                        <li><hr class="dropdown-divider"></li>
                                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                                </div>
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" id="dropdownMenuButtonLG" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Dropdown button
                                                    </button>
                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonLG">
                                                        <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                        <li><hr class="dropdown-divider"></li>
                                                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bd-example">
                                        <div class="btn-group">
                                        <button type="button" class="btn btn-primary">Primary</button>
                                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                        <div class="btn-group">
                                        <button type="button" class="btn btn-secondary">Secondary</button>
                                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                        <div class="btn-group">
                                        <button type="button" class="btn btn-success">Success</button>
                                        <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                        <div class="btn-group">
                                        <button type="button" class="btn btn-info">Info</button>
                                        <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                        <div class="btn-group">
                                        <button type="button" class="btn btn-warning">Warning</button>
                                        <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                        <div class="btn-group">
                                        <button type="button" class="btn btn-danger">Danger</button>
                                        <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        </div>
                                        </div>

                                        <div class="bd-example">
                                        <div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
                                        <div class="dropend">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropendMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropend button
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropendMenuButton">
                                                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropup">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropupMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropup button
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropupMenuButton">
                                                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropstart">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropstartMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropstart button
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropstartMenuButton">
                                                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        </div>

                                        <div class="bd-example">
                                        <div class="btn-group">
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownRightMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                            End-aligned menu
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownRightMenuButton">
                                                <li><h6 class="dropdown-header">Dropdown header</h6></li>
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider"></li>
                                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                                            </ul>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-dropdown-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
<pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Primary&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary dropdown-toggle dropdown-toggle-split&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Toggle Dropdown&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22;&#x3E;Secondary&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary dropdown-toggle dropdown-toggle-split&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Toggle Dropdown&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-success&#x22;&#x3E;Success&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-success dropdown-toggle dropdown-toggle-split&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Toggle Dropdown&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-info&#x22;&#x3E;Info&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-info dropdown-toggle dropdown-toggle-split&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Toggle Dropdown&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-warning&#x22;&#x3E;Warning&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-warning dropdown-toggle dropdown-toggle-split&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Toggle Dropdown&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-danger&#x22;&#x3E;Danger&#x3C;/button&#x3E;
            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-danger dropdown-toggle dropdown-toggle-split&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                &#x3C;span class=&#x22;visually-hidden&#x22;&#x3E;Toggle Dropdown&#x3C;/span&#x3E;
            &#x3C;/button&#x3E;
            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div class=&#x22;btn-group w-100 align-items-center justify-content-between flex-wrap&#x22;&#x3E;
                &#x3C;div class=&#x22;dropend&#x22;&#x3E;
                    &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropendMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                    Dropend button
                    &#x3C;/button&#x3E;
                    &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;dropendMenuButton&#x22;&#x3E;
                        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;dropup&#x22;&#x3E;
                    &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropupMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                    Dropup button
                    &#x3C;/button&#x3E;
                    &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;dropupMenuButton&#x22;&#x3E;
                        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;dropstart&#x22;&#x3E;
                    &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropstartMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                    Dropstart button
                    &#x3C;/button&#x3E;
                    &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;dropstartMenuButton&#x22;&#x3E;
                        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                    &#x3C;div class=&#x22;btn-group w-100 align-items-center justify-content-between flex-wrap&#x22;&#x3E;
                        &#x3C;div class=&#x22;dropend&#x22;&#x3E;
                            &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropendMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                            Dropend button
                            &#x3C;/button&#x3E;
                            &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;dropendMenuButton&#x22;&#x3E;
                                &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;div class=&#x22;dropup&#x22;&#x3E;
                            &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropupMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                            Dropup button
                            &#x3C;/button&#x3E;
                            &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;dropupMenuButton&#x22;&#x3E;
                                &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;div class=&#x22;dropstart&#x22;&#x3E;
                            &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropstartMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                            Dropstart button
                            &#x3C;/button&#x3E;
                            &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;dropstartMenuButton&#x22;&#x3E;
                                &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;

                &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div class=&#x22;btn-group&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown&#x22;&#x3E;
                    &#x3C;button class=&#x22;btn btn-secondary dropdown-toggle&#x22; type=&#x22;button&#x22; id=&#x22;dropdownRightMenuButton&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                    End-aligned menu
                    &#x3C;/button&#x3E;
                    &#x3C;ul class=&#x22;dropdown-menu dropdown-menu-end&#x22; aria-labelledby=&#x22;dropdownRightMenuButton&#x22;&#x3E;
                        &#x3C;li&#x3E;&#x3C;h6 class=&#x22;dropdown-header&#x22;&#x3E;Dropdown header&#x3C;/h6&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Separated link&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="list-group">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>List Group</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Listgroup" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-listgroup-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-listgroup-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-listgroup-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <listgroup className="list-group">
                                                <list-content contentClass="list-group-item active" ariaCurrent="true">An active item</list-content>
                                                <list-content contentClass="list-group-item disabled" ariaDisabled="true">A second item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action">A third link item</list-content>
                                                <list-content tag="button" type="button" contentClass="list-group-item list-group-item-action">A fourth button item</list-content>
                                                <list-content contentClass="list-group-item">And a fifth one</list-content>
                                            </listgroup>
                                        </div>

                                        <div class="bd-example">
                                            <listgroup className="list-group">
                                                <list-content contentClass="list-group-item" ariaDisabled="true">An disabled item</list-content>
                                                <list-content contentClass="list-group-item">A second item</list-content>
                                                <list-content contentClass="list-group-item">A third item</list-content>
                                                <list-content contentClass="list-group-item">A fourth item</list-content>
                                                <list-content contentClass="list-group-item">And a fifth one</list-content>
                                            </listgroup>
                                        </div>
                                        <div class="bd-example">
                                            <listgroup className="list-group list-group-flush">
                                                <list-content contentClass="list-group-item">An item</list-content>
                                                <list-content contentClass="list-group-item">A second item</list-content>
                                                <list-content contentClass="list-group-item">A third item</list-content>
                                                <list-content contentClass="list-group-item">A fourth item</list-content>
                                                <list-content contentClass="list-group-item">And a fifth one</list-content>
                                            </listgroup>
                                        </div>

                                        <div class="bd-example">
                                            <listgroup tag="ol" className="list-group list-group-numbered">
                                                <list-content contentClass="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="ms-2 me-auto">
                                                        <div class="fw-bold">Subheading</div>
                                                        Cras justo odio
                                                    </div>
                                                    <innercontent innerClass="badge bg-primary rounded-pill">14</innercontent>
                                                </list-content>
                                                <list-content contentClass="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="ms-2 me-auto">
                                                        <div class="fw-bold">Subheading</div>
                                                        Cras justo odio
                                                    </div>
                                                    <innercontent innerClass="badge bg-primary rounded-pill">14</innercontent>
                                                </list-content>
                                                <list-content contentClass="list-group-item d-flex justify-content-between align-items-start">
                                                    <div class="ms-2 me-auto">
                                                        <div class="fw-bold">Subheading</div>
                                                        Cras justo odio
                                                    </div>
                                                    <innercontent innerClass="badge bg-primary rounded-pill">14</innercontent>
                                                </list-content>
                                            </listgroup>
                                        </div>

                                        <div class="bd-example">
                                            <listgroup tag="div" className="list-group">
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action">A simple default list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-success">A simple success list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-info">A simple info list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-light">A simple light list group item</list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</list-content>
                                            </listgroup>
                                        </div>

                                        <div class="bd-example">
                                            <listgroup className="list-group">
                                                <list-content contentClass="list-group-item d-flex justify-content-between align-items-center">
                                                    A list item
                                                    <innercontent innerClass="badge bg-primary rounded-pill">14</innercontent>
                                                </list-content>
                                                <list-content contentClass="list-group-item d-flex justify-content-between align-items-center">
                                                    A second list item
                                                    <innercontent innerClass="badge bg-primary rounded-pill">1</innercontent>
                                                </list-content>
                                                <list-content contentClass="list-group-item d-flex justify-content-between align-items-center">
                                                    A third list item
                                                    <innercontent innerClass="badge bg-primary rounded-pill">2</innercontent>
                                                </list-content>
                                            </listgroup>
                                        </div>

                                        <div class="bd-example">
                                            <listgroup tag="div" className="list-group">
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action active" ariaCurrent="true">
                                                    <div class="d-flex w-100 justify-content-between">
                                                        <h5 class="mb-1">List group item heading</h5>
                                                        <small>3 days ago</small>
                                                    </div>
                                                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                                                    <small>And some small print.</small>
                                                </list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action">
                                                    <div class="d-flex w-100 justify-content-between">
                                                        <h5 class="mb-1">List group item heading</h5>
                                                        <small class="text-muted">3 days ago</small>
                                                    </div>
                                                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                                                    <small class="text-muted">And some muted small print.</small>
                                                </list-content>
                                                <list-content tag="a" href="#" contentClass="list-group-item list-group-item-action">
                                                    <div class="d-flex w-100 justify-content-between">
                                                        <h5 class="mb-1">List group item heading</h5>
                                                        <small class="text-muted">3 days ago</small>
                                                    </div>
                                                    <p class="mb-1">Some placeholder content in a paragraph.</p>
                                                    <small class="text-muted">And some muted small print.</small>
                                                </list-content>
                                            </listgroup>
                                        </div>

                                        <div class="bd-example">
                                            <listgroup tag="div" className="list-group">
                                                <list-content tag="label" contentClass="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="">
                                                    First checkbox
                                                </list-content>
                                                <list-content tag="label" contentClass="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="">
                                                    Second checkbox
                                                </list-content>
                                                <list-content tag="label" contentClass="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="">
                                                    Third checkbox
                                                </list-content>
                                                <list-content tag="label" contentClass="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="">
                                                    Fourth checkbox
                                                </list-content>
                                                <list-content tag="label" contentClass="list-group-item">
                                                    <input class="form-check-input me-1" type="checkbox" value="">
                                                    Fifth checkbox
                                                </list-content>
                                            </listgroup>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-listgroup-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup className=&#x22;list-group&#x22;&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item active&#x22; ariaCurrent=&#x22;true&#x22;&#x3E;An active item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item disabled&#x22; ariaDisabled=&#x22;true&#x22;&#x3E;A second item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action&#x22;&#x3E;A third link item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;button&#x22; type=&#x22;button&#x22; contentClass=&#x22;list-group-item list-group-item-action&#x22;&#x3E;A fourth button item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;And a fifth one&#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup className=&#x22;list-group&#x22;&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22; ariaDisabled=&#x22;true&#x22;&#x3E;An disabled item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;A second item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;A third item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;A fourth item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;And a fifth one&#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup className=&#x22;list-group list-group-flush&#x22;&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;An item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;A second item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;A third item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;A fourth item&#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item&#x22;&#x3E;And a fifth one&#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup tag=&#x22;ol&#x22; className=&#x22;list-group list-group-numbered&#x22;&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item d-flex justify-content-between align-items-start&#x22;&#x3E;
                        &#x3C;div class=&#x22;ms-2 me-auto&#x22;&#x3E;
                            &#x3C;div class=&#x22;fw-bold&#x22;&#x3E;Subheading&#x3C;/div&#x3E;
                            Cras justo odio
                        &#x3C;/div&#x3E;
                        &#x3C;innercontent innerClass=&#x22;badge bg-primary rounded-pill&#x22;&#x3E;14&#x3C;/innercontent&#x3E;
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item d-flex justify-content-between align-items-start&#x22;&#x3E;
                        &#x3C;div class=&#x22;ms-2 me-auto&#x22;&#x3E;
                            &#x3C;div class=&#x22;fw-bold&#x22;&#x3E;Subheading&#x3C;/div&#x3E;
                            Cras justo odio
                        &#x3C;/div&#x3E;
                        &#x3C;innercontent innerClass=&#x22;badge bg-primary rounded-pill&#x22;&#x3E;14&#x3C;/innercontent&#x3E;
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item d-flex justify-content-between align-items-start&#x22;&#x3E;
                        &#x3C;div class=&#x22;ms-2 me-auto&#x22;&#x3E;
                            &#x3C;div class=&#x22;fw-bold&#x22;&#x3E;Subheading&#x3C;/div&#x3E;
                            Cras justo odio
                        &#x3C;/div&#x3E;
                        &#x3C;innercontent innerClass=&#x22;badge bg-primary rounded-pill&#x22;&#x3E;14&#x3C;/innercontent&#x3E;
                    &#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;
           &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup tag=&#x22;div&#x22; className=&#x22;list-group&#x22;&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action&#x22;&#x3E;A simple default list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-primary&#x22;&#x3E;A simple primary list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-secondary&#x22;&#x3E;A simple secondary list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-success&#x22;&#x3E;A simple success list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-danger&#x22;&#x3E;A simple danger list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-warning&#x22;&#x3E;A simple warning list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-info&#x22;&#x3E;A simple info list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-light&#x22;&#x3E;A simple light list group item&#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action list-group-item-dark&#x22;&#x3E;A simple dark list group item&#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;

             &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup className=&#x22;list-group&#x22;&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item d-flex justify-content-between align-items-center&#x22;&#x3E;
                        A list item
                        &#x3C;innercontent innerClass=&#x22;badge bg-primary rounded-pill&#x22;&#x3E;14&#x3C;/innercontent&#x3E;
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item d-flex justify-content-between align-items-center&#x22;&#x3E;
                        A second list item
                        &#x3C;innercontent innerClass=&#x22;badge bg-primary rounded-pill&#x22;&#x3E;1&#x3C;/innercontent&#x3E;
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content contentClass=&#x22;list-group-item d-flex justify-content-between align-items-center&#x22;&#x3E;
                        A third list item
                        &#x3C;innercontent innerClass=&#x22;badge bg-primary rounded-pill&#x22;&#x3E;2&#x3C;/innercontent&#x3E;
                    &#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup tag=&#x22;div&#x22; className=&#x22;list-group&#x22;&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action active&#x22; ariaCurrent=&#x22;true&#x22;&#x3E;
                        &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
                            &#x3C;small&#x3E;3 days ago&#x3C;/small&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Some placeholder content in a paragraph.&#x3C;/p&#x3E;
                        &#x3C;small&#x3E;And some small print.&#x3C;/small&#x3E;
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action&#x22;&#x3E;
                        &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
                            &#x3C;small class=&#x22;text-muted&#x22;&#x3E;3 days ago&#x3C;/small&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Some placeholder content in a paragraph.&#x3C;/p&#x3E;
                        &#x3C;small class=&#x22;text-muted&#x22;&#x3E;And some muted small print.&#x3C;/small&#x3E;
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;a&#x22; href=&#x22;#&#x22; contentClass=&#x22;list-group-item list-group-item-action&#x22;&#x3E;
                        &#x3C;div class=&#x22;d-flex w-100 justify-content-between&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;mb-1&#x22;&#x3E;List group item heading&#x3C;/h5&#x3E;
                            &#x3C;small class=&#x22;text-muted&#x22;&#x3E;3 days ago&#x3C;/small&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;p class=&#x22;mb-1&#x22;&#x3E;Some placeholder content in a paragraph.&#x3C;/p&#x3E;
                        &#x3C;small class=&#x22;text-muted&#x22;&#x3E;And some muted small print.&#x3C;/small&#x3E;
                    &#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;listgroup tag=&#x22;div&#x22; className=&#x22;list-group&#x22;&#x3E;
                    &#x3C;list-content tag=&#x22;label&#x22; contentClass=&#x22;list-group-item&#x22;&#x3E;
                        &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22;&#x3E;
                        First checkbox
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;label&#x22; contentClass=&#x22;list-group-item&#x22;&#x3E;
                        &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22;&#x3E;
                        Second checkbox
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;label&#x22; contentClass=&#x22;list-group-item&#x22;&#x3E;
                        &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22;&#x3E;
                        Third checkbox
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;label&#x22; contentClass=&#x22;list-group-item&#x22;&#x3E;
                        &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22;&#x3E;
                        Fourth checkbox
                    &#x3C;/list-content&#x3E;
                    &#x3C;list-content tag=&#x22;label&#x22; contentClass=&#x22;list-group-item&#x22;&#x3E;
                        &#x3C;input class=&#x22;form-check-input me-1&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22;&#x3E;
                        Fifth checkbox
                    &#x3C;/list-content&#x3E;
                &#x3C;/listgroup&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="modal">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Modal</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Modal" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Modal-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Modal-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Modal-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <div class="d-flex justify-content-between flex-wrap">
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalDefault">
                                                    Launch demo modal
                                                </button>
                                                <modal :tabindex="-1" id="exampleModalDefault" ariaLabelled="exampleModalDefaultLabel" ariaHidden="true" keyboard="true">
                                                    <model-header dismissable="true">
                                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    </model-header>
                                                    <model-body>
                                                    </model-body>
                                                    <model-footer>
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </model-footer>
                                                </modal>
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
                                                    Launch static backdrop modal
                                                </button>
                                                <modal :tabindex="-1" id="staticBackdropLive" ariaLabelled="staticBackdropLiveLabel" backdrop="static" ariaHidden="true">
                                                    <model-header dismissable="true">
                                                        <h5 class="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
                                                    </model-header>
                                                    <model-body>
                                                        <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                                                    </model-body>
                                                    <model-footer>
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Understood</button>
                                                    </model-footer>
                                                </modal>
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable" keyboard="true">
                                                    Vertically centered scrollable modal
                                                </button>
                                                <modal :tabindex="-1" id="exampleModalCenteredScrollable" title="Create Post" aria-labelledby="exampleModalCenteredScrollableLabel" aria-hidden="true" dialogClass="modal-dialog-centered modal-dialog-scrollable">
                                                    <model-header :dismissable="true">
                                                        <h5 class="modal-title" id="exampleModalCenteredScrollableLabel">Modal Title</h5>
                                                    </model-header>
                                                    <model-body>
                                                        <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                                                        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                                                        <p>This content should appear at the bottom after you scroll.</p>
                                                    </model-body>
                                                    <model-footer>
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </model-footer>
                                                </modal>
                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
                                                    Full screen
                                                </button>
                                                <modal id="exampleModalFullscreen" :tabindex="-1" title="Create Post" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true" dialogClass="modal-fullscreen">
                                                    <model-header :dismissable="true">
                                                        <h5 class="modal-title" id="exampleModalFullscreenLabel">Full screen modal!</h5>
                                                    </model-header>
                                                    <model-body>
                                                    </model-body>
                                                    <model-footer>
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </model-footer>
                                                </modal>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Modal-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div class=&#x22;d-flex justify-content-between flex-wrap&#x22;&#x3E;
                    &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22; data-bs-toggle=&#x22;modal&#x22; data-bs-target=&#x22;#exampleModalDefault&#x22;&#x3E;
                        Launch demo modal
                    &#x3C;/button&#x3E;
                    &#x3C;modal :tabindex=&#x22;-1&#x22; id=&#x22;exampleModalDefault&#x22; ariaLabelled=&#x22;exampleModalDefaultLabel&#x22; ariaHidden=&#x22;true&#x22; keyboard=&#x22;true&#x22;&#x3E;
                        &#x3C;model-header dismissable=&#x22;true&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalLabel&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
                        &#x3C;/model-header&#x3E;
                        &#x3C;model-body&#x3E;
                        &#x3C;/model-body&#x3E;
                        &#x3C;model-footer&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-bs-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
                        &#x3C;/model-footer&#x3E;
                    &#x3C;/modal&#x3E;
                    &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22; data-bs-toggle=&#x22;modal&#x22; data-bs-target=&#x22;#staticBackdropLive&#x22;&#x3E;
                        Launch static backdrop modal
                    &#x3C;/button&#x3E;
                    &#x3C;modal :tabindex=&#x22;-1&#x22; id=&#x22;staticBackdropLive&#x22; ariaLabelled=&#x22;staticBackdropLiveLabel&#x22; backdrop=&#x22;static&#x22; ariaHidden=&#x22;true&#x22;&#x3E;
                        &#x3C;model-header dismissable=&#x22;true&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;staticBackdropLiveLabel&#x22;&#x3E;Modal title&#x3C;/h5&#x3E;
                        &#x3C;/model-header&#x3E;
                        &#x3C;model-body&#x3E;
                            &#x3C;p&#x3E;I will not close if you click outside me. Don&#x27;t even try to press escape key.&#x3C;/p&#x3E;
                        &#x3C;/model-body&#x3E;
                        &#x3C;model-footer&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-bs-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Understood&#x3C;/button&#x3E;
                        &#x3C;/model-footer&#x3E;
                    &#x3C;/modal&#x3E;
                    &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22; data-bs-toggle=&#x22;modal&#x22; data-bs-target=&#x22;#exampleModalCenteredScrollable&#x22; keyboard=&#x22;true&#x22;&#x3E;
                        Vertically centered scrollable modal
                    &#x3C;/button&#x3E;
                    &#x3C;modal :tabindex=&#x22;-1&#x22; id=&#x22;exampleModalCenteredScrollable&#x22; title=&#x22;Create Post&#x22; aria-labelledby=&#x22;exampleModalCenteredScrollableLabel&#x22; aria-hidden=&#x22;true&#x22; dialogClass=&#x22;modal-dialog-centered modal-dialog-scrollable&#x22;&#x3E;
                        &#x3C;model-header :dismissable=&#x22;true&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalCenteredScrollableLabel&#x22;&#x3E;Modal Title&#x3C;/h5&#x3E;
                        &#x3C;/model-header&#x3E;
                        &#x3C;model-body&#x3E;
                            &#x3C;p&#x3E;This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.&#x3C;/p&#x3E;
                            &#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;&#x3C;br&#x3E;
                            &#x3C;p&#x3E;This content should appear at the bottom after you scroll.&#x3C;/p&#x3E;
                        &#x3C;/model-body&#x3E;
                        &#x3C;model-footer&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-bs-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Save changes&#x3C;/button&#x3E;
                        &#x3C;/model-footer&#x3E;
                    &#x3C;/modal&#x3E;
                    &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22; data-bs-toggle=&#x22;modal&#x22; data-bs-target=&#x22;#exampleModalFullscreen&#x22;&#x3E;
                        Full screen
                    &#x3C;/button&#x3E;
                    &#x3C;modal id=&#x22;exampleModalFullscreen&#x22; :tabindex=&#x22;-1&#x22; title=&#x22;Create Post&#x22; aria-labelledby=&#x22;exampleModalFullscreenLabel&#x22; aria-hidden=&#x22;true&#x22; dialogClass=&#x22;modal-fullscreen&#x22;&#x3E;
                        &#x3C;model-header :dismissable=&#x22;true&#x22;&#x3E;
                            &#x3C;h5 class=&#x22;modal-title&#x22; id=&#x22;exampleModalFullscreenLabel&#x22;&#x3E;Full screen modal!&#x3C;/h5&#x3E;
                        &#x3C;/model-header&#x3E;
                        &#x3C;model-body&#x3E;
                        &#x3C;/model-body&#x3E;
                        &#x3C;model-footer&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-secondary&#x22; data-bs-dismiss=&#x22;modal&#x22;&#x3E;Close&#x3C;/button&#x3E;
                        &#x3C;/model-footer&#x3E;
                    &#x3C;/modal&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    </article>
                    <article id="navs">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Navs</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Navsandtabs" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Navs-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Navs-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Navs-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <tab-nav>
                                                <tab-nav-items :active="true" href="#"><template v-slot:title>Active</template></tab-nav-items>
                                                <tab-nav-items  href="#"><template v-slot:title>Link</template></tab-nav-items>
                                                <tab-nav-items  href="#"><template v-slot:title>Link</template></tab-nav-items>
                                                <tab-nav-items  aClass="disabled" tabindex="-1" href="#"><template v-slot:title>Disable</template></tab-nav-items>
                                            </tab-nav>
                                        </div>

                                        <div class="bd-example">
                                            <nav>
                                                <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                                                    <button class="nav-link active d-flex align-items-center" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                                                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                                                </div>
                                            </nav>
                                            <tab-content id="nav-tabContent">
                                                <tab-content-item :active="true" id="nav-home" ariaLabelledBy="nav-home-tab">
                                                    <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                                </tab-content-item>
                                                <tab-content-item id="nav-profile" ariaLabelledBy="nav-profile-tab">
                                                    <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                                </tab-content-item>
                                                <tab-content-item id="nav-contact" ariaLabelledBy="nav-contact-tab">
                                                    <p><strong>This is some placeholder content the Home tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                                                </tab-content-item>
                                            </tab-content>
                                        </div>

                                        <div class="bd-example">
                                            <tab-nav pills="true" data-bs-toggle="slider-tab" role="tablist">
                                                <tab-nav-items liClass="nav-item" mainRole="presentation" id="pills-home" :active="true" innerTag="button" aClass="d-flex align-items-center" dataToggle="tab" type="button" role="tab" target="#pills-home-tab1" ariaControls="home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                                                <tab-nav-items liClass="nav-item" id="pills-profile" innerTag="button" mainRole="presentation" aClass="d-flex align-items-center" dataToggle="tab" type="button" role="tab" target="#pills-profile-tab1" ariaControls="profile" ariaSelected="false"><template v-slot:title>Profile</template></tab-nav-items>
                                                <tab-nav-items liClass="nav-item" innerTag="button" id="content-tab" mainRole="presentation" aClass="d-flex align-items-center" dataToggle="tab" type="button" role="tab" target="#pills-contact-tab1" ariaControls="contact" ariaSelected="false"><template v-slot:title>Contact</template></tab-nav-items>
                                            </tab-nav>
                                            <tab-content>
                                                <tab-content-item :active="true" id="pills-home-tab1"
                                                    ariaLabelledBy="pills-home">
                                                    <p>
                                                        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                                        stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                                                        williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                        dreamcatcher synth.
                                                    </p>
                                                    <p>
                                                        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                                        stumptown aliqua, retro synth master cleanse.
                                                    </p>
                                                </tab-content-item>
                                                <tab-content-item  id="pills-profile-tab1"
                                                    ariaLabelledBy="pills-profile">
                                                    <p>
                                                        Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
                                                        salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher
                                                        voluptate nisi qui.
                                                    </p>
                                                </tab-content-item>
                                                <tab-content-item id="pills-contact-tab1"
                                                    ariaLabelledBy="content-tab">
                                                    <p>
                                                        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                                        stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
                                                        williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
                                                        dreamcatcher synth.
                                                    </p>
                                                    <p>
                                                        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu
                                                        stumptown aliqua, retro synth master cleanse.
                                                    </p>
                                                </tab-content-item>
                                            </tab-content>
                                        </div>

                                        <div class="bd-example">
                                            <tab-nav pills="true">
                                                <tab-nav-items liClass="nav-item" :active="true" href="#"><template v-slot:title>Active</template></tab-nav-items>
                                                <tab-nav-items liClass="nav-item" href="#"><template v-slot:title>Link</template></tab-nav-items>
                                                <tab-nav-items liClass="nav-item" href="#"><template v-slot:title>Link</template></tab-nav-items>
                                                <tab-nav-items liClass="nav-item" aClass="disabled" tabindex="-1" href="#"><template v-slot:title>Disable</template></tab-nav-items>
                                            </tab-nav>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Navs-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;tab-nav&#x3E;
                    &#x3C;tab-nav-items :active=&#x22;true&#x22; href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Active&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                    &#x3C;tab-nav-items href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Link&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                    &#x3C;tab-nav-items href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Link&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                    &#x3C;tab-nav-items aClass=&#x22;disabled&#x22; tabindex=&#x22;-1&#x22; href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Disable&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                &#x3C;/tab-nav&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;nav&#x3E;
                    &#x3C;div class=&#x22;nav nav-tabs mb-3&#x22; id=&#x22;nav-tab&#x22; role=&#x22;tablist&#x22;&#x3E;
                        &#x3C;button class=&#x22;nav-link active d-flex align-items-center&#x22; id=&#x22;nav-home-tab&#x22; data-bs-toggle=&#x22;tab&#x22; data-bs-target=&#x22;#nav-home&#x22; type=&#x22;button&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;nav-home&#x22; aria-selected=&#x22;true&#x22;&#x3E;Home&#x3C;/button&#x3E;
                        &#x3C;button class=&#x22;nav-link&#x22; id=&#x22;nav-profile-tab&#x22; data-bs-toggle=&#x22;tab&#x22; data-bs-target=&#x22;#nav-profile&#x22; type=&#x22;button&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;nav-profile&#x22; aria-selected=&#x22;false&#x22;&#x3E;Profile&#x3C;/button&#x3E;
                        &#x3C;button class=&#x22;nav-link&#x22; id=&#x22;nav-contact-tab&#x22; data-bs-toggle=&#x22;tab&#x22; data-bs-target=&#x22;#nav-contact&#x22; type=&#x22;button&#x22; role=&#x22;tab&#x22; aria-controls=&#x22;nav-contact&#x22; aria-selected=&#x22;false&#x22;&#x3E;Contact&#x3C;/button&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/nav&#x3E;
                &#x3C;tab-content id=&#x22;nav-tabContent&#x22;&#x3E;
                    &#x3C;tab-content-item :active=&#x22;true&#x22; id=&#x22;nav-home&#x22; ariaLabelledBy=&#x22;nav-home-tab&#x22;&#x3E;
                        &#x3C;p&#x3E;&#x3C;strong&#x3E;This is some placeholder content the Home tab&#x27;s associated content.&#x3C;/strong&#x3E; Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &#x3C;code&#x3E;.nav&#x3C;/code&#x3E;-powered navigation.&#x3C;/p&#x3E;
                    &#x3C;/tab-content-item&#x3E;
                    &#x3C;tab-content-item id=&#x22;nav-profile&#x22; ariaLabelledBy=&#x22;nav-profile-tab&#x22;&#x3E;
                        &#x3C;p&#x3E;&#x3C;strong&#x3E;This is some placeholder content the Home tab&#x27;s associated content.&#x3C;/strong&#x3E; Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &#x3C;code&#x3E;.nav&#x3C;/code&#x3E;-powered navigation.&#x3C;/p&#x3E;
                    &#x3C;/tab-content-item&#x3E;
                    &#x3C;tab-content-item id=&#x22;nav-contact&#x22; ariaLabelledBy=&#x22;nav-contact-tab&#x22;&#x3E;
                        &#x3C;p&#x3E;&#x3C;strong&#x3E;This is some placeholder content the Home tab&#x27;s associated content.&#x3C;/strong&#x3E; Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other &#x3C;code&#x3E;.nav&#x3C;/code&#x3E;-powered navigation.&#x3C;/p&#x3E;
                    &#x3C;/tab-content-item&#x3E;
                &#x3C;/tab-content&#x3E;
            &#x3C;/div&#x3E;

           &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;tab-nav pills=&#x22;true&#x22;&#x3E;
                    &#x3C;tab-nav-items liClass=&#x22;nav-item&#x22; :active=&#x22;true&#x22; href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Active&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                    &#x3C;tab-nav-items liClass=&#x22;nav-item&#x22; href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Link&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                    &#x3C;tab-nav-items liClass=&#x22;nav-item&#x22; href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Link&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                    &#x3C;tab-nav-items liClass=&#x22;nav-item&#x22; aClass=&#x22;disabled&#x22; tabindex=&#x22;-1&#x22; href=&#x22;#&#x22;&#x3E;&#x3C;template v-slot:title&#x3E;Disable&#x3C;/template&#x3E;&#x3C;/tab-nav-items&#x3E;
                &#x3C;/tab-nav&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="navbar">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Navbar</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Navbar" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Navbar-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Navbar-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Navbar-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <navbar className="navbar-expand-lg navbar-light bg-light">
                                                <navbar-item className="container-fluid">
                                                    <navbar-content className="navbar-brand" href="#">
                                                        Logo
                                                    </navbar-content>
                                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                        <span class="navbar-toggler-icon"></span>
                                                    </button>
                                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Link</a>
                                                            </li>
                                                            <li class="nav-item dropdown">
                                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Dropdown
                                                                </a>
                                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                    <li><hr class="dropdown-divider"></li>
                                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                                            </li>
                                                        </ul>
                                                        <form class="d-flex">
                                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                                            <button class="btn btn-outline-dark" type="submit">Search</button>
                                                        </form>
                                                    </div>
                                                </navbar-item>
                                            </navbar>

                                            <navbar className="navbar-expand-lg navbar-dark bg-primary rounded-1 mt-5">
                                                <navbar-item className="container-fluid">
                                                    <navbar-content className="navbar-brand" href="#">Logo</navbar-content>
                                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false"
                                                        aria-label="Toggle navigation">
                                                        <span class="navbar-toggler-icon"></span>
                                                    </button>
                                                    <div class="collapse navbar-collapse" id="navbar-1">
                                                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Link</a>
                                                            </li>
                                                            <li class="nav-item dropdown">
                                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    Dropdown
                                                                </a>
                                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                    <li class="px-3">
                                                                        <hr class="dropdown-divider">
                                                                    </li>
                                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </navbar-item>
                                            </navbar>

                                            <navbar className="navbar-expand-lg navbar-dark bg-danger rounded-1 mt-5">
                                                <navbar-item className="container-fluid">
                                                    <navbar-content className="navbar-brand" href="#">Logo</navbar-content>
                                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#navbar-2" aria-controls="navbar-2" aria-expanded="false"
                                                        aria-label="Toggle navigation">
                                                        <span class="navbar-toggler-icon"></span>
                                                    </button>
                                                    <div class="collapse navbar-collapse" id="navbar-2">
                                                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                                            <li class="nav-item">
                                                                <a class="nav-link active" aria-current="page" href="#">
                                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
                                                                            fill="#fff" />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">
                                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M17.1801 4.41C17.1801 3.08 18.2601 2 19.5901 2C20.9201 2 22.0001 3.08 22.0001 4.41C22.0001 5.74 20.9201 6.82 19.5901 6.82C18.2601 6.82 17.1801 5.74 17.1801 4.41ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z"
                                                                            fill="#fff" />
                                                                    </svg>
                                                                </a>
                                                            </li>
                                                            <li class="nav-item dropdown">
                                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M6.11304 4.5H11.9051C14.3271 4.5 16.0181 6.16904 16.0181 8.56091V15.4391C16.0181 17.831 14.3271 19.5 11.9051 19.5H6.11304C3.69102 19.5 2 17.831 2 15.4391V8.56091C2 6.16904 3.69102 4.5 6.11304 4.5ZM19.958 6.87898C20.397 6.65563 20.912 6.67898 21.331 6.94294C21.75 7.20589 22 7.66274 22 8.16223V15.8384C22 16.3389 21.75 16.7947 21.331 17.0577C21.102 17.2008 20.846 17.2739 20.588 17.2739C20.373 17.2739 20.158 17.2231 19.957 17.1206L18.476 16.3734C17.928 16.0952 17.588 15.5369 17.588 14.9165V9.08305C17.588 8.46173 17.928 7.90335 18.476 7.62721L19.958 6.87898Z"
                                                                            fill="#fff" />
                                                                    </svg>
                                                                </a>
                                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                                    <li class="px-3">
                                                                        <hr class="dropdown-divider">
                                                                    </li>
                                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </navbar-item>
                                            </navbar>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Navbar-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;navbar className=&#x22;navbar-expand-lg navbar-light bg-light&#x22;&#x3E;
                    &#x3C;navbar-item className=&#x22;container-fluid&#x22;&#x3E;
                        &#x3C;navbar-content className=&#x22;navbar-brand&#x22; href=&#x22;#&#x22;&#x3E;
                            Logo
                        &#x3C;/navbar-content&#x3E;
                        &#x3C;button class=&#x22;navbar-toggler&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;collapse&#x22; data-bs-target=&#x22;#navbarSupportedContent&#x22; aria-controls=&#x22;navbarSupportedContent&#x22; aria-expanded=&#x22;false&#x22; aria-label=&#x22;Toggle navigation&#x22;&#x3E;
                            &#x3C;span class=&#x22;navbar-toggler-icon&#x22;&#x3E;&#x3C;/span&#x3E;
                        &#x3C;/button&#x3E;
                        &#x3C;div class=&#x22;collapse navbar-collapse&#x22; id=&#x22;navbarSupportedContent&#x22;&#x3E;
                            &#x3C;ul class=&#x22;navbar-nav me-auto mb-2 mb-lg-0&#x22;&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link active&#x22; aria-current=&#x22;page&#x22; href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#&#x22;&#x3E;Link&#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item dropdown&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link dropdown-toggle&#x22; href=&#x22;#&#x22; id=&#x22;navbarDropdown&#x22; role=&#x22;button&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                                        Dropdown
                                    &#x3C;/a&#x3E;
                                    &#x3C;ul class=&#x22;dropdown-menu&#x22; aria-labelledby=&#x22;navbarDropdown&#x22;&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                    &#x3C;/ul&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link disabled&#x22; href=&#x22;#&#x22; tabindex=&#x22;-1&#x22; aria-disabled=&#x22;true&#x22;&#x3E;Disabled&#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                            &#x3C;form class=&#x22;d-flex&#x22;&#x3E;
                                &#x3C;input class=&#x22;form-control me-2&#x22; type=&#x22;search&#x22; placeholder=&#x22;Search&#x22; aria-label=&#x22;Search&#x22;&#x3E;
                                &#x3C;button class=&#x22;btn btn-outline-dark&#x22; type=&#x22;submit&#x22;&#x3E;Search&#x3C;/button&#x3E;
                            &#x3C;/form&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/navbar-item&#x3E;
                &#x3C;/navbar&#x3E;

                &#x3C;navbar className=&#x22;navbar-expand-lg navbar-dark bg-primary rounded-1 mt-5&#x22;&#x3E;
                    &#x3C;navbar-item className=&#x22;container-fluid&#x22;&#x3E;
                        &#x3C;navbar-content className=&#x22;navbar-brand&#x22; href=&#x22;#&#x22;&#x3E;Logo&#x3C;/navbar-content&#x3E;
                        &#x3C;button class=&#x22;navbar-toggler&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;collapse&#x22;
                            data-bs-target=&#x22;#navbar-1&#x22; aria-controls=&#x22;navbar-1&#x22; aria-expanded=&#x22;false&#x22;
                            aria-label=&#x22;Toggle navigation&#x22;&#x3E;
                            &#x3C;span class=&#x22;navbar-toggler-icon&#x22;&#x3E;&#x3C;/span&#x3E;
                        &#x3C;/button&#x3E;
                        &#x3C;div class=&#x22;collapse navbar-collapse&#x22; id=&#x22;navbar-1&#x22;&#x3E;
                            &#x3C;ul class=&#x22;navbar-nav ms-auto mb-2 mb-lg-0&#x22;&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link active&#x22; aria-current=&#x22;page&#x22; href=&#x22;#&#x22;&#x3E;Home&#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#&#x22;&#x3E;Link&#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item dropdown&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link dropdown-toggle&#x22; href=&#x22;#&#x22; id=&#x22;navbarDropdown&#x22;
                                        role=&#x22;button&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                                        Dropdown
                                    &#x3C;/a&#x3E;
                                    &#x3C;ul class=&#x22;dropdown-menu dropdown-menu-end&#x22; aria-labelledby=&#x22;navbarDropdown&#x22;&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li class=&#x22;px-3&#x22;&#x3E;
                                            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
                                        &#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                    &#x3C;/ul&#x3E;
                                &#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/navbar-item&#x3E;
                &#x3C;/navbar&#x3E;

                &#x3C;navbar className=&#x22;navbar-expand-lg navbar-dark bg-danger rounded-1 mt-5&#x22;&#x3E;
                    &#x3C;navbar-item className=&#x22;container-fluid&#x22;&#x3E;
                        &#x3C;navbar-content className=&#x22;navbar-brand&#x22; href=&#x22;#&#x22;&#x3E;Logo&#x3C;/navbar-content&#x3E;
                        &#x3C;button class=&#x22;navbar-toggler&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;collapse&#x22;
                            data-bs-target=&#x22;#navbar-2&#x22; aria-controls=&#x22;navbar-2&#x22; aria-expanded=&#x22;false&#x22;
                            aria-label=&#x22;Toggle navigation&#x22;&#x3E;
                            &#x3C;span class=&#x22;navbar-toggler-icon&#x22;&#x3E;&#x3C;/span&#x3E;
                        &#x3C;/button&#x3E;
                        &#x3C;div class=&#x22;collapse navbar-collapse&#x22; id=&#x22;navbar-2&#x22;&#x3E;
                            &#x3C;ul class=&#x22;navbar-nav ms-auto mb-2 mb-lg-0&#x22;&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link active&#x22; aria-current=&#x22;page&#x22; href=&#x22;#&#x22;&#x3E;
                                        &#x3C;svg width=&#x22;32&#x22; height=&#x22;32&#x22; viewBox=&#x22;0 0 24 24&#x22; fill=&#x22;none&#x22;
                                            xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
                                            &#x3C;path fill-rule=&#x22;evenodd&#x22; clip-rule=&#x22;evenodd&#x22;
                                                d=&#x22;M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z&#x22;
                                                fill=&#x22;#fff&#x22; /&#x3E;
                                        &#x3C;/svg&#x3E;
                                    &#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link&#x22; href=&#x22;#&#x22;&#x3E;
                                        &#x3C;svg width=&#x22;32&#x22; height=&#x22;32&#x22; viewBox=&#x22;0 0 24 24&#x22; fill=&#x22;none&#x22;
                                            xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
                                            &#x3C;path fill-rule=&#x22;evenodd&#x22; clip-rule=&#x22;evenodd&#x22;
                                                d=&#x22;M17.1801 4.41C17.1801 3.08 18.2601 2 19.5901 2C20.9201 2 22.0001 3.08 22.0001 4.41C22.0001 5.74 20.9201 6.82 19.5901 6.82C18.2601 6.82 17.1801 5.74 17.1801 4.41ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34 10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651 9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811 11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58 15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571 16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41 4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45 8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903 18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z&#x22;
                                                fill=&#x22;#fff&#x22; /&#x3E;
                                        &#x3C;/svg&#x3E;
                                    &#x3C;/a&#x3E;
                                &#x3C;/li&#x3E;
                                &#x3C;li class=&#x22;nav-item dropdown&#x22;&#x3E;
                                    &#x3C;a class=&#x22;nav-link dropdown-toggle&#x22; href=&#x22;#&#x22; id=&#x22;navbarDropdown&#x22;
                                        role=&#x22;button&#x22; data-bs-toggle=&#x22;dropdown&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                                        &#x3C;svg width=&#x22;32&#x22; height=&#x22;32&#x22; viewBox=&#x22;0 0 24 24&#x22; fill=&#x22;none&#x22;
                                            xmlns=&#x22;http://www.w3.org/2000/svg&#x22;&#x3E;
                                            &#x3C;path fill-rule=&#x22;evenodd&#x22; clip-rule=&#x22;evenodd&#x22;
                                                d=&#x22;M6.11304 4.5H11.9051C14.3271 4.5 16.0181 6.16904 16.0181 8.56091V15.4391C16.0181 17.831 14.3271 19.5 11.9051 19.5H6.11304C3.69102 19.5 2 17.831 2 15.4391V8.56091C2 6.16904 3.69102 4.5 6.11304 4.5ZM19.958 6.87898C20.397 6.65563 20.912 6.67898 21.331 6.94294C21.75 7.20589 22 7.66274 22 8.16223V15.8384C22 16.3389 21.75 16.7947 21.331 17.0577C21.102 17.2008 20.846 17.2739 20.588 17.2739C20.373 17.2739 20.158 17.2231 19.957 17.1206L18.476 16.3734C17.928 16.0952 17.588 15.5369 17.588 14.9165V9.08305C17.588 8.46173 17.928 7.90335 18.476 7.62721L19.958 6.87898Z&#x22;
                                                fill=&#x22;#fff&#x22; /&#x3E;
                                        &#x3C;/svg&#x3E;
                                    &#x3C;/a&#x3E;
                                    &#x3C;ul class=&#x22;dropdown-menu dropdown-menu-end&#x22; aria-labelledby=&#x22;navbarDropdown&#x22;&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Another action&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                        &#x3C;li class=&#x22;px-3&#x22;&#x3E;
                                            &#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;
                                        &#x3C;/li&#x3E;
                                        &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#&#x22;&#x3E;Something else here&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                    &#x3C;/ul&#x3E;
                                &#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/navbar-item&#x3E;
                &#x3C;/navbar&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="off-canvas">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Off Canvas</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Offcanvas" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Offcanvas-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Offcanvas-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-Offcanvas-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <button class="btn btn-primary me-3 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                                            aria-controls="offcanvasTop">Toggle top offcanvas</button>
                                        <offcanvas mainClass="top" :tabindex="-1" id="offcanvasTop" ariaLabelled="offcanvasTopLabel">
                                            <offcanvas-header :dismissable="true">
                                                <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                                            </offcanvas-header>
                                            <offcanvas-body>
                                                ...
                                            </offcanvas-body>
                                        </offcanvas>

                                        <button class="btn btn-primary me-3 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight">Toggle right offcanvas</button>
                                         <offcanvas mainClass="end" :tabindex="1" id="offcanvasRight" ariaLabelled="offcanvasRightLabel">
                                            <offcanvas-header :dismissable="true">
                                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas Right</h5>
                                            </offcanvas-header>
                                            <offcanvas-body bodyClass="small">
                                                ...
                                            </offcanvas-body>
                                        </offcanvas>

                                        <button class="btn btn-primary me-3 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                                            aria-controls="offcanvasBottom">Toggle bottom offcanvas</button>
                                        <offcanvas mainClass="bottom" :tabindex="-1" id="offcanvasBottom" ariaLabelled="offcanvasBottomLabel">
                                            <offcanvas-header dismissable="true">
                                                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                                            </offcanvas-header>
                                            <offcanvas-body bodyClass="small">
                                                ...
                                            </offcanvas-body>
                                        </offcanvas>

                                        <button class="btn btn-primary me-3 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft"
                                            aria-controls="offcanvasLeft">Toggle left offcanvas</button>
                                        <offcanvas mainClass="start" :tabindex="-1" id="offcanvasLeft" ariaLabelled="offcanvasLeftLabel">
                                            <offcanvas-header dismissable="true">
                                                <h5 class="offcanvas-title" id="offcanvasLeftLabel">Offcanvas Left</h5>
                                            </offcanvas-header>
                                            <offcanvas-body bodyClass="small">
                                                ...
                                            </offcanvas-body>
                                        </offcanvas>

                                        <button class="btn btn-primary me-3 mb-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScroll"
                                            aria-controls="offcanvasScroll">Toggle Scroll offcanvas</button>
                                        <offcanvas mainClass="start" :tabindex="-1" id="offcanvasScroll" Scroll=true ariaLabelled="offcanvasScrollLabel">
                                            <offcanvas-header dismissable="true">
                                                <h5 class="offcanvas-title" id="offcanvasScrollLabel">Offcanvas Scroll</h5>
                                            </offcanvas-header>
                                            <offcanvas-body bodyClass="small">
                                                ...
                                            </offcanvas-body>
                                        </offcanvas>

                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-Offcanvas-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">    &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;button class=&#x22;btn btn-primary me-3 mb-3&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;offcanvas&#x22; data-bs-target=&#x22;#offcanvasTop&#x22;
                aria-controls=&#x22;offcanvasTop&#x22;&#x3E;Toggle top offcanvas&#x3C;/button&#x3E;
            &#x3C;offcanvas mainClass=&#x22;top&#x22; :tabindex=&#x22;-1&#x22; id=&#x22;offcanvasTop&#x22; ariaLabelled=&#x22;offcanvasTopLabel&#x22;&#x3E;
                &#x3C;offcanvas-header :dismissable=&#x22;true&#x22;&#x3E;
                    &#x3C;h5 id=&#x22;offcanvasTopLabel&#x22;&#x3E;Offcanvas top&#x3C;/h5&#x3E;
                &#x3C;/offcanvas-header&#x3E;
                &#x3C;offcanvas-body&#x3E;
                    ...
                &#x3C;/offcanvas-body&#x3E;
            &#x3C;/offcanvas&#x3E;

            &#x3C;button class=&#x22;btn btn-primary me-3 mb-3&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;offcanvas&#x22; data-bs-target=&#x22;#offcanvasRight&#x22;
                aria-controls=&#x22;offcanvasRight&#x22;&#x3E;Toggle right offcanvas&#x3C;/button&#x3E;
                &#x3C;offcanvas mainClass=&#x22;end&#x22; :tabindex=&#x22;1&#x22; id=&#x22;offcanvasRight&#x22; ariaLabelled=&#x22;offcanvasRightLabel&#x22;&#x3E;
                &#x3C;offcanvas-header :dismissable=&#x22;true&#x22;&#x3E;
                    &#x3C;h5 class=&#x22;offcanvas-title&#x22; id=&#x22;offcanvasRightLabel&#x22;&#x3E;Offcanvas Right&#x3C;/h5&#x3E;
                &#x3C;/offcanvas-header&#x3E;
                &#x3C;offcanvas-body bodyClass=&#x22;small&#x22;&#x3E;
                    ...
                &#x3C;/offcanvas-body&#x3E;
            &#x3C;/offcanvas&#x3E;

            &#x3C;button class=&#x22;btn btn-primary me-3 mb-3&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;offcanvas&#x22; data-bs-target=&#x22;#offcanvasBottom&#x22;
                aria-controls=&#x22;offcanvasBottom&#x22;&#x3E;Toggle bottom offcanvas&#x3C;/button&#x3E;
            &#x3C;offcanvas mainClass=&#x22;bottom&#x22; :tabindex=&#x22;-1&#x22; id=&#x22;offcanvasBottom&#x22; ariaLabelled=&#x22;offcanvasBottomLabel&#x22;&#x3E;
                &#x3C;offcanvas-header dismissable=&#x22;true&#x22;&#x3E;
                    &#x3C;h5 class=&#x22;offcanvas-title&#x22; id=&#x22;offcanvasBottomLabel&#x22;&#x3E;Offcanvas bottom&#x3C;/h5&#x3E;
                &#x3C;/offcanvas-header&#x3E;
                &#x3C;offcanvas-body bodyClass=&#x22;small&#x22;&#x3E;
                    ...
                &#x3C;/offcanvas-body&#x3E;
            &#x3C;/offcanvas&#x3E;

            &#x3C;button class=&#x22;btn btn-primary me-3 mb-3&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;offcanvas&#x22; data-bs-target=&#x22;#offcanvasLeft&#x22;
                aria-controls=&#x22;offcanvasLeft&#x22;&#x3E;Toggle left offcanvas&#x3C;/button&#x3E;
            &#x3C;offcanvas mainClass=&#x22;start&#x22; :tabindex=&#x22;-1&#x22; id=&#x22;offcanvasLeft&#x22; ariaLabelled=&#x22;offcanvasLeftLabel&#x22;&#x3E;
                &#x3C;offcanvas-header dismissable=&#x22;true&#x22;&#x3E;
                    &#x3C;h5 class=&#x22;offcanvas-title&#x22; id=&#x22;offcanvasLeftLabel&#x22;&#x3E;Offcanvas Left&#x3C;/h5&#x3E;
                &#x3C;/offcanvas-header&#x3E;
                &#x3C;offcanvas-body bodyClass=&#x22;small&#x22;&#x3E;
                    ...
                &#x3C;/offcanvas-body&#x3E;
            &#x3C;/offcanvas&#x3E;

            &#x3C;button class=&#x22;btn btn-primary me-3 mb-3&#x22; type=&#x22;button&#x22; data-bs-toggle=&#x22;offcanvas&#x22; data-bs-target=&#x22;#offcanvasScroll&#x22;
                aria-controls=&#x22;offcanvasScroll&#x22;&#x3E;Toggle Scroll offcanvas&#x3C;/button&#x3E;
            &#x3C;offcanvas mainClass=&#x22;start&#x22; :tabindex=&#x22;-1&#x22; id=&#x22;offcanvasScroll&#x22; Scroll=true ariaLabelled=&#x22;offcanvasScrollLabel&#x22;&#x3E;
                &#x3C;offcanvas-header dismissable=&#x22;true&#x22;&#x3E;
                    &#x3C;h5 class=&#x22;offcanvas-title&#x22; id=&#x22;offcanvasScrollLabel&#x22;&#x3E;Offcanvas Scroll&#x3C;/h5&#x3E;
                &#x3C;/offcanvas-header&#x3E;
                &#x3C;offcanvas-body bodyClass=&#x22;small&#x22;&#x3E;
                    ...
                &#x3C;/offcanvas-body&#x3E;
            &#x3C;/offcanvas&#x3E;

        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="pagination">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Pagination</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Pagation" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Pagination-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Pagination-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Pagination-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <pagination ariaLabel="Pagination example" mainClass="pagination-sm">
                                                <pagination-content href="#">1</pagination-content>
                                                <pagination-content itemClass="active" href="#">2</pagination-content>
                                                <pagination-content href="#">3</pagination-content>
                                            </pagination>
                                        </div>

                                        <div class="bd-example">
                                        <pagination ariaLabel="Standard pagination example">
                                            <pagination-content href="#" label="Previous"><span aria-hidden="true">«</span></pagination-content>
                                            <pagination-content href="#">1</pagination-content>
                                            <pagination-content href="#">2</pagination-content>
                                            <pagination-content href="#">3</pagination-content>
                                            <pagination-content href="#" label="Next"><span aria-hidden="true">»</span></pagination-content>
                                        </pagination>
                                        </div>

                                        <div class="bd-example">
                                            <pagination ariaLabel="Another pagination example" mainClass="pagination-lg flex-wrap">
                                                <pagination-content href="#" tabindex="-1" itemClass="disabled" Disabled=true>Previous</pagination-content>
                                                <pagination-content href="#">1</pagination-content>
                                                <pagination-content itemClass="active" ariaCurrent="page" href="#">2</pagination-content>
                                                <pagination-content href="#">3</pagination-content>
                                                <pagination-content href="#">Next</pagination-content>
                                            </pagination>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Pagination-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;pagination ariaLabel=&#x22;Pagination example&#x22; mainClass=&#x22;pagination-sm&#x22;&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;1&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content itemClass=&#x22;active&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;3&#x3C;/pagination-content&#x3E;
                &#x3C;/pagination&#x3E;
            &#x3C;/div&#x3E;
             &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;pagination ariaLabel=&#x22;Standard pagination example&#x22;&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22; label=&#x22;Previous&#x22;&#x3E;&#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xAB;&#x3C;/span&#x3E;&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;1&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;2&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;3&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22; label=&#x22;Next&#x22;&#x3E;&#x3C;span aria-hidden=&#x22;true&#x22;&#x3E;&#xBB;&#x3C;/span&#x3E;&#x3C;/pagination-content&#x3E;
                &#x3C;/pagination&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;pagination ariaLabel=&#x22;Another pagination example&#x22; mainClass=&#x22;pagination-lg flex-wrap&#x22;&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22; tabindex=&#x22;-1&#x22; itemClass=&#x22;disabled&#x22; Disabled=true&#x3E;Previous&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;1&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content itemClass=&#x22;active&#x22; ariaCurrent=&#x22;page&#x22; href=&#x22;#&#x22;&#x3E;2&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;3&#x3C;/pagination-content&#x3E;
                    &#x3C;pagination-content href=&#x22;#&#x22;&#x3E;Next&#x3C;/pagination-content&#x3E;
                &#x3C;/pagination&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
            </div>

                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="popovers">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Popovers</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Popovers" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Popover-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Popover-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Popover-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <popover className="btn-danger" popoverContent="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover title" popoverTitle="">Click to toggle popover</popover>
                                        </div>
                                        <div class="bd-example">
                                            <popover className="btn-secondary" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="top" data-bs-original-title="" popoverTitle="" tabindex="0">Popover on Top</popover>
                                            <popover className="btn-secondary" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="right" data-bs-original-title="" popoverTitle="">Popover on Right</popover>
                                            <popover className="btn-secondary" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Bottom</popover>
                                            <popover className="btn-secondary" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Left</popover>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Popover-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">  &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;popover className=&#x22;btn-danger&#x22; popoverContent=&#x22;And here&#x27;s some amazing content. It&#x27;s very engaging. Right?&#x22; data-bs-original-title=&#x22;Popover title&#x22; popoverTitle=&#x22;&#x22;&#x3E;Click to toggle popover&#x3C;/popover&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;popover className=&#x22;btn-secondary&#x22; popoverContent=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22; popoverPlacement=&#x22;top&#x22; data-bs-original-title=&#x22;&#x22; popoverTitle=&#x22;&#x22; tabindex=&#x22;0&#x22;&#x3E;Popover on Top&#x3C;/popover&#x3E;
                &#x3C;popover className=&#x22;btn-secondary&#x22; popoverContent=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22; popoverPlacement=&#x22;right&#x22; data-bs-original-title=&#x22;&#x22; popoverTitle=&#x22;&#x22;&#x3E;Popover on Right&#x3C;/popover&#x3E;
                &#x3C;popover className=&#x22;btn-secondary&#x22; popoverContent=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22; popoverPlacement=&#x22;bottom&#x22; data-bs-original-title=&#x22;&#x22; popoverTitle=&#x22;&#x22;&#x3E;Popover on Bottom&#x3C;/popover&#x3E;
                &#x3C;popover className=&#x22;btn-secondary&#x22; popoverContent=&#x22;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&#x22; popoverPlacement=&#x22;bottom&#x22; data-bs-original-title=&#x22;&#x22; popoverTitle=&#x22;&#x22;&#x3E;Popover on Left&#x3C;/popover&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="progress">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Progress</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Progress" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-progress-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-progress-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-progress-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <progressbar pClass="mb-3">
                                                <progressfill ariavaluenow="0" ariavaluemin="0" ariavaluemax="100" Style="width: 33%">0%</progressfill>
                                            </progressbar>
                                            <progressbar pClass="mb-3">
                                                <progressfill ariavaluenow="25" ariavaluemin="0" ariavaluemax="100" className="bg-success w-25" Style="width: 33%">25%</progressfill>
                                            </progressbar>
                                            <progressbar pClass="mb-3">
                                                <progressfill ariavaluenow="50" ariavaluemin="0" ariavaluemax="100" className="bg-info text-dark w-50" Style="width: 33%">50%</progressfill>
                                            </progressbar>
                                            <progressbar pClass="mb-3">
                                                <progressfill ariavaluenow="75" ariavaluemin="0" ariavaluemax="100" className="bg-warning text-dark w-75" Style="width: 33%">75%</progressfill>
                                            </progressbar>
                                            <progressbar>
                                                <progressfill ariavaluenow="100" ariavaluemin="0" ariavaluemax="100" className="bg-danger w-100"  Style="width: 33%">100%</progressfill>
                                            </progressbar>
                                        </div>
                                        <div class="bd-example">
                                            <div class="wrapper-progress">
                                                <div class="percentage-progress d-flex justify-content-end">
                                                    <div><span>40%</span></div>
                                                </div>
                                            </div>
                                            <progressbar mainStyle="height:10px">
                                                <progressfill ariavaluenow="25" ariavaluemin="0" ariavaluemax="100" className="bg-danger progress-bar-striped" Style="width: 40%; height:10px"></progressfill>
                                            </progressbar>
                                            <div class="wrapper-progress mt-4">
                                                <div class="percentage-progress d-flex justify-content-end">
                                                    <div><span>40%</span></div>
                                                </div>
                                            </div>
                                            <progressbar mainStyle="height:10px">
                                                <progressfill ariavaluenow="25" ariavaluemin="0" ariavaluemax="100" className="bg-success progress-bar-striped" Style="width: 40%; height:10px"></progressfill>
                                            </progressbar>
                                            <div class="wrapper-progress mt-4">
                                                <div class="percentage-progress d-flex justify-content-end">
                                                    <div><span>40%</span></div>
                                                </div>
                                            </div>
                                            <progressbar mainStyle="height:10px">
                                                <progressfill ariavaluenow="25" ariavaluemin="0" ariavaluemax="100" className="bg-primary progress-bar-striped" Style="width: 40%; height:10px"></progressfill>
                                            </progressbar>
                                        </div>

                                        <div class="bd-example">
                                            <progressbar>
                                                <progressfill ariavaluenow="15" ariavaluemin="0" ariavaluemax="100" className="progress-bar-striped progress-bar-animated" Style="width: 15%"></progressfill>
                                                <progressfill ariavaluenow="40" ariavaluemin="0" ariavaluemax="100" className="progress-bar-striped progress-bar-animated bg-success" Style="width: 40%"></progressfill>
                                            </progressbar>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-progress-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;progressbar pClass=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;0&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; Style=&#x22;width: 33%&#x22;&#x3E;0%&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
                &#x3C;progressbar pClass=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;25&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-success w-25&#x22; Style=&#x22;width: 33%&#x22;&#x3E;25%&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
                &#x3C;progressbar pClass=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;50&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-info text-dark w-50&#x22; Style=&#x22;width: 33%&#x22;&#x3E;50%&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
                &#x3C;progressbar pClass=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;75&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-warning text-dark w-75&#x22; Style=&#x22;width: 33%&#x22;&#x3E;75%&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
                &#x3C;progressbar&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;100&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-danger w-100&#x22;  Style=&#x22;width: 33%&#x22;&#x3E;100%&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
            &#x3C;/div&#x3E;
             &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;div class=&#x22;wrapper-progress&#x22;&#x3E;
                    &#x3C;div class=&#x22;percentage-progress d-flex justify-content-end&#x22;&#x3E;
                        &#x3C;div&#x3E;&#x3C;span&#x3E;40%&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;progressbar mainStyle=&#x22;height:10px&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;25&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-danger progress-bar-striped&#x22; Style=&#x22;width: 40%; height:10px&#x22;&#x3E;&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
                &#x3C;div class=&#x22;wrapper-progress mt-4&#x22;&#x3E;
                    &#x3C;div class=&#x22;percentage-progress d-flex justify-content-end&#x22;&#x3E;
                        &#x3C;div&#x3E;&#x3C;span&#x3E;40%&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;progressbar mainStyle=&#x22;height:10px&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;25&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-success progress-bar-striped&#x22; Style=&#x22;width: 40%; height:10px&#x22;&#x3E;&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
                &#x3C;div class=&#x22;wrapper-progress mt-4&#x22;&#x3E;
                    &#x3C;div class=&#x22;percentage-progress d-flex justify-content-end&#x22;&#x3E;
                        &#x3C;div&#x3E;&#x3C;span&#x3E;40%&#x3C;/span&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;progressbar mainStyle=&#x22;height:10px&#x22;&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;25&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;bg-primary progress-bar-striped&#x22; Style=&#x22;width: 40%; height:10px&#x22;&#x3E;&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;progressbar&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;15&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;progress-bar-striped progress-bar-animated&#x22; Style=&#x22;width: 15%&#x22;&#x3E;&#x3C;/progressfill&#x3E;
                    &#x3C;progressfill ariavaluenow=&#x22;40&#x22; ariavaluemin=&#x22;0&#x22; ariavaluemax=&#x22;100&#x22; className=&#x22;progress-bar-striped progress-bar-animated bg-success&#x22; Style=&#x22;width: 40%&#x22;&#x3E;&#x3C;/progressfill&#x3E;
                &#x3C;/progressbar&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="scrollspy">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Scrollspy</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Scrollspy" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Scrollspy-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Scrollspy-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Scrollspy-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <scrollspy id="navbar-example2" className="navbar-light bg-light px-3">
                                                <a class="navbar-brand" href="#">Navbar</a>
                                                <scrollspy-nav className="nav-pills">
                                                    <scrollspy-navitem>
                                                        <a class="nav-link active" href="#scrollspyHeading1">First</a>
                                                    </scrollspy-navitem>
                                                    <scrollspy-navitem>
                                                        <a class="nav-link" href="#scrollspyHeading2">Second</a>
                                                    </scrollspy-navitem>
                                                    <scrollspy-navitem className="dropdown" innerClass="nav-link dropdown-toggle" DropdownToggle="dropdown" Link="#" role="button">
                                                         <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                                        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                                        <li><hr class="dropdown-divider"></li>
                                                        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                                    </ul>
                                                    </scrollspy-navitem>
                                                </scrollspy-nav>
                                            </scrollspy >
                                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                                            <h4 id="scrollspyHeading1">First heading</h4>
                                            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                            <h4 id="scrollspyHeading2">Second heading</h4>
                                            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                            <h4 id="scrollspyHeading3">Third heading</h4>
                                            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                            <h4 id="scrollspyHeading4">Fourth heading</h4>
                                            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                            <h4 id="scrollspyHeading5">Fifth heading</h4>
                                            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Scrollspy-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;scroll-nav id=&#x22;navbar-example2&#x22; className=&#x22;navbar-light bg-light px-3&#x22;&#x3E;
                    &#x3C;a class=&#x22;navbar-brand&#x22; href=&#x22;#&#x22;&#x3E;Navbar&#x3C;/a&#x3E;
                    &#x3C;spynav-content className=&#x22;nav-pills&#x22;&#x3E;
                        &#x3C;spynav-item innerClass=&#x22;nav-link active&#x22; Link=&#x22;#scrollspyHeading1&#x22;&#x3E;First&#x3C;/spynav-item&#x3E;
                        &#x3C;spynav-item innerClass=&#x22;nav-link&#x22; Link=&#x22;#scrollspyHeading2&#x22;&#x3E;Second&#x3C;/spynav-item&#x3E;
                        &#x3C;spynav-item className=&#x22;dropdown&#x22; innerClass=&#x22;nav-link dropdown-toggle&#x22; data-bs-toggle=&#x22;dropdown&#x22; Link=&#x22;#&#x22; role=&#x22;button&#x22; aria-expanded=&#x22;false&#x22;&#x3E;
                                dropdown
                            &#x3C;ul class=&#x22;dropdown-menu&#x22;&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#scrollspyHeading3&#x22;&#x3E;Third&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#scrollspyHeading4&#x22;&#x3E;Fourth&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;hr class=&#x22;dropdown-divider&#x22;&#x3E;&#x3C;/li&#x3E;
                                &#x3C;li&#x3E;&#x3C;a class=&#x22;dropdown-item&#x22; href=&#x22;#scrollspyHeading5&#x22;&#x3E;Fifth&#x3C;/a&#x3E;&#x3C;/li&#x3E;
                            &#x3C;/ul&#x3E;
                        &#x3C;/spynav-item&#x3E;
                    &#x3C;/spynav-content&#x3E;
                    &#x3C;div data-bs-spy=&#x22;scroll&#x22; data-bs-target=&#x22;#navbar-example2&#x22; data-bs-offset=&#x22;0&#x22; class=&#x22;scrollspy-example&#x22; tabindex=&#x22;0&#x22;&#x3E;
                        &#x3C;h4 id=&#x22;scrollspyHeading1&#x22;&#x3E;First heading&#x3C;/h4&#x3E;
                        &#x3C;p&#x3E;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#x27;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&#x3C;/p&#x3E;
                        &#x3C;h4 id=&#x22;scrollspyHeading2&#x22;&#x3E;Second heading&#x3C;/h4&#x3E;
                        &#x3C;p&#x3E;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#x27;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&#x3C;/p&#x3E;
                        &#x3C;h4 id=&#x22;scrollspyHeading3&#x22;&#x3E;Third heading&#x3C;/h4&#x3E;
                        &#x3C;p&#x3E;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#x27;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&#x3C;/p&#x3E;
                        &#x3C;h4 id=&#x22;scrollspyHeading4&#x22;&#x3E;Fourth heading&#x3C;/h4&#x3E;
                        &#x3C;p&#x3E;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#x27;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&#x3C;/p&#x3E;
                        &#x3C;h4 id=&#x22;scrollspyHeading5&#x22;&#x3E;Fifth heading&#x3C;/h4&#x3E;
                        &#x3C;p&#x3E;This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It&#x27;s repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.&#x3C;/p&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/scroll-nav&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="spinners">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Spinners</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Spinner" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Spinners-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Spinners-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Spinners-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <spinner className="spinner-border text-primary" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-secondary" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-success" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-danger" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-warning" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-info" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-light" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-border text-dark" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                        </div>
                                        <div class="bd-example">
                                            <spinner className="spinner-grow text-primary" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-secondary" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-success" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-danger" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-warning" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-info" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-light" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                            <spinner className="spinner-grow text-dark" role="status">
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </spinner>
                                        </div>
                                        <div class="bd-example">
                                            <buttons buttonClass="btn-primary" disabled>
                                                <spinner tag="span" className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></spinner>
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </buttons>
                                            <buttons buttonClass="btn-primary" disabled>
                                                <spinner tag="span" className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></spinner>
                                                Loading...
                                            </buttons>
                                            <buttons buttonClass="btn-primary" disabled>
                                                <spinner tag="span" className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></spinner>
                                                <spinnercontent className="visually-hidden">Loading...</spinnercontent>
                                            </buttons>
                                            <buttons buttonClass="btn-primary" disabled>
                                                <spinner tag="span" className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></spinner>
                                                Loading...
                                            </buttons>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Spinners-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-primary&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-secondary&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-success&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-danger&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-warning&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-info&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-light&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-border text-dark&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-primary&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-secondary&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-success&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-danger&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-warning&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-info&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-light&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
                &#x3C;spinner className=&#x22;spinner-grow text-dark&#x22; role=&#x22;status&#x22;&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/spinner&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;buttons buttonClass=&#x22;btn-primary&#x22; disabled&#x3E;
                    &#x3C;spinner tag=&#x22;span&#x22; className=&#x22;spinner-border spinner-border-sm&#x22; role=&#x22;status&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/spinner&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/buttons&#x3E;
                &#x3C;buttons buttonClass=&#x22;btn-primary&#x22; disabled&#x3E;
                    &#x3C;spinner tag=&#x22;span&#x22; className=&#x22;spinner-border spinner-border-sm&#x22; role=&#x22;status&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/spinner&#x3E;
                    Loading...
                &#x3C;/buttons&#x3E;
                &#x3C;buttons buttonClass=&#x22;btn-primary&#x22; disabled&#x3E;
                    &#x3C;spinner tag=&#x22;span&#x22; className=&#x22;spinner-grow spinner-grow-sm&#x22; role=&#x22;status&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/spinner&#x3E;
                    &#x3C;spinnercontent className=&#x22;visually-hidden&#x22;&#x3E;Loading...&#x3C;/spinnercontent&#x3E;
                &#x3C;/buttons&#x3E;
                &#x3C;buttons buttonClass=&#x22;btn-primary&#x22; disabled&#x3E;
                    &#x3C;spinner tag=&#x22;span&#x22; className=&#x22;spinner-grow spinner-grow-sm&#x22; role=&#x22;status&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x3C;/spinner&#x3E;
                    Loading...
                &#x3C;/buttons&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="toasts">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Toasts</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Toasts" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Toasts-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Toasts-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Toasts-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example bg-dark p-5 align-items-center">
                                            <toast className="fade show" ariaatomic="true">
                                                <toast-header :dismissable="true">
                                                    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
                                                    <strong class="me-auto">Bootstrap</strong>
                                                    <small class="text-muted">11 mins ago</small>
                                                </toast-header>
                                                <toast-body>
                                                    Hello, world! This is a toast message.
                                                </toast-body>
                                            </toast>
                                        </div>
                                        <div class="bd-example bg-dark p-5 align-items-center">
                                            <toast className="fade show align-items-center" ariaatomic="true">
                                                <div class="d-flex">
                                                    <toast-body>
                                                        Hello, world! This is a toast message.
                                                    </toast-body>
                                                    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                            </toast>
                                        </div>

                                        <div class="bd-example bg-dark p-5 align-items-center">
                                            <toast className="fade show" ariaatomic="true">
                                                <toast-body>
                                                    Hello, world! This is a toast message.
                                                    <div class="mt-2 pt-2 border-top">
                                                        <button type="button" class="btn btn-primary">Take action</button>
                                                        <button type="button" class="btn btn-dark" data-bs-dismiss="toast">Close</button>
                                                    </div>
                                                </toast-body>
                                            </toast>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Toasts-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example bg-dark p-5 align-items-center&#x22;&#x3E;
                &#x3C;toast className=&#x22;fade show&#x22; ariaatomic=&#x22;true&#x22;&#x3E;
                    &#x3C;toast-header :dismissable=&#x22;true&#x22;&#x3E;
                        &#x3C;svg class=&#x22;bd-placeholder-img rounded me-2&#x22; width=&#x22;20&#x22; height=&#x22;20&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; aria-hidden=&#x22;true&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#007aff&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;/svg&#x3E;
                        &#x3C;strong class=&#x22;me-auto&#x22;&#x3E;Bootstrap&#x3C;/strong&#x3E;
                        &#x3C;small class=&#x22;text-muted&#x22;&#x3E;11 mins ago&#x3C;/small&#x3E;
                    &#x3C;/toast-header&#x3E;
                    &#x3C;toast-body&#x3E;
                        Hello, world! This is a toast message.
                    &#x3C;/toast-body&#x3E;
                &#x3C;/toast&#x3E;
            &#x3C;/div&#x3E;
           &#x3C;div class=&#x22;bd-example bg-dark p-5 align-items-center&#x22;&#x3E;
                &#x3C;toast className=&#x22;fade show align-items-center&#x22; ariaatomic=&#x22;true&#x22;&#x3E;
                    &#x3C;div class=&#x22;d-flex&#x22;&#x3E;
                        &#x3C;toast-body&#x3E;
                            Hello, world! This is a toast message.
                        &#x3C;/toast-body&#x3E;
                        &#x3C;button type=&#x22;button&#x22; class=&#x22;btn-close me-2 m-auto&#x22; data-bs-dismiss=&#x22;toast&#x22; aria-label=&#x22;Close&#x22;&#x3E;&#x3C;/button&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/toast&#x3E;
            &#x3C;/div&#x3E;

            &#x3C;div class=&#x22;bd-example bg-dark p-5 align-items-center&#x22;&#x3E;
                &#x3C;toast className=&#x22;fade show&#x22; ariaatomic=&#x22;true&#x22;&#x3E;
                    &#x3C;toast-body&#x3E;
                        Hello, world! This is a toast message.
                        &#x3C;div class=&#x22;mt-2 pt-2 border-top&#x22;&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Take action&#x3C;/button&#x3E;
                            &#x3C;button type=&#x22;button&#x22; class=&#x22;btn btn-dark&#x22; data-bs-dismiss=&#x22;toast&#x22;&#x3E;Close&#x3C;/button&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/toast-body&#x3E;
                &#x3C;/toast&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                    <article id="tooltips">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Tooltips</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Tooltips" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Tooltips-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-Tooltips-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-Tooltips-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example tooltip-demo">
                                           <tooltip className="btn btn-secondary mt-3 me-1" tooltipPlacement="top" data-bs-original-title="Tooltip on top" tooltipContent="Tooltip on top">Tooltip on top</tooltip>
                                            <tooltip className="btn btn-secondary mt-3 me-1" tooltipPlacement="right" data-bs-original-title="Tooltip on right" tooltipContent="Tooltip on end">Tooltip on right</tooltip>
                                            <tooltip className="btn btn-secondary mt-3 me-1" tooltipPlacement="bottom" data-bs-original-title="Tooltip on bottom" tooltipContent="Tooltip on bottom">Tooltip on bottom</tooltip>
                                            <tooltip className="btn btn-secondary mt-3 me-1" tooltipPlacement="left" data-bs-original-title="Tooltip on start" tooltipContent="Tooltip on start">Tooltip on start</tooltip>
                                            <tooltip className="btn btn-secondary mt-3 me-1" tooltipPlacement="top" htmlContent="true" data-bs-original-title="Tooltip on left" tooltipContent="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</tooltip>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-Tooltips-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example tooltip-demo&#x22;&#x3E;
                &#x3C;tooltip className=&#x22;btn btn-secondary mt-3 me-1&#x22; tooltipPlacement=&#x22;top&#x22; data-bs-original-title=&#x22;Tooltip on top&#x22; tooltipContent=&#x22;Tooltip on top&#x22;&#x3E;Tooltip on top&#x3C;/tooltip&#x3E;
                &#x3C;tooltip className=&#x22;btn btn-secondary mt-3 me-1&#x22; tooltipPlacement=&#x22;right&#x22; data-bs-original-title=&#x22;Tooltip on right&#x22; tooltipContent=&#x22;Tooltip on end&#x22;&#x3E;Tooltip on right&#x3C;/tooltip&#x3E;
                &#x3C;tooltip className=&#x22;btn btn-secondary mt-3 me-1&#x22; tooltipPlacement=&#x22;bottom&#x22; data-bs-original-title=&#x22;Tooltip on bottom&#x22; tooltipContent=&#x22;Tooltip on bottom&#x22;&#x3E;Tooltip on bottom&#x3C;/tooltip&#x3E;
                &#x3C;tooltip className=&#x22;btn btn-secondary mt-3 me-1&#x22; tooltipPlacement=&#x22;left&#x22; data-bs-original-title=&#x22;Tooltip on start&#x22; tooltipContent=&#x22;Tooltip on start&#x22;&#x3E;Tooltip on start&#x3C;/tooltip&#x3E;
                &#x3C;tooltip className=&#x22;btn btn-secondary mt-3 me-1&#x22; tooltipPlacement=&#x22;top&#x22; htmlContent=&#x22;true&#x22; data-bs-original-title=&#x22;Tooltip on left&#x22; tooltipContent=&#x22;&#x3C;em&#x3E;Tooltip&#x3C;/em&#x3E; &#x3C;u&#x3E;with&#x3C;/u&#x3E; &#x3C;b&#x3E;HTML&#x3C;/b&#x3E;&#x22;&#x3E;Tooltip with HTML&#x3C;/tooltip&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                </section>

                <section id="forms">
                    <div class="iq-side-content sticky-xl-top">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="fw-bold">
                                    Forms
                                </h4>
                            </div>
                        </div>
                    </div>

                    <article id="overview">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Overview</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex disabled btn p-0" href="#" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card iq-doc-head">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-form-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-form-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-form-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1">
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                            <fieldset class="mb-3">
                                                <legend>Radios buttons</legend>
                                                <div class="form-check">
                                                    <input type="radio" name="radios" class="form-check-input" id="exampleRadio1">
                                                    <label class="form-check-label" for="exampleRadio1">Default radio</label>
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
                                                    <label class="form-check-label" for="exampleRadio2">Another radio</label>
                                                </div>
                                            </fieldset>
                                            <div class="mb-3">
                                                <label class="form-label" for="customFile">Upload</label>
                                                <input type="file" class="form-control" id="customFile">
                                            </div>
                                            <div class="mb-3 form-check form-switch">
                                                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="">
                                                <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                            </div>
                                            <div class="mb-3">
                                                <label for="customRange3" class="form-label">Example range</label>
                                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-form-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;form&#x3E;
                &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label for=&#x22;exampleInputEmail1&#x22; class=&#x22;form-label&#x22;&#x3E;Email address&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; id=&#x22;exampleInputEmail1&#x22; aria-describedby=&#x22;emailHelp&#x22;&#x3E;
                    &#x3C;div id=&#x22;emailHelp&#x22; class=&#x22;form-text&#x22;&#x3E;We&#x27;ll never share your email with anyone else.&#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label for=&#x22;exampleInputPassword1&#x22; class=&#x22;form-label&#x22;&#x3E;Password&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;password&#x22; class=&#x22;form-control&#x22; id=&#x22;exampleInputPassword1&#x22;&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;mb-3 form-check&#x22;&#x3E;
                    &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22; id=&#x22;exampleCheck1&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;exampleCheck1&#x22;&#x3E;Check me out&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;fieldset class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;legend&#x3E;Radios buttons&#x3C;/legend&#x3E;
                    &#x3C;div class=&#x22;form-check&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;radios&#x22; class=&#x22;form-check-input&#x22; id=&#x22;exampleRadio1&#x22;&#x3E;
                        &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;exampleRadio1&#x22;&#x3E;Default radio&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3 form-check&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;radios&#x22; class=&#x22;form-check-input&#x22; id=&#x22;exampleRadio2&#x22;&#x3E;
                        &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;exampleRadio2&#x22;&#x3E;Another radio&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/fieldset&#x3E;
                &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-label&#x22; for=&#x22;customFile&#x22;&#x3E;Upload&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;file&#x22; class=&#x22;form-control&#x22; id=&#x22;customFile&#x22;&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;mb-3 form-check form-switch&#x22;&#x3E;
                    &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;flexSwitchCheckChecked&#x22; checked=&#x22;&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;flexSwitchCheckChecked&#x22;&#x3E;Checked switch checkbox input&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label for=&#x22;customRange3&#x22; class=&#x22;form-label&#x22;&#x3E;Example range&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;range&#x22; class=&#x22;form-range&#x22; min=&#x22;0&#x22; max=&#x22;5&#x22; step=&#x22;0.5&#x22; id=&#x22;customRange3&#x22;&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Submit&#x3C;/button&#x3E;
            &#x3C;/form&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </article>
                    <article id="disabled-forms">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Disabled Forms</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Disableforms" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-disabled-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-disabled-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-disabled-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <form>
                                            <fieldset disabled="" aria-label="Disabled fieldset example">
                                                <div class="mb-3">
                                                    <label for="disabledTextInput" class="form-label">Disabled input</label>
                                                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="disabledSelect" class="form-label">Disabled select menu</label>
                                                    <select id="disabledSelect" class="form-select">
                                                        <option>Disabled select</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
                                                        <label class="form-check-label" for="disabledFieldsetCheck">
                                                        Can't check this
                                                        </label>
                                                    </div>
                                                </div>
                                                <fieldset class="mb-3">
                                                    <legend>Disabled radios buttons</legend>
                                                    <div class="form-check">
                                                        <input type="radio" name="radios" class="form-check-input" id="disabledRadio1" disabled="">
                                                        <label class="form-check-label" for="disabledRadio1">Disabled radio</label>
                                                    </div>
                                                    <div class="mb-3 form-check">
                                                        <input type="radio" name="radios" class="form-check-input" id="disabledRadio2" disabled="">
                                                        <label class="form-check-label" for="disabledRadio2">Another radio</label>
                                                    </div>
                                                </fieldset>
                                                <div class="mb-3">
                                                    <label class="form-label" for="disabledCustomFile">Upload</label>
                                                    <input type="file" class="form-control" id="disabledCustomFile" disabled="">
                                                </div>
                                                <div class="mb-3 form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="disabledSwitchCheckChecked" checked="" disabled="">
                                                    <label class="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="disabledRange" class="form-label">Disabled range</label>
                                                    <input type="range" class="form-range" min="0" max="5" step="0.5" id="disabledRange">
                                                </div>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-disabled-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;form&#x3E;
                &#x3C;fieldset disabled=&#x22;&#x22; aria-label=&#x22;Disabled fieldset example&#x22;&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                        &#x3C;label for=&#x22;disabledTextInput&#x22; class=&#x22;form-label&#x22;&#x3E;Disabled input&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;text&#x22; id=&#x22;disabledTextInput&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Disabled input&#x22;&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                        &#x3C;label for=&#x22;disabledSelect&#x22; class=&#x22;form-label&#x22;&#x3E;Disabled select menu&#x3C;/label&#x3E;
                        &#x3C;select id=&#x22;disabledSelect&#x22; class=&#x22;form-select&#x22;&#x3E;
                            &#x3C;option&#x3E;Disabled select&#x3C;/option&#x3E;
                        &#x3C;/select&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                        &#x3C;div class=&#x22;form-check&#x22;&#x3E;
                            &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;disabledFieldsetCheck&#x22; disabled=&#x22;&#x22;&#x3E;
                            &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;disabledFieldsetCheck&#x22;&#x3E;
                            Can&#x27;t check this
                            &#x3C;/label&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;fieldset class=&#x22;mb-3&#x22;&#x3E;
                        &#x3C;legend&#x3E;Disabled radios buttons&#x3C;/legend&#x3E;
                        &#x3C;div class=&#x22;form-check&#x22;&#x3E;
                            &#x3C;input type=&#x22;radio&#x22; name=&#x22;radios&#x22; class=&#x22;form-check-input&#x22; id=&#x22;disabledRadio1&#x22; disabled=&#x22;&#x22;&#x3E;
                            &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;disabledRadio1&#x22;&#x3E;Disabled radio&#x3C;/label&#x3E;
                        &#x3C;/div&#x3E;
                        &#x3C;div class=&#x22;mb-3 form-check&#x22;&#x3E;
                            &#x3C;input type=&#x22;radio&#x22; name=&#x22;radios&#x22; class=&#x22;form-check-input&#x22; id=&#x22;disabledRadio2&#x22; disabled=&#x22;&#x22;&#x3E;
                            &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;disabledRadio2&#x22;&#x3E;Another radio&#x3C;/label&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/fieldset&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                        &#x3C;label class=&#x22;form-label&#x22; for=&#x22;disabledCustomFile&#x22;&#x3E;Upload&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;file&#x22; class=&#x22;form-control&#x22; id=&#x22;disabledCustomFile&#x22; disabled=&#x22;&#x22;&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3 form-check form-switch&#x22;&#x3E;
                        &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;disabledSwitchCheckChecked&#x22; checked=&#x22;&#x22; disabled=&#x22;&#x22;&#x3E;
                        &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;disabledSwitchCheckChecked&#x22;&#x3E;Disabled checked switch checkbox input&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                        &#x3C;label for=&#x22;disabledRange&#x22; class=&#x22;form-label&#x22;&#x3E;Disabled range&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;range&#x22; class=&#x22;form-range&#x22; min=&#x22;0&#x22; max=&#x22;5&#x22; step=&#x22;0.5&#x22; id=&#x22;disabledRange&#x22;&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn btn-primary&#x22;&#x3E;Submit&#x3C;/button&#x3E;
                &#x3C;/fieldset&#x3E;
            &#x3C;/form&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </article>
                    <article id="sizing">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Sizing</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Sizing" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-sizing-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-sizing-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-sizing-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <div class="mb-3">
                                            <input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <input type="file" class="form-control form-control-lg" aria-label="Large file input example">
                                        </div>
                                    </div>
                                    <div class="bd-example">
                                        <div class="mb-3">
                                            <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
                                        </div>
                                        <div class="mb-3">
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                <option selected="">Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <input type="file" class="form-control form-control-sm" aria-label="Small file input example">
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-sizing-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                &#x3C;input class=&#x22;form-control form-control-lg&#x22; type=&#x22;text&#x22; placeholder=&#x22;.form-control-lg&#x22; aria-label=&#x22;.form-control-lg example&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                &#x3C;select class=&#x22;form-select form-select-lg mb-3&#x22; aria-label=&#x22;.form-select-lg example&#x22;&#x3E;
                    &#x3C;option selected=&#x22;&#x22;&#x3E;Open this select menu&#x3C;/option&#x3E;
                    &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
                    &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
                    &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
                &#x3C;/select&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;file&#x22; class=&#x22;form-control form-control-lg&#x22; aria-label=&#x22;Large file input example&#x22;&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                &#x3C;input class=&#x22;form-control form-control-sm&#x22; type=&#x22;text&#x22; placeholder=&#x22;.form-control-sm&#x22; aria-label=&#x22;.form-control-sm example&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                &#x3C;select class=&#x22;form-select form-select-sm&#x22; aria-label=&#x22;.form-select-sm example&#x22;&#x3E;
                    &#x3C;option selected=&#x22;&#x22;&#x3E;Open this select menu&#x3C;/option&#x3E;
                    &#x3C;option value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E;
                    &#x3C;option value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E;
                    &#x3C;option value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
                &#x3C;/select&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;file&#x22; class=&#x22;form-control form-control-sm&#x22; aria-label=&#x22;Small file input example&#x22;&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                            </div>

                                </div>
                            </div>

                        </div>
                    </article>
                    <article id="input-group">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Input Group</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Inputgroup" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-inputgroup-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-inputgroup-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-inputgroup-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">@</span>
                                            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                            <span class="input-group-text" id="basic-addon2">@example.com</span>
                                        </div>
                                        <label for="basic-url" class="form-label">Your vanity URL</label>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                                        </div>
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">$</span>
                                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                        <div class="input-group">
                                            <span class="input-group-text">With textarea</span>
                                            <textarea class="form-control" aria-label="With textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-inputgroup-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;input-group mb-3&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon1&#x22;&#x3E;@&#x3C;/span&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Username&#x22; aria-label=&#x22;Username&#x22; aria-describedby=&#x22;basic-addon1&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;input-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Recipient&#x27;s username&#x22; aria-label=&#x22;Recipient&#x27;s username&#x22; aria-describedby=&#x22;basic-addon2&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon2&#x22;&#x3E;@example.com&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;label for=&#x22;basic-url&#x22; class=&#x22;form-label&#x22;&#x3E;Your vanity URL&#x3C;/label&#x3E;
            &#x3C;div class=&#x22;input-group mb-3&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon3&#x22;&#x3E;https://example.com/users/&#x3C;/span&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; id=&#x22;basic-url&#x22; aria-describedby=&#x22;basic-addon3&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;input-group mb-3&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;$&#x3C;/span&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; aria-label=&#x22;Amount (to the nearest dollar)&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;.00&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;input-group&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22;&#x3E;With textarea&#x3C;/span&#x3E;
                &#x3C;textarea class=&#x22;form-control&#x22; aria-label=&#x22;With textarea&#x22;&#x3E;&#x3C;/textarea&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="a-form-control">
                        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Alertnate Input</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Alternateinput" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-alternet-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-alternet-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-alternet-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <div class="form-group form-group-alt">
                                            <input type="text" class="form-control" placeholder="Enter Text">
                                        </div>
                                        <div class="form-group input-group form-group-alt">
                                            <span class="input-group-text" id="basic-addon1">@</span>
                                            <input type="text" class="form-control" placeholder="Addon" aria-label="Username" aria-describedby="basic-addon1">
                                        </div>
                                        <div class="form-group input-group form-group-alt">
                                            <input type="text" class="form-control" placeholder="Addon" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                            <span class="input-group-text" id="basic-addon2">@</span>
                                        </div>
                                        <div class="form-group form-group-alt">
                                            <input type="text" class="form-control is-valid" placeholder="Enter Text">
                                        </div>
                                        <div class="form-group form-group-alt">
                                            <input type="text" class="form-control is-invalid" placeholder="Enter Text">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control is-valid" placeholder="Enter Text">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control is-invalid" placeholder="Enter Text">
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-alternet-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-group form-group-alt&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Enter Text&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group input-group form-group-alt&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon1&#x22;&#x3E;@&#x3C;/span&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Addon&#x22; aria-label=&#x22;Username&#x22; aria-describedby=&#x22;basic-addon1&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group input-group form-group-alt&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control&#x22; placeholder=&#x22;Addon&#x22; aria-label=&#x22;Recipient&#x27;s username&#x22; aria-describedby=&#x22;basic-addon2&#x22;&#x3E;
                &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;basic-addon2&#x22;&#x3E;@&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group form-group-alt&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-valid&#x22; placeholder=&#x22;Enter Text&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group form-group-alt&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-invalid&#x22; placeholder=&#x22;Enter Text&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-valid&#x22; placeholder=&#x22;Enter Text&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-invalid&#x22; placeholder=&#x22;Enter Text&#x22;&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>
                    <article id="floating-labels">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Floating Labels</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Floatinglable" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-floating-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-floating-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-floating-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                                                <label for="floatingInput">Email address</label>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                                                <label for="floatingPassword">Password</label>
                                            </div>
                                            <div class="form-floating form-group mb-3">
                                                <input type="email" class="form-control" disabled id="floatingInput" placeholder="Place Holder">
                                                <label for="floatingInput">Regular</label>
                                            </div>
                                            <div class="form-floating form-group mb-3">
                                                <input type="email" class="form-control is-valid" id="floatingInput"
                                                    placeholder="Place Holder">
                                                <label for="floatingInput">Regular</label>
                                            </div>
                                            <div class="form-floating form-group">
                                                <input type="email" class="form-control is-invalid" id="floatingInput"
                                                    placeholder="Place Holder">
                                                <label for="floatingInput">Regular</label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-floating-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;form&#x3E;
                &#x3C;div class=&#x22;form-floating mb-3&#x22;&#x3E;
                    &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22; placeholder=&#x22;name@example.com&#x22;&#x3E;
                    &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Email address&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;form-floating mb-3&#x22;&#x3E;
                    &#x3C;input type=&#x22;password&#x22; class=&#x22;form-control&#x22; id=&#x22;floatingPassword&#x22; placeholder=&#x22;Password&#x22;&#x3E;
                    &#x3C;label for=&#x22;floatingPassword&#x22;&#x3E;Password&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;form-floating form-group mb-3&#x22;&#x3E;
                    &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; disabled id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                    &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;form-floating form-group mb-3&#x22;&#x3E;
                    &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control is-valid&#x22; id=&#x22;floatingInput&#x22;
                        placeholder=&#x22;Place Holder&#x22;&#x3E;
                    &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;form-floating form-group&#x22;&#x3E;
                    &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control is-invalid&#x22; id=&#x22;floatingInput&#x22;
                        placeholder=&#x22;Place Holder&#x22;&#x3E;
                    &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/form&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="a-floating-labels">
                        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Alertnate Float Labels</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Alternatefloatlable" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-alternetfloat-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-alternetfloat-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-alternetfloat-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <div class="form-floating custom-form-floating custom-form-floating-sm form-group mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="Place Holder">
                                            <label for="floatingInput">Small</label>
                                        </div>
                                        <div class="form-floating custom-form-floating form-group mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="Place Holder">
                                            <label for="floatingInput">Regular</label>
                                        </div>
                                        <div class="form-floating custom-form-floating custom-form-floating-lg form-group mb-3">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="Place Holder">
                                            <label for="floatingInput">Large</label>
                                        </div>
                                        <div class="form-floating custom-form-floating form-group mb-3">
                                            <input type="email" class="form-control" disabled id="floatingInput" placeholder="Place Holder">
                                            <label for="floatingInput">Regular</label>
                                        </div>
                                        <div class="form-floating custom-form-floating form-group mb-3">
                                            <input type="email" class="form-control is-valid" id="floatingInput" placeholder="Place Holder">
                                            <label for="floatingInput">Regular</label>
                                        </div>
                                        <div class="form-floating custom-form-floating form-group mb-3">
                                            <input type="email" class="form-control is-invalid" id="floatingInput" placeholder="Place Holder">
                                            <label for="floatingInput">Regular</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-alternetfloat-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-floating custom-form-floating custom-form-floating-sm form-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Small&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-floating custom-form-floating form-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-floating custom-form-floating custom-form-floating-lg form-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Large&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-floating custom-form-floating form-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control&#x22; disabled id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-floating custom-form-floating form-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control is-valid&#x22; id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-floating custom-form-floating form-group mb-3&#x22;&#x3E;
                &#x3C;input type=&#x22;email&#x22; class=&#x22;form-control is-invalid&#x22; id=&#x22;floatingInput&#x22; placeholder=&#x22;Place Holder&#x22;&#x3E;
                &#x3C;label for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                </div>

                                </div>
                            </div>

                        </div>
                    </article>
                    <article id="toggle-btn">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Toggle Button</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Togglebutton" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-toggle-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-toggle-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-toggle-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                        <div class="form-check form-check-inline">
                                            <input type="checkbox" class="form-check-input" id="customCheck5">
                                            <label class="form-check-label pl-2" for="customCheck5">Checkbox</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="checkbox" class="form-check-input" id="customCheck6" Checked="">
                                            <label class="form-check-label pl-2" for="customCheck6">Checked</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="checkbox" class="form-check-input" id="customCheck7" disabled="">
                                            <label class="form-check-label pl-2" for="customCheck7">Disabled</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="checkbox" class="form-check-input" id="customCheck8" checked=""
                                                disabled="">
                                            <label class="form-check-label pl-2" for="customCheck8">Disabled Checked</label>
                                        </div>
                                    </div>
                                    <div class="bd-example">
                                        <div class="form-check form-check-inline">
                                            <input type="radio" class="form-check-input" name="bsradio" id="radio1"
                                                checked="">
                                            <label for="radio1" class="form-check-label pl-2">Active</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" class="form-check-input" name="bsradio" id="radio2">
                                            <label for="radio2" class="form-check-label pl-2">Inactive</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" class="form-check-input" name="bsradio1" id="radio3"
                                                disabled="" checked="">
                                            <label for="radio3" class="form-check-label pl-2">Active - Disabled</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" class="form-check-input" name="bsradio1" id="radio4"
                                                disabled="">
                                            <label for="radio3" class="form-check-label pl-2">Inactive - Disabled</label>
                                        </div>
                                    </div>
                                    <div class="bd-example">
                                        <div class="form-check form-switch form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="switch1" />
                                            <label class="form-check-label pl-2" for="switch1">Off Switch</label>
                                        </div>
                                        <div class="form-check form-switch form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="switch2" checked />
                                            <label class="form-check-label pl-2" for="switch2">On Switch</label>
                                        </div>
                                        <div class="form-check form-switch form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="switch3" disabled />
                                            <label class="form-check-label pl-2" for="switch3">Disabled Switch</label>
                                        </div>
                                        <div class="form-check form-switch form-check-inline">
                                            <input class="form-check-input form-check-inline" type="checkbox" id="switch4" checked disabled />
                                            <label class="form-check-label pl-2" for="switch4"> Switch</label>
                                        </div>
                                    </div>
                                    <div class="bd-example">
                                        <div class="form-group">
                                            <label for="customRange1" class="form-label">Example range</label>
                                            <input type="range" class="form-range w-100" id="customRange1">
                                        </div>
                                        <div class="form-group">
                                            <NoUiSlider  variant="primary"/>
                                        </div>
                                        <div class="form-group">
                                            <NoUiSlider  variant="success"/>
                                        </div>
                                        <div class="form-group">
                                            <NoUiSlider  variant="danger"/>
                                        </div>
                                        <div class="form-group">
                                            <NoUiSlider  variant="warning"/>
                                        </div>
                                        <div class="form-group">
                                            <NoUiSlider  variant="dark"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-toggle-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup"> &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22; id=&#x22;customCheck5&#x22;&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;customCheck5&#x22;&#x3E;Checkbox&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22; id=&#x22;customCheck6&#x22; Checked=&#x22;&#x22;&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;customCheck6&#x22;&#x3E;Checked&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22; id=&#x22;customCheck7&#x22; disabled=&#x22;&#x22;&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;customCheck7&#x22;&#x3E;Disabled&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22; id=&#x22;customCheck8&#x22; checked=&#x22;&#x22;
                    disabled=&#x22;&#x22;&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;customCheck8&#x22;&#x3E;Disabled Checked&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22; name=&#x22;bsradio&#x22; id=&#x22;radio1&#x22;
                    checked=&#x22;&#x22;&#x3E;
                &#x3C;label for=&#x22;radio1&#x22; class=&#x22;form-check-label pl-2&#x22;&#x3E;Active&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22; name=&#x22;bsradio&#x22; id=&#x22;radio2&#x22;&#x3E;
                &#x3C;label for=&#x22;radio2&#x22; class=&#x22;form-check-label pl-2&#x22;&#x3E;Inactive&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22; name=&#x22;bsradio1&#x22; id=&#x22;radio3&#x22;
                    disabled=&#x22;&#x22; checked=&#x22;&#x22;&#x3E;
                &#x3C;label for=&#x22;radio3&#x22; class=&#x22;form-check-label pl-2&#x22;&#x3E;Active - Disabled&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-check-inline&#x22;&#x3E;
                &#x3C;input type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22; name=&#x22;bsradio1&#x22; id=&#x22;radio4&#x22;
                    disabled=&#x22;&#x22;&#x3E;
                &#x3C;label for=&#x22;radio3&#x22; class=&#x22;form-check-label pl-2&#x22;&#x3E;Inactive - Disabled&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-check form-switch form-check-inline&#x22;&#x3E;
                &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;switch1&#x22; /&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;switch1&#x22;&#x3E;Off Switch&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-switch form-check-inline&#x22;&#x3E;
                &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;switch2&#x22; checked /&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;switch2&#x22;&#x3E;On Switch&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-switch form-check-inline&#x22;&#x3E;
                &#x3C;input class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22; id=&#x22;switch3&#x22; disabled /&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;switch3&#x22;&#x3E;Disabled Switch&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-check form-switch form-check-inline&#x22;&#x3E;
                &#x3C;input class=&#x22;form-check-input form-check-inline&#x22; type=&#x22;checkbox&#x22; id=&#x22;switch4&#x22; checked disabled /&#x3E;
                &#x3C;label class=&#x22;form-check-label pl-2&#x22; for=&#x22;switch4&#x22;&#x3E; Switch&#x3C;/label&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;label for=&#x22;customRange1&#x22; class=&#x22;form-label&#x22;&#x3E;Example range&#x3C;/label&#x3E;
                &#x3C;input type=&#x22;range&#x22; class=&#x22;form-range w-100&#x22; id=&#x22;customRange1&#x22;&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;slider&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;slider slider-secondary&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;slider slider-success&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;slider slider-danger&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;slider slider-warning&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;form-group&#x22;&#x3E;
                &#x3C;div class=&#x22;slider slider-dark&#x22;&#x3E;&#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                            </div>

                                </div>

                            </div>

                        </div>
                    </article>
                    <article id="validation">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Validation</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Validation" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-validation-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-validation-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-validation-prv" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="bd-example">
                                            <form class="row g-3">
                                                <div class="col-md-4">
                                                    <label for="validationServer01" class="form-label">First name</label>
                                                    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required="">
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="validationServer02" class="form-label">Last name</label>
                                                    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required="">
                                                    <div class="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="validationServerUsername" class="form-label">Username</label>
                                                    <div class="input-group has-validation">
                                                        <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                                        <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required="">
                                                        <div class="invalid-feedback">
                                                            Please choose a username.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="validationServer03" class="form-label">City</label>
                                                    <input type="text" class="form-control is-invalid" id="validationServer03" required="">
                                                    <div class="invalid-feedback">
                                                        Please provide a valid city.
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="validationServer04" class="form-label">State</label>
                                                    <select class="form-select is-invalid" id="validationServer04" required="">
                                                        <option selected="" disabled="" value="">Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                    <div class="invalid-feedback">
                                                        Please select a valid state.
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <label for="validationServer05" class="form-label">Zip</label>
                                                    <input type="text" class="form-control is-invalid" id="validationServer05" required="">
                                                    <div class="invalid-feedback">
                                                        Please provide a valid zip.
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required="">
                                                        <label class="form-check-label" for="invalidCheck3">
                                                            Agree to terms and conditions
                                                        </label>
                                                        <div class="invalid-feedback">
                                                            You must agree before submitting.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-validation-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;form class=&#x22;row g-3&#x22;&#x3E;
                    &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
                        &#x3C;label for=&#x22;validationServer01&#x22; class=&#x22;form-label&#x22;&#x3E;First name&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-valid&#x22; id=&#x22;validationServer01&#x22; value=&#x22;Mark&#x22; required=&#x22;&#x22;&#x3E;
                        &#x3C;div class=&#x22;valid-feedback&#x22;&#x3E;
                            Looks good!
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
                        &#x3C;label for=&#x22;validationServer02&#x22; class=&#x22;form-label&#x22;&#x3E;Last name&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-valid&#x22; id=&#x22;validationServer02&#x22; value=&#x22;Otto&#x22; required=&#x22;&#x22;&#x3E;
                        &#x3C;div class=&#x22;valid-feedback&#x22;&#x3E;
                            Looks good!
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-4&#x22;&#x3E;
                        &#x3C;label for=&#x22;validationServerUsername&#x22; class=&#x22;form-label&#x22;&#x3E;Username&#x3C;/label&#x3E;
                        &#x3C;div class=&#x22;input-group has-validation&#x22;&#x3E;
                            &#x3C;span class=&#x22;input-group-text&#x22; id=&#x22;inputGroupPrepend3&#x22;&#x3E;@&#x3C;/span&#x3E;
                            &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-invalid&#x22; id=&#x22;validationServerUsername&#x22; aria-describedby=&#x22;inputGroupPrepend3&#x22; required=&#x22;&#x22;&#x3E;
                            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                                Please choose a username.
                            &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-6&#x22;&#x3E;
                        &#x3C;label for=&#x22;validationServer03&#x22; class=&#x22;form-label&#x22;&#x3E;City&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-invalid&#x22; id=&#x22;validationServer03&#x22; required=&#x22;&#x22;&#x3E;
                        &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                            Please provide a valid city.
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-3&#x22;&#x3E;
                        &#x3C;label for=&#x22;validationServer04&#x22; class=&#x22;form-label&#x22;&#x3E;State&#x3C;/label&#x3E;
                        &#x3C;select class=&#x22;form-select is-invalid&#x22; id=&#x22;validationServer04&#x22; required=&#x22;&#x22;&#x3E;
                            &#x3C;option selected=&#x22;&#x22; disabled=&#x22;&#x22; value=&#x22;&#x22;&#x3E;Choose...&#x3C;/option&#x3E;
                            &#x3C;option&#x3E;...&#x3C;/option&#x3E;
                        &#x3C;/select&#x3E;
                        &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                            Please select a valid state.
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-3&#x22;&#x3E;
                        &#x3C;label for=&#x22;validationServer05&#x22; class=&#x22;form-label&#x22;&#x3E;Zip&#x3C;/label&#x3E;
                        &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control is-invalid&#x22; id=&#x22;validationServer05&#x22; required=&#x22;&#x22;&#x3E;
                        &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                            Please provide a valid zip.
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-12&#x22;&#x3E;
                        &#x3C;div class=&#x22;form-check&#x22;&#x3E;
                            &#x3C;input class=&#x22;form-check-input is-invalid&#x22; type=&#x22;checkbox&#x22; value=&#x22;&#x22; id=&#x22;invalidCheck3&#x22; required=&#x22;&#x22;&#x3E;
                            &#x3C;label class=&#x22;form-check-label&#x22; for=&#x22;invalidCheck3&#x22;&#x3E;
                                Agree to terms and conditions
                            &#x3C;/label&#x3E;
                            &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E;
                                You must agree before submitting.
                            &#x3C;/div&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-12&#x22;&#x3E;
                        &#x3C;button class=&#x22;btn btn-primary&#x22; type=&#x22;submit&#x22;&#x3E;Submit form&#x3C;/button&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/form&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>

                                    </div>
                                </div>

                        </div>
                    </article>
                </section>

                <section id="content">
                    <div class="iq-side-content sticky-xl-top">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="fw-bold">
                                    Contents
                                </h4>
                            </div>
                        </div>
                    </div>
                    <article id="typography">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Typography</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Typography" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card iq-doc-head">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-typo-op" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                            Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-typo-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                </mask>
                                                <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                <mask fill="white">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                </mask>
                                                <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                            </svg>
                                            Code
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-typo-op" role="tabpanel" aria-labelledby="typo-output">
                                   <div class="bd-example">
                                    <p class="display-1">Display 1</p>
                                    <p class="display-2">Display 2</p>
                                    <p class="display-3">Display 3</p>
                                    <p class="display-4">Display 4</p>
                                    <p class="display-5">Display 5</p>
                                    <p class="display-6">Display 6</p>
                                    </div>
                                   <div class="bd-example">
                                    <p class="h1">Heading 1</p>
                                    <p class="h2">Heading 2</p>
                                    <p class="h3">Heading 3</p>
                                    <p class="h4">Heading 4</p>
                                    <p class="h5">Heading 5</p>
                                    <p class="h6">Heading 6</p>
                                    </div>
                                    <div class="bd-example">
                                    <p class="lead">
                                    This is a lead paragraph. It stands out from regular paragraphs.
                                    </p>
                                    </div>
                                    <div class="bd-example">
                                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                                    <p><u>This line of text will render as underlined.</u></p>
                                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                                    <p><strong>This line rendered as bold text.</strong></p>
                                    <p><em>This line rendered as italicized text.</em></p>
                                    </div>
                                   <div class="bd-example">
                                    <blockquote class="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                    </div>
                                    <div class="bd-example">
                                    <ul class="list-unstyled">
                                        <li>This is a list.</li>
                                        <li>It appears completely unstyled.</li>
                                        <li>Structurally, it's still a list.</li>
                                        <li>However, this style only applies to immediate child elements.</li>
                                        <li>Nested lists:
                                            <ul>
                                                <li>are unaffected by this style</li>
                                                <li>will still show a bullet</li>
                                                <li>and have appropriate left margin</li>
                                            </ul>
                                        </li>
                                        <li>This may still come in handy in some situations.</li>
                                    </ul>
                                    </div>
                                    <div class="bd-example">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">This is a list item.</li>
                                        <li class="list-inline-item">And another one.</li>
                                        <li class="list-inline-item">But they're displayed inline.</li>
                                    </ul>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-typo-code" role="tabpanel" aria-labelledby="typo-code">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;p class=&#x22;display-1&#x22;&#x3E;Display 1&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;display-2&#x22;&#x3E;Display 2&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;display-3&#x22;&#x3E;Display 3&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;display-4&#x22;&#x3E;Display 4&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;display-5&#x22;&#x3E;Display 5&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;display-6&#x22;&#x3E;Display 6&#x3C;/p&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;p class=&#x22;h1&#x22;&#x3E;Heading 1&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;h2&#x22;&#x3E;Heading 2&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;h3&#x22;&#x3E;Heading 3&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;h4&#x22;&#x3E;Heading 4&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;h5&#x22;&#x3E;Heading 5&#x3C;/p&#x3E;
            &#x3C;p class=&#x22;h6&#x22;&#x3E;Heading 6&#x3C;/p&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;p class=&#x22;lead&#x22;&#x3E;
            This is a lead paragraph. It stands out from regular paragraphs.
            &#x3C;/p&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;p&#x3E;You can use the mark tag to &#x3C;mark&#x3E;highlight&#x3C;/mark&#x3E; text.&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;del&#x3E;This line of text is meant to be treated as deleted text.&#x3C;/del&#x3E;&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;s&#x3E;This line of text is meant to be treated as no longer accurate.&#x3C;/s&#x3E;&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;ins&#x3E;This line of text is meant to be treated as an addition to the document.&#x3C;/ins&#x3E;&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;u&#x3E;This line of text will render as underlined.&#x3C;/u&#x3E;&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;small&#x3E;This line of text is meant to be treated as fine print.&#x3C;/small&#x3E;&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;strong&#x3E;This line rendered as bold text.&#x3C;/strong&#x3E;&#x3C;/p&#x3E;
            &#x3C;p&#x3E;&#x3C;em&#x3E;This line rendered as italicized text.&#x3C;/em&#x3E;&#x3C;/p&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;blockquote class=&#x22;blockquote&#x22;&#x3E;
            &#x3C;p&#x3E;A well-known quote, contained in a blockquote element.&#x3C;/p&#x3E;
            &#x3C;footer class=&#x22;blockquote-footer&#x22;&#x3E;Someone famous in &#x3C;cite title=&#x22;Source Title&#x22;&#x3E;Source Title&#x3C;/cite&#x3E;&#x3C;/footer&#x3E;
            &#x3C;/blockquote&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;ul class=&#x22;list-unstyled&#x22;&#x3E;
                &#x3C;li&#x3E;This is a list.&#x3C;/li&#x3E;
                &#x3C;li&#x3E;It appears completely unstyled.&#x3C;/li&#x3E;
                &#x3C;li&#x3E;Structurally, it&#x27;s still a list.&#x3C;/li&#x3E;
                &#x3C;li&#x3E;However, this style only applies to immediate child elements.&#x3C;/li&#x3E;
                &#x3C;li&#x3E;Nested lists:
                    &#x3C;ul&#x3E;
                        &#x3C;li&#x3E;are unaffected by this style&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;will still show a bullet&#x3C;/li&#x3E;
                        &#x3C;li&#x3E;and have appropriate left margin&#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/li&#x3E;
                &#x3C;li&#x3E;This may still come in handy in some situations.&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;ul class=&#x22;list-inline&#x22;&#x3E;
                &#x3C;li class=&#x22;list-inline-item&#x22;&#x3E;This is a list item.&#x3C;/li&#x3E;
                &#x3C;li class=&#x22;list-inline-item&#x22;&#x3E;And another one.&#x3C;/li&#x3E;
                &#x3C;li class=&#x22;list-inline-item&#x22;&#x3E;But they&#x27;re displayed inline.&#x3C;/li&#x3E;
            &#x3C;/ul&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </article>
                    <article id="images">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Images</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Images" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-image-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                            </svg>
                                        Preview
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                            <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-image-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                                <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                    <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                    <mask fill="white">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                    </mask>
                                                    <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                    <mask fill="white">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                    </mask>
                                                    <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                                </svg>
                                            Code
                                            </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-image-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example">
                                    <svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="40%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>
                                    </div>
                                    <div class="bd-example">
                                    <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="33%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-image-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;svg class=&#x22;bd-placeholder-img bd-placeholder-img-lg img-fluid&#x22; width=&#x22;100%&#x22; height=&#x22;250&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: Responsive image&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22; dy=&#x22;.3em&#x22;&#x3E;Responsive image&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
            &#x3C;svg class=&#x22;bd-placeholder-img img-thumbnail&#x22; width=&#x22;200&#x22; height=&#x22;200&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22; dy=&#x22;.3em&#x22;&#x3E;200x200&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
        &#x3C;/div&#x3E;
        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article id="tables">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Tables</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Tables" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-table-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                                <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                    <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                                </svg>
                                                Preview
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-table-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                                <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                    <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                    <mask fill="white">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                    </mask>
                                                    <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                    <mask fill="white">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                    </mask>
                                                    <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                                </svg>
                                                Code
                                            </button>
                                        </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane bd-heading-1 fade show active" id="content-table-prv" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="bd-example table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First</th>
                                                <th scope="col">Last</th>
                                                <th scope="col">Handle</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="bd-example table-responsive">
                                        <table class="table table-dark table-borderless">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colspan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="bd-example table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Class</th>
                                                    <th scope="col">Heading</th>
                                                    <th scope="col">Heading</th>
                                                </tr>
                                            </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">Default</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>

                                        <tr class="table-primary">
                                            <th scope="row">Primary</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-secondary">
                                            <th scope="row">Secondary</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-success">
                                            <th scope="row">Success</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-danger">
                                            <th scope="row">Danger</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-warning">
                                            <th scope="row">Warning</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-info">
                                            <th scope="row">Info</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-light">
                                            <th scope="row">Light</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        <tr class="table-dark">
                                            <th scope="row">Dark</th>
                                            <td>Cell</td>
                                            <td>Cell</td>
                                        </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                    <div class="bd-example table-responsive">
                                        <table class="table table-sm table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colspan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane bd-heading-1 fade show" id="content-table-code" role="tabpanel" aria-labelledby="typo-output">
                                    <div class="section-block">
        <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example table-responsive&#x22;&#x3E;
            &#x3C;table class=&#x22;table table-striped&#x22;&#x3E;
                &#x3C;thead&#x3E;
                &#x3C;tr&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;#&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;First&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Last&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Handle&#x3C;/th&#x3E;
                &#x3C;/tr&#x3E;
                &#x3C;/thead&#x3E;
                &#x3C;tbody&#x3E;
                &#x3C;tr&#x3E;
                    &#x3C;th scope=&#x22;row&#x22;&#x3E;1&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Mark&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Otto&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@mdo&#x3C;/td&#x3E;
                &#x3C;/tr&#x3E;
                &#x3C;tr&#x3E;
                    &#x3C;th scope=&#x22;row&#x22;&#x3E;2&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Jacob&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Thornton&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@fat&#x3C;/td&#x3E;
                &#x3C;/tr&#x3E;
                &#x3C;tr&#x3E;
                    &#x3C;th scope=&#x22;row&#x22;&#x3E;3&#x3C;/th&#x3E;
                    &#x3C;td colspan=&#x22;2&#x22;&#x3E;Larry the Bird&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@twitter&#x3C;/td&#x3E;
                &#x3C;/tr&#x3E;
                &#x3C;/tbody&#x3E;
            &#x3C;/table&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example table-responsive&#x22;&#x3E;
            &#x3C;table class=&#x22;table table-dark table-borderless&#x22;&#x3E;
                &#x3C;thead&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;#&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;First&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Last&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Handle&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E;
                &#x3C;/thead&#x3E;
                &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;1&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Mark&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Otto&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;@mdo&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;2&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Jacob&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Thornton&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;@fat&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;3&#x3C;/th&#x3E;
                        &#x3C;td colspan=&#x22;2&#x22;&#x3E;Larry the Bird&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;@twitter&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                &#x3C;/tbody&#x3E;
            &#x3C;/table&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example table-responsive&#x22;&#x3E;
            &#x3C;table class=&#x22;table table-hover&#x22;&#x3E;
                &#x3C;thead&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Class&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Heading&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Heading&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E;
                &#x3C;/thead&#x3E;
                &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Default&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;

                    &#x3C;tr class=&#x22;table-primary&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Primary&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-secondary&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Secondary&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-success&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Success&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-danger&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Danger&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-warning&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Warning&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-info&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Info&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-light&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Light&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr class=&#x22;table-dark&#x22;&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;Dark&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                &#x3C;/tbody&#x3E;
            &#x3C;/table&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;bd-example table-responsive&#x22;&#x3E;
            &#x3C;table class=&#x22;table table-sm table-bordered&#x22;&#x3E;
                &#x3C;thead&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;#&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;First&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Last&#x3C;/th&#x3E;
                        &#x3C;th scope=&#x22;col&#x22;&#x3E;Handle&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E;
                &#x3C;/thead&#x3E;
                &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;1&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Mark&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Otto&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;@mdo&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;2&#x3C;/th&#x3E;
                        &#x3C;td&#x3E;Jacob&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;Thornton&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;@fat&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E;
                        &#x3C;th scope=&#x22;row&#x22;&#x3E;3&#x3C;/th&#x3E;
                        &#x3C;td colspan=&#x22;2&#x22;&#x3E;Larry the Bird&#x3C;/td&#x3E;
                        &#x3C;td&#x3E;@twitter&#x3C;/td&#x3E;
                    &#x3C;/tr&#x3E;
                &#x3C;/tbody&#x3E;
            &#x3C;/table&#x3E;&#x3C;
        &#x3C;/div&#x3E;

        </code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="pb-5" id="figures">
                        <div class="bd-heading sticky-xl-top align-self-start">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Figures</h5>
                                    <div class="d-flex align-items-center mt-2">
                                        <a class="d-flex" href="https://templates.iqonic.design/hope-ui/documentation/vue/dist/Figures" target="_blank">
                                            <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                            <span>Documentation</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card iq-document-card">
                            <div class="d-flex justify-content-end">
                                <ul class="nav nav-tabs nav-tunnel" data-toggle="slider-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-figure-prv" type="button" role="tab" aria-controls="output" aria-selected="true">
                                                <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z" stroke="currentColor"/>
                                                    <circle cx="12" cy="12" r="3.5" stroke="currentColor"/>
                                                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor"/>
                                                </svg>
                                            Preview
                                            </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                            <button class="nav-link d-flex align-items-center" data-bs-toggle="tab" data-bs-target="#content-figure-code" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                                <svg width="20" class="me-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z" stroke="currentColor"/>
                                                    <path d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z" stroke="currentColor"/>
                                                    <mask fill="white">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"/>
                                                    </mask>
                                                    <path d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z" fill="currentColor" mask="url(#path-3-inside-1)"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z" fill="currentColor"/>
                                                    <mask fill="white">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"/>
                                                    </mask>
                                                    <path d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z" fill="currentColor" mask="url(#path-6-inside-2)"/>
                                                </svg>
                                            Code
                                            </button>
                                    </li>
                                </ul>
                            </div>
                                <div class="tab-content">
                                    <div class="tab-pane bd-heading-1 fade show active" id="content-figure-prv" role="tabpanel">
                                    <div class="bd-example">
                                        <figure class="figure">
                                        <svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="42%" y="50%" fill="#dee2e6" dy=".3em">400x300</text></svg>

                                        <figcaption class="figure-caption">A caption for the above image.</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                    <div class="tab-pane bd-heading-1 fade show" id="content-figure-code" role="tabpanel" aria-labelledby="typo-output">
                                        <div class="section-block">
            <pre><code class="language-markup">&#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                &#x3C;figure class=&#x22;figure&#x22;&#x3E;
                &#x3C;svg class=&#x22;bd-placeholder-img figure-img img-fluid rounded&#x22; width=&#x22;400&#x22; height=&#x22;300&#x22; xmlns=&#x22;http://www.w3.org/2000/svg&#x22; role=&#x22;img&#x22; aria-label=&#x22;Placeholder: 400x300&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22; focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22; height=&#x22;100%&#x22; fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22; dy=&#x22;.3em&#x22;&#x3E;400x300&#x3C;/text&#x3E;&#x3C;/svg&#x3E;

                &#x3C;figcaption class=&#x22;figure-caption&#x22;&#x3E;A caption for the above image.&#x3C;/figcaption&#x3E;
                &#x3C;/figure&#x3E;
            &#x3C;/div&#x3E;
            </code></pre>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </article>
                </section>
            </div>

            <div class="modal fade" id="exampleModalDefault" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLiveLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                    <p>This content should appear at the bottom after you scroll.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="exampleModalFullscreenLabel" aria-hidden="true">
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title h4" id="exampleModalFullscreenLabel">Full screen modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    <div id="back-to-top" style="display: none;">
        <a class="btn btn-primary btn-xs p-0 position-fixed top" id="top" href="#main">
            <svg width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15.5L12 8.5L19 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </a>
    </div>
    <div class="middle" style="display: none;">
        <button data-trigger="left-side-bar" class="d-xl-none btn btn-xs mid-menu" type="button">
            <i class="icon">
                <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.75 11.7256L4.75 11.7256" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </i>
        </button>
    </div>
</template>
<script>
import TabNavItems from '../../components/bootstrap/tab/tab-nav-items.vue'
import tabNav from '../../components/bootstrap/tab/tab-nav.vue'
import Datepicker from 'vue3-datepicker'
import SliderTab from '../../assets/js/slider-tabs.js'
import NoUiSlider from '../../components/custom/slider/NoUiSlider'
import ScrollspyNav from '../../components/bootstrap/ScrollSpy/scrollspy-nav.vue'
import ScrollspyNavitem from '../../components/bootstrap/ScrollSpy/scrollspy-navitem.vue'
import Scrollspy from '../../components/bootstrap/ScrollSpy/scrollspy.vue'
// import veeno from 'veeno'
const prism = () => import('@/assets/js/prism.mini.js')
export default {
  components: {
    tabNav,
    TabNavItems,
    Datepicker,
    NoUiSlider,
    ScrollspyNav,
    ScrollspyNavitem,
    Scrollspy
  },
  data () {
    return {
      picked: '',
      slider: ''
    }
  },
  name: 'UiSheet',
  mounted () {
    prism()
    Array.from(document.querySelectorAll('[data-toggle="slider-tab"]'), (elem) => {
      this.slider = new SliderTab(elem)
    })
  }
}
</script>
