/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from 'react';
import RoundedButton from '../../toolbox/buttons/RoundedButton';
import styles from './about.module.css';
import marketresearchLogo from './assets/img/about-us/market-research.png';
import businessPlanLogo from './assets/img/about-us/business-plan.png';
import capitalismusLogo from './assets/img/about-us/capitallismus.png';
import saleMarketingLogo from './assets/img/about-us/sales-marketing.png';
import topicImage1 from './assets/img/about-us/topic-1.png';
import topicImage2 from './assets/img/about-us/topic-2.png';
import topicImage3 from './assets/img/about-us/topic-3.png';
import topicImage4 from './assets/img/about-us/topic-4.png';
import valuesImage1 from './assets/img/about-us/values-1.png';
import valuesImage2 from './assets/img/about-us/values-2.png';
import valuesImage3 from './assets/img/about-us/values-3.png';
import AboutHeaderDash from './AboutHeaderDash';
import aboutmain from './assets/img/aboutheader.png';
import Footer from './../../footer/Footer';
const About = () => {
    return (
        <div>
            <AboutHeaderDash img={aboutmain} />
            <section
                className={`${styles.services_header} d-flex direction-column justify-center align-center`}
            >
                <span className={`${styles.service_sub_title}`}>
                    ProfESSİONAL KOMANDAMIZLA
                </span>
                <span className={`${styles.service_title}`}>
                    Konsaltinq Servislərimiz
                </span>
                <div className={`${styles.circle_options} d-flex-between`}>
                    <div
                        className={`${styles.circle} ${styles.activ_circle}`}
                    ></div>
                    <div className={`${styles.circle} `}></div>
                    <div className={`${styles.circle} `}></div>
                </div>
                <div
                    className={`${styles.service_logo_group} d-flex  flex-mb-column justify-mb-center justify-between`}
                >
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={marketresearchLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Bazar Araşdırması
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={businessPlanLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Biznes Plan və TİƏ{' '}
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={capitalismusLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Kapitallaşma
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                    <div
                        className={`${styles.service_logo_box} d-flex direction-column align-center justify-center `}
                    >
                        <img
                            src={saleMarketingLogo}
                            alt=""
                            className={`${styles.service_logo}`}
                        />
                        <span className={`${styles.service_logo_sub_title}`}>
                            Satış və Marketinq
                        </span>
                        <RoundedButton top="10px" color="#17171766" />
                    </div>
                </div>
            </section>

            <div className={`${styles.container}`}>
                <section className={`${styles.topic_section} d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage1}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            LOREM IPSUM
                        </span>
                        <p className={`${styles.topic_desc}`}>
                            TWC cəmiyyətin və bizneslərin <br /> ən əhəmiyyətli
                            problemlərini həll etmək üçün kreativliyin <br />{' '}
                            sərhədlərinin olmadığı yerdir
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            LOREM IPSUM
                        </span>
                        <p className={`${styles.topic_desc}`}>
                            Biz 2018-ci ildə qurulan Azərbaycanın ilk yerli
                            menecment konsaltinq şirkətiyik.
                        </p>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage2}
                            alt=""
                        />
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div className={`${styles.image_section}`}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage3}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            LOREM IPSUM
                        </span>
                        <p className={`${styles.topic_desc}`}>
                            Bugün biz ən böyük oyunçulara <br /> sənayeni
                            müəyyən edən <br /> problemləri həll etməkdə və{' '}
                            <br /> davamlı biznes dəyəri <br /> yaratmaqda kömək
                            edirik.
                        </p>
                    </div>
                </section>

                <section className={`${styles.topic_section} d-flex`}>
                    <div
                        className={`${styles.paragraph_section} d-flex direction-column justify-center`}
                    >
                        <span className={`${styles.sub_header}`}>
                            LOREM IPSUM
                        </span>
                        <p className={`${styles.topic_desc}`}>
                            Komandamız özünə məhdudiyyət tanımayan və
                            müştərilərə dəstək üçün özündə qlobal təcrübə və{' '}
                            <br /> lokal anlayışı birləşdirənlərdən ibarətdir.
                        </p>
                    </div>
                    <div className={`${styles.image_section} `}>
                        <img
                            className={`${styles.topic_image}`}
                            src={topicImage4}
                            alt=""
                        />
                    </div>
                </section>
            </div>

            <section
                className={`${styles.extra_services_section} d-flex direction-column align-center`}
            >
                <span className={`${styles.sub_header}`}>lorem ipsum</span>
                <span className={`${styles.service_details_title}`}>
                    Dəyərlərimiz
                </span>
                <div
                    className={`${styles.circle_options} d-flex  justify-between`}
                >
                    <div
                        className={`${styles.circle} ${styles.activ_circle}`}
                    ></div>
                    <div className={`${styles.circle} `}></div>
                    <div className={`${styles.circle} `}></div>
                </div>
                <div
                    className={`${styles.image_item_group} d-flex flex-mb-column mb-align-center flex-wrap justify-between`}
                >
                    <div className={`${styles.image_item_section}`}>
                        <img
                            className={`${styles.image_item}`}
                            src={valuesImage1}
                            alt=""
                        />
                        <span className={`${styles.image_subtitle}`}>
                            Dürüstlük
                        </span>
                        <p className={`${styles.image_item_desc}`}>
                            Etdiyimiz və dediyimiz hər şeydə intellektual
                            dürüstlük kodu izlənilməlidir.
                        </p>
                    </div>
                    <div className={`${styles.image_item_section}`}>
                        <img
                            className={`${styles.image_item}`}
                            src={valuesImage2}
                            alt=""
                        />
                        <span className={`${styles.image_subtitle}`}>
                            Əməkdaşlıq
                        </span>
                        <p className={`${styles.image_item_desc}`}>
                            Hər bir daxili və xarici TWC biznes əlaqəsi uzun
                            müddətli olmalıdır.
                        </p>
                    </div>
                    <div className={`${styles.image_item_section}`}>
                        <img
                            className={`${styles.image_item}`}
                            src={valuesImage3}
                            alt=""
                        />
                        <span className={`${styles.image_subtitle}`}>
                            Fərqlilik
                        </span>
                        <p className={`${styles.image_item_desc}`}>
                            Sıradan olmayan nəticələr əldə etmək üçün hər bir
                            təcrübəyə, bacarığa və biliyə hörmət edilməlidir.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;
