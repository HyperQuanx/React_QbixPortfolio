import { useContext, useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaStop, FaStepBackward, FaStepForward, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { musicTracks, trackIndexAt } from "../../../data/musicTracks";
import { Side_Bar_Container, FontSwitch, QuickLinks, PlayerPanel, TrackDisplay, DiscIcon, PlayerControls, VolumeSlider, PlayerMessage } from "../../../assets/css/sections/side/Side_Bar.styles";

import { FontPreferenceContext, fontOptions } from "../../../contexts/FontPreferenceContext";

const audioUrl = import.meta.env.VITE_BGM_URL || "https://qbix-portfolio.shop/media/cyworld_bgm100.m4a";
const links = [
  ["Github", "https://github.com/HyperQuanx"],
  ["Resume", "https://qbix-resume.vercel.app/"],
  ["Tistory", "https://dreamroqkfwk.tistory.com/"],
  ["Velog", "https://velog.io/@hyper_quanx/posts"],
];

const Side_Bar = () => {
  const { font, setFont } = useContext(FontPreferenceContext);
  const audioRef = useRef(null);
  const pendingSeek = useRef(musicTracks[0].start);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(35);
  const [muted, setMuted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    return () => { audio.pause(); };
  }, []);

  const applySeek = () => {
    const audio = audioRef.current;
    if (pendingSeek.current !== null && audio.readyState >= 1) {
      audio.currentTime = pendingSeek.current;
      pendingSeek.current = null;
    }
  };

  const play = async () => {
    const audio = audioRef.current;
    setMessage("");
    audio.volume = volume / 100;
    audio.muted = muted;
    if (audio.error) audio.load();
    applySeek();
    try {
      await audio.play();
    } catch (error) {
      if (error.name !== "AbortError") {
        setMessage("음원을 재생하지 못했습니다. 재생 버튼으로 다시 시도해 주세요.");
      }
    }
  };

  const changeTrack = (index) => {
    if (index < 0 || index >= musicTracks.length) return;
    pendingSeek.current = musicTracks[index].start;
    setTrackIndex(index);
    play();
  };

  const stop = () => {
    audioRef.current.pause();
    pendingSeek.current = musicTracks[trackIndex].start;
    applySeek();
  };

  return (
    <Side_Bar_Container aria-label="음악 플레이어와 바로가기">
      <QuickLinks>
        {links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
      </QuickLinks>
      <PlayerPanel>
        <FontSwitch aria-label="사이트 전체 글꼴">
          {fontOptions.map((option) => (
            <label key={option.value}>
              <input type="radio" name="portfolio-font" value={option.value}
                checked={font === option.value} onChange={() => setFont(option.value)} />
              <span>{option.label}</span>
            </label>
          ))}
        </FontSwitch>
        <TrackDisplay title={musicTracks[trackIndex].title} aria-live="polite">
          <DiscIcon aria-hidden="true" />
          <span>{musicTracks[trackIndex].title}</span>
        </TrackDisplay>
        <PlayerControls>
          <button className="play" type="button" aria-label={playing ? "일시정지" : "재생"} onClick={() => playing ? audioRef.current.pause() : play()}>
            {playing ? <FaPause /> : <FaPlay />}
          </button>
          <button type="button" aria-label="정지" onClick={stop}><FaStop /></button>
          <button type="button" aria-label="이전 곡" disabled={trackIndex === 0} onClick={() => changeTrack(trackIndex - 1)}><FaStepBackward /></button>
          <button type="button" aria-label="다음 곡" disabled={trackIndex === musicTracks.length - 1} onClick={() => changeTrack(trackIndex + 1)}><FaStepForward /></button>
          <button type="button" aria-label={muted ? "음소거 해제" : "음소거"} onClick={() => { audioRef.current.muted = !muted; setMuted(!muted); }}>
            {muted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <VolumeSlider type="range" min="0" max="100" value={volume} $volume={muted ? 0 : volume} aria-label="볼륨" onChange={(event) => {
            const next = Number(event.target.value);
            setVolume(next);
            setMuted(false);
            audioRef.current.volume = next / 100;
            audioRef.current.muted = false;
          }} />
        </PlayerControls>
      </PlayerPanel>
      {message && <PlayerMessage role="status">{message}</PlayerMessage>}
      <audio ref={audioRef} src={audioUrl} preload="none"
        onLoadedMetadata={applySeek}
        onTimeUpdate={() => {
          if (pendingSeek.current === null) setTrackIndex(trackIndexAt(audioRef.current.currentTime));
        }}
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onError={() => { setPlaying(false); setMessage("음원을 불러오지 못했습니다. 잠시 후 다시 재생해 주세요."); }}
      />
    </Side_Bar_Container>
  );
};

export default Side_Bar;
