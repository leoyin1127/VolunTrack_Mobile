import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bookmarked.module.css";
const Bookmarked = () => {
  const navigate = useNavigate();

  const onHomeIconClick = useCallback(() => {
    // Please sync "homepage" to the project
  }, []);

  const onMailIconClick = useCallback(() => {
    navigate("/mail");
  }, [navigate]);

  const onSearchIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTransparentLogo1IconClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer7Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer11Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer15Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer19Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer23Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer27Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer31Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer35Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer39Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer43Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer47Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer51Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer55Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer59Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer63Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer67Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer71Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer75Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  const onFrameContainer79Click = useCallback(() => {
    // Please sync "volunteering " to the project
  }, []);

  return (
    <div className={styles.bookmarked}>
      <b className={styles.bookmarked1}>{`Bookmarked `}</b>
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
              src="/icon--mobile-signal2.svg"
            />
            <img className={styles.wifiIcon} alt="" src="/wifi3.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.bookmarkedChild} />
      <img
        className={styles.homeIcon}
        alt=""
        src="/home.svg"
        onClick={onHomeIconClick}
      />
      <img
        className={styles.mailIcon}
        alt=""
        src="/mail.svg"
        onClick={onMailIconClick}
      />
      <img
        className={styles.searchIcon}
        alt=""
        src="/search2.svg"
        onClick={onSearchIconClick}
      />
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <img
        className={styles.transparentLogo1Icon}
        alt=""
        src="/transparent-logo-1@2x.png"
        onClick={onTransparentLogo1IconClick}
      />
      <img className={styles.bookmarkIcon} alt="" />
      <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector5.svg" />
      <img
        className={styles.keyboardArrowRight}
        alt=""
        src="/keyboard-arrow-right.svg"
      />
      <div className={styles.bookmarkedItem} />
      <div className={styles.searchParent}>
        <img className={styles.searchIcon1} alt="" src="/search1.svg" />
        <div className={styles.search}>{`Search `}</div>
      </div>
      <div className={styles.slidervariant3}>
        <div className={styles.range}>
          <div className={styles.slider}>
            <img
              className={styles.middleAdjustable}
              alt=""
              src="/middle---adjustable.svg"
            />
            <img className={styles.rangeKnob} alt="" src="/-range--knob.svg" />
            <div className={styles.right}>
              <div className={styles.rightChild} />
              <div className={styles.rightChild} />
            </div>
          </div>
        </div>
        <div className={styles.hours}>0 hours</div>
      </div>
      <div className={styles.hours1}>30 hours</div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper} onClick={onFrameContainer3Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Markham</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Brockville Summer Camp
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameContainer} onClick={onFrameContainer7Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>North York</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Camp Muskoka</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1} onClick={onFrameContainer11Click}>
          <div className={styles.frameParent1}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Toronto</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              STEM Summer Program
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper2} onClick={onFrameContainer15Click}>
          <div className={styles.frameParent1}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Toronto</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Community Cleanup</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper3} onClick={onFrameContainer19Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Toronto</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Food Market</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4} onClick={onFrameContainer23Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Toronto</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Beach Volleyball</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper5} onClick={onFrameContainer27Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Oshawa</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Community Clean Up
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper6} onClick={onFrameContainer31Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Oshawa</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Community Clean Up
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper7} onClick={onFrameContainer35Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Markham</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Child Care</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper8} onClick={onFrameContainer39Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Ajax</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Robotics Camp</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper9} onClick={onFrameContainer43Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Ajax</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Robotics Camp</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.frameWrapper10}
          onClick={onFrameContainer47Click}
        >
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Ajax</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Robotics Camp</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.frameWrapper11}
          onClick={onFrameContainer51Click}
        >
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Oshawa</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Community Clean Up
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper6} onClick={onFrameContainer55Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Oshawa</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Community Clean Up
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.frameWrapper13}
          onClick={onFrameContainer59Click}
        >
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Oshawa</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Community Clean Up
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.frameWrapper14}
          onClick={onFrameContainer63Click}
        >
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Markham</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Brockville Summer Camp
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper7} onClick={onFrameContainer67Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Markham</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Brockville Summer Camp
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.frameWrapper16}
          onClick={onFrameContainer71Click}
        >
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Ajax</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Robotics Camp</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper} onClick={onFrameContainer75Click}>
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Markham</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>
              Brockville Summer Camp
            </div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={styles.frameWrapper10}
          onClick={onFrameContainer79Click}
        >
          <div className={styles.frameGroup}>
            <div className={styles.hoursParent}>
              <b className={styles.hours2}>20 hours</b>
              <div className={styles.markham}>Ajax</div>
            </div>
            <div className={styles.brockvilleSummerCamp}>Robotics Camp</div>
            <div className={styles.bookmarkWrapper}>
              <img
                className={styles.bookmarkIcon1}
                alt=""
                src="/bookmark.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
