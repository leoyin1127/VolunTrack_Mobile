import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IndividualMail.module.css";
const IndividualMail = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/bookmarked");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/volunteering1");
  }, [navigate]);

  const onArrowBackIosClick = useCallback(() => {
    navigate("/mail");
  }, [navigate]);

  return (
    <div className={styles.individualMail}>
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
              src="/icon--mobile-signal1.svg"
            />
            <img className={styles.wifiIcon} alt="" src="/wifi2.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery2.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.individualMailChild} />
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.accountCircleParent}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle.svg"
        />
        <div className={styles.summerCampSupervisor}>
          Summer Camp Supervisor
        </div>
      </div>
      <div className={styles.accountCircleGroup}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleContainer}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent1}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent2}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent3}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent4}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent5}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent6}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent7}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent8}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent9}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent10}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent11}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent12}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleGroup}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleContainer}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent1}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent2}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent3}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent4}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent5}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent6}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent7}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent8}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent9}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent10}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent11}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <div className={styles.accountCircleParent12}>
        <img
          className={styles.accountCircleIcon}
          alt=""
          src="/account-circle1.svg"
        />
        <b className={styles.user}>User</b>
      </div>
      <b className={styles.brockvilleSummerCamp}>Brockville Summer Camp</b>
      <img className={styles.individualMailItem} alt="" src="/group-22.svg" />
      <div className={styles.individualMailInner} />
      <div className={styles.callingAllCamp}>Calling All Camp Supervisors!</div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIconClick}
      />
      <div className={styles.frameParent}>
        <div />
        <img className={styles.frameChild} alt="" src="/rectangle-78@2x.png" />
        <div className={styles.thisVolunteerOpportunityIsParent}>
          <div className={styles.thisVolunteerOpportunityContainer}>
            <span>{`This volunteer opportunity is about to expire in 2 days? Thinking about applying? Click `}</span>
            <b className={styles.here}>here</b>
          </div>
          <div className={styles.frameItem} onClick={onRectangle2Click} />
        </div>
      </div>
      <div className={styles.hours}>
        <span>20 hours</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.markham}>Markham</div>
      <img
        className={styles.arrowBackIos}
        alt=""
        src="/arrow-back-ios.svg"
        onClick={onArrowBackIosClick}
      />
      <img className={styles.trashIcon} alt="" src="/trash.svg" />
      <img className={styles.iosShareIcon} alt="" src="/ios-share1.svg" />
    </div>
  );
};

export default IndividualMail;
