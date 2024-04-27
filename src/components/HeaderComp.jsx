import React from 'react';
import avatar from '../assets/images/image-profile.png';
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MessageOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const HeaderComp = () => {
  return (
    <header>
      <div className='left'>
        <img className="photo-profil" src={avatar} alt="photo-profile"/>
        <div className='user-infos'>
            <h1>Mohammed Mennioui</h1>
            <h3>Developpeur web</h3>
            <div className='contacts'>
                <div className='contact-item'>
                <LinkedinOutlined />
                </div>
                <div className='contact-item'>
                <TwitterOutlined />
                </div>
                <div className='contact-item'>
                <GithubOutlined />
                </div>
                <div className='contact-item'>
                <FacebookOutlined />
                </div>
          </div>
        </div>
      </div>
      <div className='right'>
      </div>
    </header>
  );
}

export default HeaderComp;
