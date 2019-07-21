import React from 'react';
import MobileAppPreview from './img/mobileApp.jpg'
import WebPreview from './img/webSitePreview.png'
import './StartFaPreview.scss'

const StartFaPreview = () => {

    if (window.innerWidth < 768) {
        return (
            <div>

                <img className='img' src={MobileAppPreview} alt="MobilePreview"/>
                <h3>1 .ورود به صفحه حساب کاربری </h3>
                <h3>2 .ماین کردن بیتکون به وسیله دستگاه خودتون </h3>
                <h3>3 . سرعت هش کردن که هر چه بالا تر باشه بیشتر در میارید </h3>
                <h3>4 .میزان درامد کسب شده </h3>
                <h3>5 .تعداد زیر مجموعه های شما </h3>
                <h3>6 .از همه مهم تر لینکی که با دادن اون به دوستانتون میتونید اون ها رو به عنوان زیر مجموعه خودتون به
                    سیستم معرفی کنید </h3>
            </div>
        );
    } else {
        return (
            <div>
                <img className='img' src={WebPreview} alt="MobilePreview"/>
                <h3>1 .ورود به صفحه حساب کاربری </h3>
                <h3>2 .ماین کردن بیتکون به وسیله دستگاه خودتون </h3>
                <h3>3 . سرعت هش کردن که هر چه بالا تر باشه بیشتر در میارید </h3>
                <h3>4 .میزان درامد کسب شده </h3>
                <h3>5 .تعداد زیر مجموعه های شما </h3>
                <h3>6 .از همه مهم تر لینکی که با دادن اون به دوستانتون میتونید اون ها رو به عنوان زیر مجموعه خودتون به
                    سیستم معرفی کنید </h3>
            </div>
        )

    }

};

export default StartFaPreview;