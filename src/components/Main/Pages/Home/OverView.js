import React from 'react';
import './OverView.scss'
import {Translate} from "react-translated";
import BusinessIco from '../../../../images/ico_business.svg'
import IndividualsIco from '../../../../images/ico_individuals.svg'
import DevelopersIco from '../../../../images/ico_developers.svg'

const OverView = () => {

        return (
            <div className='OverView'>
                <div className="">
                    <h2><Translate text='Get a quick overview for'/></h2>
                </div>
                <div className="overViewItems">
                    <div className="Individuals overViewItem">
                        <img src={IndividualsIco} alt=""/>
                        <p><Translate text='Individuals'/></p>
                    </div>
                    <div className="Businesses overViewItem">
                        <img src={BusinessIco} alt=""/>
                        <p><Translate text='Businesses'/></p>
                    </div>
                    <div className="Developers overViewItem">
                        <img src={DevelopersIco} alt=""/>
                        <p><Translate text='Developers'/></p>
                    </div>
                </div>
            </div>
        );

};

export default OverView;