import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Volunteering.module.css";
const Volunteering = () => {
  const navigate = useNavigate();

  const onVectorIconClick = useCallback(() => {
    navigate("/bookmarked");
  }, [navigate]);

  const onArrowBackIosClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.volunteering}>
      <div className={styles.volunteeringChild} />
      <img
        className={styles.volunteeringItem}
        alt=""
        src="/rectangle-91@2x.png"
      />
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
            <img className={styles.wifiIcon} alt="" src="/wifi1.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery1.svg"
            />
          </div>
        </div>
      </div>
      <img className={styles.iosShareIcon} alt="" src="/ios-share.svg" />
      <div className={styles.volunteeringInner} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-55.svg" />
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <img className={styles.groupIcon} alt="" src="/group-24.svg" />
      <div className={styles.applyNow}>Apply Now</div>
      <img
        className={styles.bookmarkOutlineIcon}
        alt=""
        src="/bookmark-outline1.svg"
      />
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIconClick}
      />
      <b className={styles.brockvilleSummerCamp}>Brockville Summer Camp</b>
      <img
        className={styles.arrowBackIos}
        alt=""
        src="/arrow-back-ios.svg"
        onClick={onArrowBackIosClick}
      />
      <div className={styles.summerCampAssistantParent}>
        <div className={styles.summerCampAssistant}>Summer Camp Assistant</div>
        <div className={styles.programeventOutlineVolunteContainer}>
          <p className={styles.programeventOutline}>Program/Event Outline:</p>
          <p className={styles.programeventOutline}>&nbsp;</p>
          <p className={styles.volunteersWillHelp}>
            Volunteers will help assist campers to have opportunities to develop
            sport, swimming and gross motor skills in a non competitive and fun
            environment
          </p>
          <p className={styles.volunteersWillHelp}>&nbsp;</p>
          <p className={styles.programeventOutline}>
            Primary responsibilities or tasks:
          </p>
          <ul className={styles.providingYourSuggestionAnd}>
            <li>
              <span>
                Providing your suggestion and ideas for new games or activities
                that could be incorporated into camps.
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.howToApplyContainer}>
        <p className={styles.volunteersWillHelp}>How to Apply / Contact</p>
        <p className={styles.volunteersWillHelp}>
          {`If you are interested in applying for the Summer Camp Assistant position, please fill out the volunteer application form on our `}
          <a
            className={styles.website}
            href="http://www.varietyontario.ca/"
            target="_blank"
          >
            <span className={styles.website1}>website</span>
          </a>
          .
        </p>
        <p className={styles.volunteersWillHelp}>&nbsp;</p>
        <p className={styles.volunteersWillHelp}>
          Submit your application via email, or in person to:
        </p>
        <p className={styles.volunteersWillHelp}>
          Smeeta Sohanlal, Volunteer Coordinator
        </p>
        <p className={styles.volunteersWillHelp}>416-699-7167 ext 239</p>
        <p className={styles.volunteersWillHelp}>ssohanlal@varietyontario.ca</p>
        <p className={styles.volunteersWillHelp}>
          Deadline for applications is: May 1st, 2023
        </p>
      </div>
      <img
        className={styles.volunteeringChild1}
        alt=""
        src="/rectangle-80@2x.png"
      />
      <b className={styles.volunteeringHoursOffered}>
        20 Volunteering Hours Offered
      </b>
      <img className={styles.locationOnIcon} alt="" src="/location-on.svg" />
      <div className={styles.frameParent}>
        <div className={styles.placeParent}>
          <img className={styles.placeIcon} alt="" src="/place.svg" />
          <img className={styles.placeIcon} alt="" src="/toc.svg" />
          <div className={styles.accountBoxParent}>
            <img className={styles.placeIcon} alt="" src="/account-box.svg" />
            <div className={styles.dateRangeParent}>
              <img className={styles.placeIcon} alt="" src="/date-range.svg" />
              <img className={styles.placeIcon} alt="" src="/email.svg" />
            </div>
          </div>
        </div>
        <div className={styles.dexterBlvdParent}>
          <div className={styles.dexterBlvd}>123 Dexter Blvd.</div>
          <div className={styles.dexterBlvd}>Social, Sports and Leisure</div>
          <div className={styles.dexterBlvd}>Brockville Summer Camp</div>
          <div className={styles.dexterBlvd}>April 12 - 15, 2023</div>
          <div className={styles.dexterBlvd}>
            brockvillesummercamp.gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
