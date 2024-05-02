import React, { useEffect, useId, useRef, useState } from "react";
import Section from "./Section";

interface TRange {
  start: number;
  end: number;
}
interface TCurrent extends TRange {
  index: number;
}

interface IRow {
  description?: string;
  range: TRange;
}

interface IVideoSection {
  rows: IRow[];
  url: string;
  children?: React.ReactElement;
}

const VideoSection: React.FC<IVideoSection> = ({ rows, url, children }) => {
  const $id = useId();
  const video = useRef<HTMLVideoElement>(null);
  const $video = video.current;
  const [current, setCurrent] = useState<TCurrent>({
    start: -1,
    end: -1,
    index: -1,
  });
  const [canplay, setCanplay] = useState<boolean>(false);
  const [seeked, setSeeked] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const onItemView = (t: TCurrent, n: boolean) => {
    if ($video && n && canplay) {
      if (t.index == 0) {
        $video.currentTime = 0;
      } else if (
        t.index != current.index &&
        (t.start < $video.currentTime || $video.paused)
      ) {
        $video.currentTime = t.start;
      }
      setCurrent(t);
    }
  };

  const onTimeupdate = () => {
    if ($video && (current.index == 0 || $video.currentTime > current.end)) {
      $video.pause();
    }
    if ($video) {
      setTime($video.currentTime);
    }
  };

  useEffect(() => {
    if (seeked && $video?.paused && current.index > 0) {
      $video?.play();
    } else {
      $video?.pause();
    }
  }, [seeked, $video]);

  return (
    <section className="relative z-10 overflow-clip">
      <div className="sticky top-4">
        <div className="absolute top-0 left-5 text-base font-bold text-white flex gap-4">
          <span className="p-3 rounded bg-emerald-500 leading-none">
            {current.index}
          </span>
          <span className="p-3 rounded bg-blue-500 leading-none">{time}</span>
        </div>
      </div>
      {rows.map((row, index) => (
        <Section
          className="section"
          key={`section-${index}-${$id}`}
          onView={(v) => onItemView({ ...row.range, index }, v)}
        >
          <div className="card">{row.description}</div>
        </Section>
      ))}
      {children && (
        <Section className="section" margin="0px">
          {children}
        </Section>
      )}
      <div className="sticky bottom-0 -z-10">
        <video
          ref={video}
          onTimeUpdate={onTimeupdate}
          onCanPlay={() => setCanplay(true)}
          onSeeked={() => setSeeked(true)}
          onSeeking={() => setSeeked(false)}
          className="w-screen h-screen object-cover absolute bottom-0"
          src={url}
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
};

export default VideoSection;
