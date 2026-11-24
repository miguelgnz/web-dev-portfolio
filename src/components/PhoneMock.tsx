import DemoVideo from "@/components/DemoVideo";
import { caseStudyData } from "@/utils/data";

// Phone frame around the real screen recording of the bot (demo data only).
export default function PhoneMock() {
  const { video } = caseStudyData;

  return (
    <figure className="flex flex-[1_1_300px] flex-col items-center gap-3">
      <div className="w-[300px] max-w-full overflow-hidden rounded-[44px] border-[10px] border-[#1f1f23] bg-[#0e1621]">
        <DemoVideo
          mp4={video.mp4}
          webm={video.webm}
          poster={video.poster}
          width={video.width}
          height={video.height}
          label={video.label}
        />
      </div>
      <figcaption className="font-mono text-xs text-muted">
        {video.caption}
      </figcaption>
    </figure>
  );
}
