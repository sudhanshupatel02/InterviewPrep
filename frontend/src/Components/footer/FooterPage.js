import React from 'react'

export default function FooterPage() {
    return (
        <div className='footerCon'>
            <div id='contactNav'></div>
            <footer class="padding_4x">
                <div class="flex">
                    <section class="flex-content padding_1x">
                        {/* <h3>InterviewConnect</h3> */}
                        <div id='footerlogo'></div>
                        <p>Welcome to InterviewConnect - your one-stop destination for acing your next software developer interview!</p>
                        <p >interviewconnect2023@gmail.com</p>
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Quick Links</h3>
                        <a href="/">Home</a>
                        <a href="/" aria-disabled="true" >Quiz</a>
                        <a href="#reviewNav">Reviews</a>
                        <a  href='/' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Feedback</a>

                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Features</h3>
                        <a href="/">Subject Wise Questions</a>
                        <a href="/">Topic Wise Questions</a>
                        <a href="/">Sorted by Level</a>
                        <a href="/">Curated Content</a>
                    </section>
                    <section class="flex-content padding_1x">
                        <h3>Teams</h3>
                        <div>
                            <div class="vivek">
                                <section >
                                    <p>Sudhanshu Patel</p>
                                </section>
                                <section class="flex padding_1x">
                                    <a href="https://www.linkedin.com/in/sudhanshu-patel-7039b4226/?originalSubdomain=in"><i class="fa fa-linkedin"></i></a>
                                    <a href="https://github.com/sudhanshupatel02"><i class="fa fa-github"></i></a>
                                    <a href="https://www.facebook.com/profile.php?id=100"><i class="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/sudhanshupatel399/"><i class="fa fa-instagram"></i></a>
                                </section>
                            </div>                            

                        </div>
                    </section>
                </div>
                <div class="flex">
                    <section class="flex-content padding_1x">
                        <p id='copy'>Copyright ©2023 All rights reserved interviewConnect</p>
                    </section>
                </div>
                
            </footer>
        </div>
    )
}
