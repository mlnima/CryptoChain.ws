import React, {useContext} from 'react';
import './GetStart.scss';
import {Translate} from "react-translated";
import BitcoinImage from '../../../../images/bitcoin-img.svg';
import {AppContext} from "../../../../context/AppContext";
import InstantIcon from '../../../../images/main_ico_instant.svg'
import LowFeeIcon from '../../../../images/main_ico_lowfee.svg'
import WorldWideIcon  from '../../../../images/main_ico_worldwide.svg'

const GetStart = () => {

    let contextData = useContext(AppContext);

    const GetStartText = () => {
        if (contextData.state.language === 'fa') {
            return (
                <p>Bitcoin از تکنولوژی peer-to-peer برای کار با هیچ مقام مرکزی یا بانک استفاده نمی کند؛ مدیریت معاملات و صدور بیت کوین ها به صورت جمعی توسط شبکه انجام می شود. بیت کوین منبع باز است؛ طراحی آن عمومی است، هیچ کس صاحب یا کنترل Bitcoin نیست و همه می توانند شرکت کنند. از طریق بسیاری از ویژگی های منحصر به فرد آن، Bitcoin اجازه استفاده هیجان انگیز است که نمی تواند توسط هر سیستم پرداخت قبلی پوشش داده شود.</p>
            )
        } else if (contextData.state.language === 'en') {
            return (
                <p>Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>
            )
        }

    }


    return (
        <div className='GetStart'>
            <h2><Translate text='Get started with Bitcoin'/></h2>
            <div className="GetStartContent">
                <img className='BitcoinImage' src={BitcoinImage} alt="BitcoinImage"/>
                <GetStartText/>
            </div>
            <div className="GetStartIcons">
                <div className="GetStartIcon">
                    <img src={InstantIcon} alt=""/>
                    <h3><Translate text='Fast peer-to-peer transactions'/></h3>
                </div>
                <div className="GetStartIcon">
                    <img src={WorldWideIcon} alt="WorldWideIcon"/>
                    <h3><Translate text='Worldwide payments'/></h3>
                </div>
                <div className="GetStartIcon">
                    <img src={LowFeeIcon} alt="LowFeeIcon"/>
                    <h3><Translate text='Low processing fees'/></h3>
                </div>
            </div>
            <h4><Translate text='Get started with Bitcoin'/></h4>

        </div>
    );
};

export default GetStart;