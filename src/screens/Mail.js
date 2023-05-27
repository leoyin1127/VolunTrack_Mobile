import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Mail.module.css";
const Mail = () => {
  const navigate = useNavigate();

  const onSearchIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTransparentLogo4IconClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onVectorIconClick = useCallback(() => {
    navigate("/bookmarked");
  }, [navigate]);

  return (
    <div className={styles.mail}>
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
      <div className={styles.mailChild} />
      <img className={styles.menuIcon} alt="" src="/menu.svg" />
      <div className={styles.accountCircleParent}>
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
      <div className={styles.accountCircleParent}>
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
      <img className={styles.homeIcon} alt="" src="/home.svg" />
      <img className={styles.mailIcon} alt="" src="/mail1.svg" />
      <img
        className={styles.searchIcon}
        alt=""
        src="/search2.svg"
        onClick={onSearchIconClick}
      />
      <img
        className={styles.transparentLogo4Icon}
        alt=""
        src="/transparent-logo-1@2x.png"
        onClick={onTransparentLogo4IconClick}
      />
      <div className={styles.homeindicator}>
        <div className={styles.homeIndicator} />
      </div>
      <b className={styles.mail1}>Mail</b>
      <div className={styles.mailItem} />
      <div className={styles.searchParent}>
        <img className={styles.searchIcon1} alt="" src="/search1.svg" />
        <div className={styles.searchMail}>Search mail</div>
      </div>
      <img
        className={styles.vectorIcon}
        alt=""
        src="/vector1.svg"
        onClick={onVectorIconClick}
      />
      <img className={styles.trashIcon} alt="" src="/trash.svg" />
      <div className={styles.mailInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-23@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Brockville Summer Camp
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Volunteering Positions Open for Applications! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-24@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Eco Council `}</div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div className={styles.brockvilleSummerCamp}>
                      Community Cleanup Volunteers Needed!
                    </div>
                    <img className={styles.vectorIcon1} alt="" />
                  </div>
                </div>
                <div className={styles.pm}>9:04pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
              </div>
            </div>
            <div className={styles.ellipseContainer}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-25@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Gardening Club
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Calling All Gardners! We Need You! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent1}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-251@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Beach Volleyball
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`In Need of Assistant Instructors! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>3:13pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent2}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-252@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      The Salvation Army
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Volunteering Applications Open! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>2:13pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent3}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-241@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Retirement Home
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div className={styles.brockvilleSummerCamp}>
                      Volunteers Needed!
                    </div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>4:50pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent4}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-242@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Rock Climbing Facility
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Volunteering Positions for Instructors! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>5:10pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent5}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-243@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>STEM Camp</div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div className={styles.brockvilleSummerCamp}>
                      Volunteer Positions Open for Applications!
                    </div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>6:25pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent6}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-244@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Toronto Public Library `}</div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div className={styles.brockvilleSummerCamp}>
                      Volunteers Needed!
                    </div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:10pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent7}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-245@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>Golf Club</div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Recruiting Volunteers Now! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>1:20pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent8}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-246@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>Church</div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Volunteering Positions Open! `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>5:32pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.ellipseParent9}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-247@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Baseball Camp
                    </div>
                  </div>
                  <div className={styles.callingAllFutureBaseballCoParent}>
                    <div
                      className={styles.callingAllFuture}
                    >{`Calling All Future Baseball Coaches! Volunteers Needed!  `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>3:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent27}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent28}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent29}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent30}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent31}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent32}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent33}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent34}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent35}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent36}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent37}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent38}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent39}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent40}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent41}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent42}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent43}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent44}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent45}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent46}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent47}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent48}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent49}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent50}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
          <div className={styles.frameParent72}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent52}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent53}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent54}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent55}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent56}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent57}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent58}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent59}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent60}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent61}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent62}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent63}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent64}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent65}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent66}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent67}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent68}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent69}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent70}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent71}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent72}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent73}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent74}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent75}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent76}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent77}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent78}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent79}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent80}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent81}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent82}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent83}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent84}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent85}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className={styles.accountCircleParent86}>
              <img
                className={styles.accountCircleIcon30}
                alt=""
                src="/account-circle2.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameParent1}>
                  <div className={styles.brockvilleSummerCampWrapper}>
                    <div className={styles.brockvilleSummerCamp}>
                      Company/Volunteer Place
                    </div>
                  </div>
                  <div className={styles.volunteeringPositionsOpenFoParent}>
                    <div
                      className={styles.brockvilleSummerCamp}
                    >{`Header `}</div>
                    <img className={styles.vectorIcon1} alt="" />
                    <div className={styles.starBorder} />
                  </div>
                </div>
                <div className={styles.pm}>8:34pm</div>
                <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.starIcon} alt="" />
    </div>
  );
};

export default Mail;
