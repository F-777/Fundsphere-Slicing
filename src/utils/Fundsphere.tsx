import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css';
import Amazon from '../assets/amazon.svg';
import Ebay from '../assets/ebay.svg';
import Uber from '../assets/uber.svg';
import Walmart from '../assets/walmart.svg';
import Logo from '../utils/Logo.svg';
import MoneyCharger from '../assets/moneycharger.svg';
import Costreduction from '../assets/constredution.svg';
import MaskGrup from '../assets/Mask group.svg';
import ScanImage from '../assets/scan.svg';
import LevelImage from '../assets/level.svg';
import ListIcon from '../assets/list.svg';
import Pay from '../assets/insight-pay.svg';
import Strategy from '../assets/strategy.svg';
import Business from '../assets/business.svg';
import StarTesti from '../assets/Star.svg';
import MariaEvelyn from '../assets/MariaEvelyn.svg';
import JohnSmith from '../assets/John Smith.svg';
import FootLogo from '../utils/Footer.svg';
import Socmed from '../utils/footer bottom/Socmed.svg'

gsap.registerPlugin(ScrollTrigger);

function Fundsphere() {

    useEffect(() => {
        const sections = document.querySelectorAll(".slide-in");

        sections.forEach((section) => {
            const direction = section.classList.contains("left") ? -100 : 100;

            gsap.fromTo(
                section,
                { x: direction, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Mulai animasi saat 80% viewport
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);
    return (
        <>
            {/* Fundsphere Subheading Navbar Menus*/}
            <section className="navbar-logo-left">
                <nav className="navbar-logo-left-container">
                    <div className="nav-container">
                        <div className="navbar-wrapper">
                            <div className="div-block">
                                <img src={Logo} alt="logo" />
                                <div className="nav-menu-wrapper">
                                    <ul className="nav-menu-two">
                                        <li className="dropdown">
                                            <a className="nav-link" href="#" onClick={(e) => e.preventDefault()}>
                                                Features ▾
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Landing Page V1</a></li>
                                                <li><a href="#">Landing Page V2</a></li>
                                                <li><a href="#">Landing Page V3</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="nav-link" href="#">Pricing</a></li>
                                        <li><a className="nav-link" href="#">About Us</a></li>
                                        <li><a className="nav-link" href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="button-wrapper">
                                    <button className="btn-transparent">Sign In</button>
                                    <button className="btn-primary">Free Trial</button>
                                </div>
                                <button className="hamburger"></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>

            {/* Section of Developments */}
            <section className="section-hero-home" id="home">
                <div className="container">
                    <div className="hero-home-container">
                        <div className="hero-home">
                            <img src={MoneyCharger} alt="money-charger" />
                            <div className="griden-comp">
                                <img src={Costreduction} alt="cost-reduct" />
                                <img src={MaskGrup} alt="mask-grup" />
                            </div>
                        </div>
                        <div className="hero-home-content">
                            <div className="hero-heading">
                                <div className="label-badge-head">
                                    <text>BEST CHOICE</text>
                                </div>
                                <h1>Future strategic finance for <br /><text>Enterprenurs</text></h1>
                                <p>Scale with checking and savings accounts, custom tools, and access to our investor network.</p>
                            </div>
                            <form action="input">
                                <div className="cta-btn-wrapper">
                                    <button type="submit">Get Started</button>
                                    <input type="text" placeholder="Your work email" />
                                </div>
                            </form>
                            <div className="overview-content">
                                <div className="overview-item">
                                    <text>10%</text>
                                    <p>Benefical Cashback</p>
                                </div>
                                <div className="overview-item">
                                    <text>7M</text>
                                    <p>Satisfied Customer</p>
                                </div>
                                <div className="overview-item">
                                    <text>40+</text>
                                    <p>Country Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* section overview */}
            <section className="section-overview">
                <div className="container-overview">
                    <div className="overview-content">
                        <div className="company-logo">
                            <img src={Uber} alt="uber-logo" />
                            <img src={Amazon} alt="amazon-logo" />
                            <img src={Ebay} alt="ebay-logo" />
                            <img src={Walmart} alt="walmart" />
                        </div>
                    </div>
                </div>
            </section>

            {/* section features */}

            <section className="sec-features">
                <div className="container-features">
                    <div className="subsection-heading">
                        <div className="label-badge-feature">
                            <text>FEATURES</text>
                        </div>
                        <div className="feder">
                            <h2 className="feature-heading">Features <br/> designed for you</h2>
                            <p className="feature-desc">Growth-accelerating products for startups,<br/> ecommerce stores, angel investors & more.</p>
                        </div>
                    </div>
                    <div className="features-content">
                        <div className="features-wrapper-up">
                            <div className="features-card-wrapper-1">
                                <div className="features-card">
                                    <div className="features-card-heading">
                                        <h3>Pay with Fundsphere,<br /> quick, simple and easy</h3>
                                        <p>Use Fundsphere to pay to a merchant and <br /> enjoy optimal payment user experience.</p>
                                    </div>
                                    <img src={ScanImage} alt="image-scan" />
                                </div>
                            </div>
                            <div className="features-card-wrapper-2">
                                <div className="features-card">
                                    <div className="features-card-heading">
                                        <h3>Bank-level Security</h3>
                                        <p>Personal information is encrypted and protected <br /> by industry standard banking security.</p>
                                    </div>
                                    <img src={LevelImage} alt="level-image" />
                                </div>
                            </div>
                        </div>
                        <div className="features-wrapper-low">
                            <div className="features-card-wrapper-3">
                                <div className="features-card-heading">
                                    <h3>Integrates with best <br /> of breed solution</h3>
                                    <p>Integrate with best of payment <br /> processors and accounting software.</p>
                                </div>
                                <img src={LevelImage} alt="level-image" />
                            </div>
                            <div className="features-card-wrapper-4">
                                <div className="features-card-heading">
                                    <h3>Cost Reduction</h3>
                                    <p>Fundsphere Reduced Payments maintenance <br /> and processing fees. No hidden fees.</p>
                                </div>
                                <img src={ScanImage} alt="image-scan" />
                            </div>
                        </div>
                    </div>
                    <button className="btn-features">See More Features</button>
                </div>
            </section>

            {/* section pricing plan */}

            <section className="sec-pricing">
                <div className="container-pricing">
                    <div className="sub-head-pricing">
                        <div className="label-badge-pricing">
                            <text>PRICING PLAN</text>
                        </div>
                        <h2 className="pricing-header">Choose Package</h2>
                        <p className="pricing-desc">Join our pro features for unlimited<br /> without any contract and cancel anytime.</p>
                    </div>
                    <form action="form-block">
                        <div className="form-switcher">
                            <span>Monthly</span>
                            <label className="toggle-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <span>Yearly</span>
                        </div>
                    </form>
                    <div className="pricing-content">

                        {/* pricing card basic */}

                        <div className="package-card-bsc">
                            <div className="package-gap-full-bsc">
                                <div className="package-heading-bsc">
                                    <h3 className="sub-head-bsc">Basic</h3>
                                    <p className="sub-desc-bsc">Kickstart product research <br />in your business at no cost.</p>
                                </div>
                                <ul className="list-bsc-price">
                                    <li><img src={ListIcon} />Unlimited workspace</li>
                                    <li><img src={ListIcon} />Access to RestAPI</li>
                                    <li><img src={ListIcon} />Priority Customer Support</li>
                                    <li><img src={ListIcon} />Real-Time Analytics</li>
                                    <li><img src={ListIcon} />Data Export Capabilities</li>
                                    <li><img src={ListIcon} />Advanced Security</li>
                                    <li><img src={ListIcon} />Multi-User Access</li>
                                </ul>
                            </div>
                            <div className="package-gap-half-bsc">
                                <div className="package-price-bsc">
                                    <h1 className="plan-heading-bsc">$199</h1>
                                    <text>/month</text>
                                </div>
                                <button className="book-demo-btn">Book Demo</button>
                            </div>
                        </div>

                        {/* pricing card pro */}

                        <div className="package-card-pro">
                            <div className="package-gap-full-pro">
                                <div className="package-heading-pro">
                                    <h3 className="sub-head-pro">Pro</h3>
                                    <p className="sub-desc-pro">Fuel your product workflow with <br />more advanced research features</p>
                                </div>
                                <ul className="list-pro-price">
                                    <li><img src={ListIcon} />Unlimited workspace</li>
                                    <li><img src={ListIcon} />Access to RestAPI</li>
                                    <li><img src={ListIcon} />Priority Customer Support</li>
                                    <li><img src={ListIcon} />Real-Time Analytics</li>
                                    <li><img src={ListIcon} />Data Export Capabilities</li>
                                    <li><img src={ListIcon} />Advanced Security</li>
                                    <li><img src={ListIcon} />Multi-User Access</li>
                                </ul>
                            </div>
                            <div className="package-gap-half-pro">
                                <div className="package-price-pro">
                                    <h1 className="plan-heading-pro">$250</h1>
                                    <text>/month</text>
                                </div>
                                <button className="book-center">Book Demo</button>
                            </div>
                        </div>

                        {/* pricing card enterprises */}

                        <div className="package-card-eps">
                            <div className="package-gap-full-eps">
                                <div className="package-heading-eps">
                                    <h3 className="sub-head-eps">Enterprises</h3>
                                    <p className="sub-desc-eps">Scale product research and <br /> learning across your company.</p>
                                </div>
                                <ul className="list-eps-price">
                                    <li><img src={ListIcon} />Unlimited workspace</li>
                                    <li><img src={ListIcon} />Access to RestAPI</li>
                                    <li><img src={ListIcon} />Priority Customer Support</li>
                                    <li><img src={ListIcon} />Real-Time Analytics</li>
                                    <li><img src={ListIcon} />Data Export Capabilities</li>
                                    <li><img src={ListIcon} />Advanced Security</li>
                                    <li><img src={ListIcon} />Multi-User Access</li>
                                </ul>
                            </div>
                            <div className="package-gap-half-eps">
                                <div className="package-price-eps">
                                    <h1 className="plan-heading-eps">$499</h1>
                                    <text>/month</text>
                                </div>
                                <button className="book-demo-btn">Book Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section of insight magazine */}

            <section className="insight-section">
                <div className="insight-container">
                    <div className="sub-heading-insight">
                        <div className="label-badge">
                            <text>INSIGHT</text>
                        </div>
                        <h2 className="insight-head">Magazine</h2>
                        <p className="insight-sub-head-des">Find growth insight in our blog.</p>
                    </div>
                    <div className="insight-content-wrapper">
                        <div className="insight-content">
                            <div className="insight-small-card-pay">
                                <div className="insight-image-wrapper-pay">
                                    <img src={Pay} alt="insight-pay" />
                                </div>
                                <div className="insight-overview-pay">
                                    <p className="desc-pay">Online Payment Failure: Why it <br /> Happens and How to Avoid it.</p>
                                    <text className="pay-day">January 4, 2024</text>
                                </div>
                            </div>
                            <div className="insight-small-card-strategy">
                                <div className="insight-image-wrapper-strategy">
                                    <img src={Strategy} alt="insight-strategy" />
                                </div>
                                <div className="insight-overview-strategy">
                                    <p className="desc-strategy">Some of trategies for Quickly <br /> Expanding Your Business.</p>
                                    <text className="strategy-day">February 8, 2024</text>
                                </div>
                            </div>
                            <div className="insight-small-card-business">
                                <div className="insight-image-wrapper-business">
                                    <img src={Business} alt="insight-business" />
                                </div>
                                <div className="insight-overview-business">
                                    <p className="desc-business">Business strategy converging into <br /> a new approach for <br />
                                        solving business.</p>
                                    <text className="business-day">January 16, 2024</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-insight">Read More Article</button>
                </div>
            </section>

            {/* section of Testimonial user */}

            <section className="testimony-section">
                <div className="testimony-container">

                    {/*header*/}
                    <div className="testi-heading-wrapper">
                        <div className="subs-head-testi">
                            <div className="label-testi">
                                <text>TESTIMONY</text>
                            </div>
                            <h2 className="testi-header">What others are <br /> saying about Us</h2>
                            <p className="testi-descript">Join hundreds of companies embracing <br /> Strategic Finance with Fundsphere.</p>
                        </div>
                        <div className="star-testimony">
                            <div className="star-content">
                                <div className="star-wrapper">
                                    <img src={StarTesti} />
                                    <text>4.9</text>
                                </div>
                                <text>REVIEW FROM TRUSTPILOT</text>
                            </div>
                        </div>
                    </div>

                    {/*content*/}
                    <div className="block-2">
                        <div className="testi-wrapper">

                            {/*maria evelyn*/}
                            <div className="testi-card-maria">
                                <div className="testi-image-maria">
                                    <img src={MariaEvelyn} alt="maria-evelyn-img" />
                                </div>
                                <div className="testi-quote-maria">
                                    <h3 className="testimoni">“Simple, seamless processing. <br /> Payroll reduces the number of <br /> third parties we work with.“</h3>
                                    <div className="testi-maria">
                                        <text className="username">Maria Evelyn</text>
                                        <text className="disc-mariah">Project Manager at <text className="company">Stripe</text></text>
                                    </div>
                                </div>
                            </div>

                            {/*john smith*/}
                            <div className="testi-card-john">
                                <div className="testi-image-john">
                                    <img src={JohnSmith} alt="john-smith-img" />
                                </div>
                                <div className="testi-quote-john">
                                    <h3 className="testimoni">“Simplified processes, reduced<br /> costs. Highly recommend“</h3>
                                    <div className="testi-john">
                                        <text className="username">John Smith</text>
                                        <text className="disc-john">Operator Manager at <text className="company">Ebay</text></text>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <button className="btn-insight">Read More Article</button>
                </div>
            </section>

            {/*Bagian khusus untuk CTA dan Footer*/}

            {/* Bagian untuk CTA */}

            <div className="CTA-footer-wrap">
                <div className="sect-cta-v2">
                    <div className="container-cta">
                        <div className="section-cta">
                            <div className="CTA-Wrapper">
                                <div className="CTA-content">
                                    <h2 className="CTA-heading">Get started today for <br /> better future finance</h2>
                                    <div className="CTA-Right">
                                        <p>Fundsphere is a compass for business leaders, <br /> scale with checking and savings accounts, <br /> custom tools, and access to our investor network.</p>
                                        <form action="input">
                                            <div className="cta-btn-wrapper">
                                                <button type="submit">Get Started</button>
                                                <input type="text" placeholder="Your work email" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}

                <footer>
                    <div className="container-footer">
                        <div className="footer-top">
                            <div className="menus-row">
                                {/*Platform footer section*/}
                                <div className="menus-col-platform">
                                    <text className="header-col">Platform</text>
                                    <div className="menu-links-platform-wrapper">
                                        <li><a href="#">Why Fundsphere?</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </div>
                                </div>
                                {/*Features footer section*/}
                                <div className="menus-col-features">
                                    <text className="header-col">Features</text>
                                    <div className="menu-links-features-wrapper">
                                        <li><a href="#">Payments</a></li>
                                        <li><a href="#">API</a></li>
                                        <li><a href="#">Ecommerce</a></li>
                                        <li><a href="#">Business</a></li>
                                    </div>
                                </div>
                                {/*Company footer section*/}
                                <div className="menus-col-company">
                                    <text className="header-col">Company</text>
                                    <div className="menu-links-company-wrapper">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Career</a></li>
                                        <li><a href="#">Blog</a></li>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-icon-paragraph">
                                <img src={FootLogo} alt="" />
                                <p>Sudirman St., 12B, Malang <br />+1 215-2231-5523 <br /> hello@fundsphere.id</p>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <text className="copy-right">© Fundsphere Copyright 2024. All Rights Reserved.</text>
                            <div className="footer-icon">
                                <img src={Socmed} alt="social" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Fundsphere
