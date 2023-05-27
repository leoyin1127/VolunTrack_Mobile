import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
const Search = () => {
  const navigate = useNavigate();

  const onTransparentLogo1IconClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMailIconClick = useCallback(() => {
    navigate("/mail");
  }, [navigate]);

  const onVectorIcon1Click = useCallback(() => {
    navigate("/bookmarked");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer7Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer11Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer15Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer19Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer23Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer27Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer31Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer35Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer39Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer43Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer47Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer51Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer55Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer59Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer63Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer67Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer71Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer75Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  const onFrameContainer79Click = useCallback(() => {
    navigate("/volunteering");
  }, [navigate]);

  return (
    <div className={styles.search}>
      <div className={styles.searchChild} />
      <div className={styles.opportunity}>opportunity</div>
      <img className={styles.circleIcon} alt="" />
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <img
        className={styles.bookmarkOutlineIcon}
        alt=""
        src="/bookmark-outline.svg"
      />
      <img
        className={styles.bookmarkOutlineIcon}
        alt=""
        src="/bookmark-outline.svg"
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
              src="/icon--mobile-signal.svg"
            />
            <img className={styles.wifiIcon} alt="" src="/wifi.svg" />
            <img
              className={styles.statusbarBatteryIcon}
              alt=""
              src="/-statusbarbattery.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.searchItem} />
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
      <img className={styles.homeIcon} alt="" src="/home.svg" />
      <img
        className={styles.mailIcon}
        alt=""
        src="/mail.svg"
        onClick={onMailIconClick}
      />
      <img className={styles.searchIcon} alt="" src="/search.svg" />
      <img
        className={styles.vectorIcon1}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIcon1Click}
      />
      <div className={styles.searchInner} />
      <div className={styles.searchParent}>
        <img className={styles.searchIcon1} alt="" src="/search1.svg" />
        <div className={styles.discoverNewOpportunites}>
          Discover new opportunites
        </div>
      </div>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-60.svg" />
      <div className={styles.citylocation}>City/Location</div>
      <img className={styles.keyboardArrowDown} alt="" />
      <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
      <b className={styles.volunteerOpportunities}>Volunteer Opportunities</b>
      <img className={styles.searchChild1} alt="" />
      <div className={styles.hours}>30 hours</div>
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
        <div className={styles.hours1}>0 hours</div>
      </div>
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
        <div className={styles.frameWrapper} onClick={onFrameContainer35Click}>
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
        <div
          className={styles.frameWrapper12}
          onClick={onFrameContainer55Click}
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
        <div className={styles.frameWrapper6} onClick={onFrameContainer59Click}>
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
        <div
          className={styles.frameWrapper14}
          onClick={onFrameContainer67Click}
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
        <div
          className={styles.frameWrapper17}
          onClick={onFrameContainer75Click}
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
        <div
          className={styles.frameWrapper16}
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

export default Search;
