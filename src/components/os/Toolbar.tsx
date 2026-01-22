import React, { useEffect, useRef, useState } from 'react';
import Colors from '../../constants/colors';
import { Icon } from '../general';
import startButton from '../../assets/Frame/start-button.png';
import startButtonActive from '../../assets/Frame/start-button-active.png';
import ResumePdf from '../../assets/resume/LeThanhAn_CV.pdf';
import startAvatar from '../../assets/profile-pics/start-avatar.png';
// import { } from '../general';
// import Home from '../site/Home';
// import Window from './Window';

export interface ToolbarProps {
    windows: DesktopWindows;
    shortcuts: Array<{ shortcutName: string; icon: any; onOpen?: () => void }>;
    toggleMinimize: (key: string) => void;
    minimizeAll: () => void;
    shutdown: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
    windows,
    shortcuts,
    toggleMinimize,
    minimizeAll,
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

    const [startLogoFailed, setStartLogoFailed] = useState(false);

    const [viewportWidth, setViewportWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    );

    const isCompact = viewportWidth <= 420;
    const isTablet = viewportWidth > 420 && viewportWidth <= 900;

    const [hoveredStartItem, setHoveredStartItem] = useState<string | null>(
        null
    );

    const onOpenExternal = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
        setStartWindowOpen(false);
    };

    const onOpenResume = () => {
        window.open(ResumePdf, '_blank', 'noopener,noreferrer');
        setStartWindowOpen(false);
    };

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

    useEffect(() => {
        const tick = () => setTime(getTime());
        tick();
        const intervalId = window.setInterval(tick, 5000);
        return () => window.clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const onResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

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
                    style={Object.assign(
                        {},
                        styles.startMenuXp,
                        isCompact && styles.startWindowCompact
                    )}
                >
                    <div style={styles.startMenuXpInner}>
                        <div style={styles.startMenuHeader}>
                            <img
                                src={startAvatar}
                                alt=""
                                style={styles.startMenuAvatar}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            <div style={styles.startMenuName}>Le Thanh An</div>
                        </div>

                        <div style={styles.startMenuColumns}>
                            <div style={styles.startMenuLeft}>
                                {shortcuts.slice(0, 7).map((s) => (
                                    <div
                                        key={s.shortcutName}
                                        style={Object.assign(
                                            {},
                                            styles.startMenuItem,
                                            hoveredStartItem ===
                                                `left:${s.shortcutName}` &&
                                                styles.startMenuItemHover
                                        )}
                                        onMouseEnter={() =>
                                            setHoveredStartItem(
                                                `left:${s.shortcutName}`
                                            )
                                        }
                                        onMouseLeave={() =>
                                            setHoveredStartItem(null)
                                        }
                                        onMouseDown={() => {
                                            s.onOpen?.();
                                            setStartWindowOpen(false);
                                        }}
                                    >
                                        <Icon
                                            style={styles.startMenuItemIcon}
                                            icon={s.icon}
                                        />
                                        <div style={styles.startMenuItemTextWrap}>
                                            <div style={styles.startMenuItemTitle}>
                                                {s.shortcutName}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div style={styles.startMenuAllPrograms}>
                                    <div style={styles.startMenuAllProgramsText}>
                                        All Programs
                                    </div>
                                    <div style={styles.startMenuAllProgramsArrow} />
                                </div>
                            </div>

                            <div style={styles.startMenuRight}>
                                <div
                                    style={Object.assign(
                                        {},
                                        styles.startMenuItemRight,
                                        hoveredStartItem === 'right:instagram' &&
                                            styles.startMenuItemHover
                                    )}
                                    onMouseEnter={() =>
                                        setHoveredStartItem('right:instagram')
                                    }
                                    onMouseLeave={() => setHoveredStartItem(null)}
                                    onMouseDown={() =>
                                        onOpenExternal(
                                            'https://www.instagram.com/'
                                        )
                                    }
                                >
                                    <Icon
                                        style={styles.startMenuItemIconSmall}
                                        icon="contactInstagram"
                                    />
                                    <div style={styles.startMenuItemTitle}>Instagram</div>
                                </div>
                                <div
                                    style={Object.assign(
                                        {},
                                        styles.startMenuItemRight,
                                        hoveredStartItem === 'right:github' &&
                                            styles.startMenuItemHover
                                    )}
                                    onMouseEnter={() =>
                                        setHoveredStartItem('right:github')
                                    }
                                    onMouseLeave={() => setHoveredStartItem(null)}
                                    onMouseDown={() =>
                                        onOpenExternal('https://github.com/')
                                    }
                                >
                                    <Icon
                                        style={styles.startMenuItemIconSmall}
                                        icon="contactGithub"
                                    />
                                    <div style={styles.startMenuItemTitle}>Github</div>
                                </div>
                                <div
                                    style={Object.assign(
                                        {},
                                        styles.startMenuItemRight,
                                        hoveredStartItem === 'right:linkedin' &&
                                            styles.startMenuItemHover
                                    )}
                                    onMouseEnter={() =>
                                        setHoveredStartItem('right:linkedin')
                                    }
                                    onMouseLeave={() => setHoveredStartItem(null)}
                                    onMouseDown={() =>
                                        onOpenExternal(
                                            'https://www.linkedin.com/'
                                        )
                                    }
                                >
                                    <Icon
                                        style={styles.startMenuItemIconSmall}
                                        icon="contactLinkedin"
                                    />
                                    <div style={styles.startMenuItemTitle}>LinkedIn</div>
                                </div>

                                <div style={styles.startMenuRightDivider} />

                                <div
                                    style={Object.assign(
                                        {},
                                        styles.startMenuItemRight,
                                        hoveredStartItem === 'right:resume' &&
                                            styles.startMenuItemHover
                                    )}
                                    onMouseEnter={() =>
                                        setHoveredStartItem('right:resume')
                                    }
                                    onMouseLeave={() => setHoveredStartItem(null)}
                                    onMouseDown={onOpenResume}
                                >
                                    <Icon
                                        style={styles.startMenuItemIconSmall}
                                        icon="myResume"
                                    />
                                    <div style={styles.startMenuItemTitle}>My Resume</div>
                                </div>
                            </div>
                        </div>

                        <div style={styles.startMenuFooter}>
                            <button
                                type="button"
                                style={styles.startMenuFooterButton}
                                onMouseDown={() => {
                                    minimizeAll();
                                    setStartWindowOpen(false);
                                }}
                            >
                                <Icon
                                    icon="logoffButton"
                                    size={26}
                                    style={styles.startMenuFooterButtonIcon}
                                />
                                <span style={styles.startMenuFooterButtonText}>
                                    Log Off
                                </span>
                            </button>
                            <button
                                type="button"
                                style={styles.startMenuFooterButton}
                                onMouseDown={() => {
                                    setStartWindowOpen(false);
                                    shutdown();
                                }}
                            >
                                <Icon
                                    icon="shutdownButton"
                                    size={26}
                                    style={styles.startMenuFooterButtonIcon}
                                />
                                <span style={styles.startMenuFooterButtonText}>
                                    Shut Down
                                </span>
                            </button>
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
                            {!startLogoFailed ? (
                                <img
                                    src="/start-logo.png"
                                    alt="Start"
                                    style={styles.startLogo}
                                    onError={() => setStartLogoFailed(true)}
                                />
                            ) : (
                                <Icon
                                    size={18}
                                    icon="windowsStartIcon"
                                    style={styles.startIcon}
                                />
                            )}
                            {!isCompact && (
                                <span style={styles.startLabel}>Start</span>
                            )}
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
                                        isTablet && styles.tabContainerOuterTablet,
                                        isCompact && styles.tabContainerOuterCompact,
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
                <div
                    style={Object.assign(
                        {},
                        styles.time,
                        isCompact && styles.timeCompact
                    )}
                >
                    {!isCompact && (
                        <Icon style={styles.volumeIcon} icon="volumeOn" />
                    )}
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
    startMenuXp: {
        position: 'absolute',
        bottom: 30,
        display: 'flex',
        flex: 1,
        width: 380,
        height: 470,
        left: 0,
        boxSizing: 'border-box',
        border: `1px solid ${Colors.white}`,
        borderBottomColor: Colors.black,
        borderRightColor: Colors.black,
        background: '#dbeafe',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow:
            '0px 18px 38px rgba(0,0,0,0.35), inset 0px 0px 0px 1px rgba(0,0,0,0.18)',
    },
    startWindowCompact: {
        left: 0,
        right: 4,
        width: 'auto',
        height: 'min(470px, calc(100vh - 68px))',
        maxWidth: 'calc(100vw - 4px)',
    },
    startMenuXpInner: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        backgroundImage:
            'linear-gradient(180deg, rgba(243,244,246,1) 0%, rgba(229,231,235,1) 100%)',
    },
    startMenuHeader: {
        height: 64,
        paddingLeft: 12,
        paddingRight: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        backgroundImage:
            'linear-gradient(180deg, rgba(38,123,206,1) 0%, rgba(16,89,170,1) 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.35)',
        boxShadow:
            'inset 0px 1px 0px rgba(255,255,255,0.35), inset 0px -1px 0px rgba(0,0,0,0.20)',
    },
    startMenuAvatar: {
        width: 40,
        height: 40,
        borderRadius: 8,
        border: '2px solid rgba(255,255,255,0.80)',
        boxSizing: 'border-box',
        objectFit: 'cover',
        background: '#93c5fd',
        boxShadow:
            '0px 2px 6px rgba(0,0,0,0.25), inset 0px 1px 0px rgba(255,255,255,0.35)',
    },
    startMenuName: {
        fontFamily: 'Tahoma',
        fontSize: 18,
        fontWeight: 700,
        color: Colors.white,
        textShadow: '1px 1px 0px rgba(0,0,0,0.45)',
        userSelect: 'none',
    },
    startMenuColumns: {
        display: 'flex',
        flex: 1,
        padding: 0.5,
        gap: 1,
        background: 'transparent',
        boxSizing: 'border-box',
        minHeight: 0,
    },
    startMenuLeft: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        flex: 1,
        background: Colors.white,
        borderRadius: 10,
        border: '1px solid rgba(0,0,0,0.14)',
        padding: 10,
        boxSizing: 'border-box',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(0,0,0,0.35) transparent',
        boxShadow:
            '0px 2px 6px rgba(0,0,0,0.10), inset 0px 1px 0px rgba(255,255,255,0.70)',
    },
    startMenuRight: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 160,
        background: '#dbeafe',
        borderRadius: 10,
        border: '1px solid rgba(0,0,0,0.14)',
        padding: 10,
        boxSizing: 'border-box',
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(0,0,0,0.35) transparent',
        boxShadow:
            '0px 2px 6px rgba(0,0,0,0.10), inset 0px 1px 0px rgba(255,255,255,0.55)',
    },
    startMenuRightDivider: {
        height: 1,
        background: 'rgba(0,0,0,0.12)',
        marginTop: 10,
        marginBottom: 10,
    },
    startMenuItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 8px',
        borderRadius: 8,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        minHeight: 44,
        transition: 'background 120ms ease, outline 120ms ease',
    },
    startMenuItemRight: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 8px',
        borderRadius: 8,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',
        minHeight: 40,
        transition: 'background 120ms ease, outline 120ms ease',
    },
    startMenuItemHover: {
        backgroundImage:
            'linear-gradient(180deg, rgba(191,219,254,0.75) 0%, rgba(147,197,253,0.45) 100%)',
        outline: '1px solid rgba(37, 99, 235, 0.40)',
    },
    startMenuItemIcon: {
        width: 32,
        height: 32,
        flexShrink: 0,
    },
    startMenuItemIconSmall: {
        width: 22,
        height: 22,
        flexShrink: 0,
    },
    startMenuItemTextWrap: {
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    startMenuItemTitle: {
        fontFamily: 'Tahoma',
        fontSize: 14,
        fontWeight: 700,
        color: '#111827',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        userSelect: 'none',
        lineHeight: '18px',
    },
    startMenuAllPrograms: {
        marginTop: 'auto',
        paddingTop: 12,
        borderTop: '1px solid rgba(0,0,0,0.09)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 8,
        fontFamily: 'Tahoma',
        fontSize: 14,
        fontWeight: 700,
        userSelect: 'none',
        cursor: 'default',
    },
    startMenuAllProgramsText: {
        color: '#111827',
    },
    startMenuAllProgramsArrow: {
        width: 0,
        height: 0,
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent',
        borderLeft: '10px solid #16a34a',
    },
    startMenuFooter: {
        height: 40,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundImage:
            'linear-gradient(180deg, rgba(38,123,206,1) 0%, rgba(16,89,170,1) 100%)',
        borderTop: '1px solid rgba(0,0,0,0.22)',
        boxShadow:
            'inset 0px 1px 0px rgba(255,255,255,0.25), inset 0px -1px 0px rgba(0,0,0,0.25)',
    },
    startMenuFooterButton: {
        border: 'none',
        background: 'transparent',
        color: Colors.white,
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 6,
        padding: '0 6px',
        height: 28,
        width: 'auto',
        cursor: 'pointer',
        boxShadow: 'none',
    },
    startMenuFooterButtonIcon: {
        filter: 'drop-shadow(0px 1px 0px rgba(0,0,0,0.35))',
    },
    startMenuFooterButtonText: {
        fontFamily: 'Tahoma',
        fontSize: 12,
        fontWeight: 700,
        userSelect: 'none',
        color: Colors.white,
        textShadow: '1px 1px 0px rgba(0,0,0,0.35)',
    },
    activeTabOuter: {
        border: '1px solid rgba(12, 64, 150, 0.75)',
        borderBottomColor: 'rgba(255,255,255,0.6)',
        borderRightColor: 'rgba(255,255,255,0.6)',
        backgroundColor: '#2f6edc',
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
        flex: '0 0 auto',
        width: 220,
        maxWidth: 260,
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
    tabContainerOuterTablet: {
        width: 170,
        maxWidth: 200,
    },
    tabContainerOuterCompact: {
        width: 130,
        maxWidth: 160,
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
        width: 'clamp(56px, 18vw, 96px)',
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
        minWidth: 0,
        overflowX: 'auto',
        overflowY: 'hidden',
        flexWrap: 'nowrap',
    },
    startIcon: {
        marginRight: 0,
    },
    startLogo: {
        width: 18,
        height: 18,
        objectFit: 'contain',
        display: 'block',
    },
    toolbarInner: {
        borderTop: `1px solid ${Colors.white}`,
        alignItems: 'center',
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        minWidth: 0,
    },
    toolbar: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        minWidth: 0,
    },
    time: {
        flexShrink: 1,
        width: 'clamp(64px, 20vw, 92px)',
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
    timeCompact: {
        width: 'clamp(52px, 26vw, 84px)',
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'center',
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
