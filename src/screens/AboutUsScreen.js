import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/bookmarked");
  }, [navigate]);

  const onTransparentLogo1ImageClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <b className={styles.aboutUs1}> About Us</b>
      <b className={styles.voluntrack}>VolunTrack</b>
      <div className={styles.weAreAContainer}>
        <p
          className={styles.weAreA}
        >{`We are a non-profitable organization with a `}</p>
        <p className={styles.weAreA}>
          vision to allow high-school students to reach their potential when it
          comes to gaining experience and acquiring the skills and knowledge
          they need
        </p>
      </div>
      <div className={styles.statusbar}>
        <div className={styles.leftSide}>
          <div className={styles.statusbarTime}>
            <div className={styles.time}>9:41</div>
          </div>
        </div>
        <div className={styles.dynamicIsland}>
          <div className={styles.statusbarDynamicisland}>
            <div className={styles.truedepthCamera} />
            <div className={styles.facetimeCamera} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.signalWifiBattery}>
            <img
              className={styles.iconMobileSignal}
              alt=""
              src="/icon--mobile-signal3.svg"
            />
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery4.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.aboutUsChild} />
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <img className={styles.aboutUsItem} alt="" src="/group-21.svg" />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIconClick}
      />
      <img className={styles.arrowBackIos} alt="" src="/arrow-back-ios.svg" />
      <img
        className={styles.transparentLogo1Icon}
        alt=""
        src="/transparent-logo-11@2x.png"
        onClick={onTransparentLogo1ImageClick}
      />
      <img className={styles.aboutUsInner} alt="" src="/rectangle-97@2x.png" />
    </div>
  );
};



export default AboutUs;