import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../constants/colors';
import { Icon } from '../general';
import startButton from '../../assets/Frame/start-button.png';
import startButtonActive from '../../assets/Frame/start-button-active.png';
// import { } from '../general';
// import Home from '../site/Home';
// import Window from './Window';

export interface ToolbarProps {
    windows: DesktopWindows;
    toggleMinimize: (key: string) => void;
    shutdown: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
    windows,
    toggleMinimize,
    shutdown,
}) => {
    const getTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let mins = minutes < 10 ? '0' + minutes : minutes;
        const strTime = hours + ':' + mins + ' ' + amPm;
        return strTime;
    };

    const [startWindowOpen, setStartWindowOpen] = useState(false);
    const lastClickInside = useRef(false);

    const [lastActive, setLastActive] = useState('');

    useEffect(() => {
        let max = 0;
        let k = '';
        Object.keys(windows).forEach((key) => {
            if (windows[key].zIndex >= max) {
                max = windows[key].zIndex;
                k = key;
            }
        });
        setLastActive(k);
    }, [windows]);

    const [time, setTime] = useState(getTime());

    const updateTime = () => {
        setTime(getTime());
        setTimeout(() => {
            updateTime();
        }, 5000);
    };

    useEffect(() => {
        updateTime();
    });

    const onCheckClick = () => {
        if (lastClickInside.current) {
            setStartWindowOpen(true);
        } else {
            setStartWindowOpen(false);
        }
        lastClickInside.current = false;
    };

    useEffect(() => {
        window.addEventListener('mousedown', onCheckClick, false);
        return () => {
            window.removeEventListener('mousedown', onCheckClick, false);
        };
    }, []);

    const onStartWindowClicked = () => {
        setStartWindowOpen(true);
        lastClickInside.current = true;
    };

    const toggleStartWindow = () => {
        if (!startWindowOpen) {
            lastClickInside.current = true;
        } else {
            lastClickInside.current = false;
        }
    };

    return (
        <div style={styles.toolbarOuter}>
            {startWindowOpen && (
                <div
                    onMouseDown={onStartWindowClicked}
                    style={styles.startWindow}
                >
                    <div style={styles.startWindowInner}>
                        <div style={styles.verticalStartContainer}>
                            <p style={styles.verticalText}>HeffernanOS</p>
                        </div>
                        <div style={styles.startWindowContent}>
                            <div style={styles.startMenuSpace} />
                            <div style={styles.startMenuLine} />
                            <div
                                className="start-menu-option"
                                style={styles.startMenuOption}
                                onMouseDown={shutdown}
                            >
                                <Icon
                                    style={styles.startMenuIcon}
                                    icon="computerBig"
                                />
                                <p style={styles.startMenuText}>
                                    Sh<u>u</u>t down...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div style={styles.toolbarInner}>
                <div style={styles.toolbar}>
                    <button
                        type="button"
                        style={Object.assign(
                            {},
                            styles.startContainerOuter,
                            startWindowOpen && styles.startContainerOuterActive
                        )}
                        onMouseDown={toggleStartWindow}
                        aria-label="Start"
                    >
                        <span style={styles.startContent}>
                            <Icon
                                size={18}
                                icon="windowsStartIcon"
                                style={styles.startIcon}
                            />
                            <span style={styles.startLabel}>Start</span>
                        </span>
                    </button>
                    <div style={styles.toolbarTabsContainer}>
                        {Object.keys(windows).map((key) => {
                            return (
                                <div
                                    key={key}
                                    style={Object.assign(
                                        {},
                                        styles.tabContainerOuter,
                                        lastActive === key &&
                                            !windows[key].minimized &&
                                            styles.activeTabOuter
                                    )}
                                    onMouseDown={() => toggleMinimize(key)}
                                >
                                    <div
                                        style={Object.assign(
                                            {},
                                            styles.tabContainer,
                                            lastActive === key &&
                                                !windows[key].minimized &&
                                                styles.activeTabInner
                                        )}
                                    >
                                        <Icon
                                            size={18}
                                            icon={windows[key].icon}
                                            style={styles.tabIcon}
                                        />
                                        <p style={styles.tabText}>
                                            {windows[key].name}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div style={styles.time}>
                    <Icon style={styles.volumeIcon} icon="volumeOn" />
                    <p style={styles.timeText}>{time}</p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    toolbarOuter: {
        boxSizing: 'border-box',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 30,
        backgroundColor: '#1e5aa6',
        backgroundImage:
            'linear-gradient(180deg, rgba(56,136,233,1) 0%, rgba(56,136,233,1) 30%, rgba(109,178,255,0.7) 60%, rgba(0,0,0,0.22) 100%)',
        boxShadow:
            'inset 0px 10px 8px rgba(56,136,233,1), inset 0px -5px 7px rgba(0,0,0,0.22), inset 0px 4px 4px rgba(109,178,255,0.7)',
        borderTop: `1px solid ${Colors.white}`,
        zIndex: 100000,
        display: 'flex',
    },
    verticalStartContainer: {
        // width: 30,
        height: '100%',
        background: Colors.darkGray,
    },
    verticalText: {
        fontFamily: 'Terminal',
        textOrientation: 'sideways',
        fontSize: 32,
        padding: 4,
        paddingBottom: 64,
        paddingTop: 8,
        letterSpacing: 1,
        color: Colors.lightGray,
        transform: 'scale(-1)',
        WebkitTransform: 'scale(-1)',
        MozTransform: 'scale(-1)',
        msTransform: 'scale(-1)',
        OTransform: 'scale(-1)',
        // @ts-ignore
        writingMode: 'tb-rl',
    },
    startWindowContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // alignItems: 'flex-end',
    },
    startWindow: {
        position: 'absolute',
        bottom: 28,
        display: 'flex',
        flex: 1,
        width: 256,
        // height: 400,
        left: 4,
        boxSizing: 'border-box',
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        background: Colors.lightGray,
    },
    activeTabOuter: {
        border: '1px solid rgba(12, 64, 150, 0.75)',
        borderBottomColor: 'rgba(255,255,255,0.6)',
        borderRightColor: 'rgba(255,255,255,0.6)',
        backgroundColor: '#2f6edc',
    },
    startWindowInner: {
        border: `1px solid ${Colors.lightGray}`,
        borderBottomColor: Colors.darkGray,
        borderRightColor: Colors.darkGray,
        flex: 1,
    },
    startMenuIcon: {
        width: 32,
        height: 32,
    },
    startMenuText: {
        fontSize: 14,
        fontFamily: 'MSSerif',
        marginLeft: 8,
    },
    startMenuOption: {
        alignItems: 'center',
        // flex: 1,
        height: 24,
        padding: 12,
    },
    startMenuSpace: {
        flex: 1,
    },
    startMenuLine: {
        height: 1,
        background: Colors.white,
        borderTop: `1px solid ${Colors.darkGray}`,
    },
    activeTabInner: {
        border: '1px solid rgba(255,255,255,0.45)',
        borderBottomColor: 'rgba(0,0,0,0.25)',
        borderRightColor: 'rgba(0,0,0,0.25)',
        backgroundImage:
            'linear-gradient(180deg, rgba(114,174,255,0.95) 0%, rgba(65,130,236,0.98) 55%, rgba(36,96,210,1) 100%)',
        boxShadow:
            'inset 0px 2px 4px rgba(255,255,255,0.4), inset 0px -2px 4px rgba(0,0,0,0.2)',
        pointerEvents: 'none',
    },
    tabContainerOuter: {
        display: 'flex',
        flex: 1,
        maxWidth: 300,
        marginRight: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        border: '1px solid rgba(30, 64, 175, 0.5)',
        borderRadius: 4,
        height: 28,
        alignItems: 'center',
        backgroundColor: '#3b82f6',
        boxShadow:
            '2px 0px 2px rgba(0,0,0,0.07), inset 1.5px 1.5px 1px rgba(255,255,255,0.25), inset 0px 4px 8px rgba(255,255,255,0.15), inset -2px -2px 2px rgba(0,0,0,0.10)',
    },
    tabContainer: {
        display: 'flex',
        border: 'none',
        alignItems: 'center',
        paddingLeft: 4,
        flex: 1,
        height: '100%',
        minWidth: 0,
    },
    tabIcon: {
        marginRight: 8,
    },
    startContainerOuter: {
        marginLeft: 0,
        boxSizing: 'border-box',
        cursor: 'pointer',
        border: 'none',
        padding: 0,
        backgroundColor: 'transparent',
        width: 96,
        height: 28,
        backgroundImage: `url(${startButton})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
    },
    startContainerOuterActive: {
        backgroundImage: `url(${startButtonActive})`,
    },
    startContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        paddingLeft: 0,
        width: '100%',
    },
    startLabel: {
        fontSize: 16,
        fontFamily: 'Tahoma',
        fontWeight: 550,
        fontStyle: 'italic',
        color: Colors.white,
        textShadow: '1px 1px 0px rgba(0,0,0,0.6)',
        userSelect: 'none',
        letterSpacing: -0.2,
        lineHeight: '12px',
        textTransform: 'lowercase',
    },
    toolbarTabsContainer: {
        // background: 'blue',
        flex: 1,
        marginLeft: 4,
        marginRight: 4,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    startIcon: {
        marginRight: 0,
    },
    toolbarInner: {
        borderTop: `1px solid ${Colors.white}`,
        alignItems: 'center',
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    toolbar: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
    },
    time: {
        flexShrink: 1,
        width: 92,
        height: 22,
        boxSizing: 'border-box',
        marginRight: 6,
        paddingLeft: 6,
        paddingRight: 6,
        backgroundColor: '#0ea5e9',
        border: `1px solid ${Colors.white}`,
        borderTopColor: Colors.darkGray,
        boxShadow:
            '-2px 0px 1px rgba(0,0,0,0.5), inset -2px -4px 15px rgba(0,0,0,0.25), inset 5px 5px 5px rgba(22,172,240,1)',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderLeftColor: Colors.darkGray,
        marginTop: 2,
        display: 'flex',
    },
    volumeIcon: {
        cursor: 'pointer',
        height: 18,
    },
    tabText: {
        fontSize: 14,
        fontFamily: 'MSSerif',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    timeText: {
        fontSize: 12,
        fontFamily: 'MSSerif',
    },
};

export default Toolbar;
