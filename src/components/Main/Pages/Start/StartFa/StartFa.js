import React from 'react';
import './StartFa.scss';
import downloadDesktop from './img/downloadDesktop.png';
import downloadMobile from './img/downloadMobile.png'
import StartFaPreview from "./StartFaPreview";

const StartFa = () => {
    let downloadImage = () => {
        let image;
        if (window.innerWidth < 768) {
            image = downloadMobile
        } else {
            image = downloadDesktop
        }
        return image
    };
    return (
        <div className='Learn'>
            <h1>اموزش درامد زایی از بیتکوین</h1>
            <p>کافیه بذارید موبایل , لپ تاپ یا کامپیوتر خونگیتون وصل باشه و فعالیت کنه و زير مجموعه جذب كنين </p>
            <h2>ابتدا به لینک زیر برید</h2>
            <a className='downloadBtn' href="https://get.cryptobrowser.site/en/4789121/" target='_blank' rel='next'>لینک
                دانلود</a>
            <br/>
            <a href="https://get.cryptobrowser.site/en/4789121/" target='_blank' rel='next'>
                <img className='img' src={downloadImage()} alt="دانلود"/>
            </a>
            <p>در این مرحله بر روی دکمه ابی رنگ دانلود بزنید</p>
            <h2>بعد از نصب برنامه رو باز کنید</h2>
            <StartFaPreview/>
        </div>
    );
};

export default StartFa;