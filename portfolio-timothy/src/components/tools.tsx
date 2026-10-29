import { tools } from "@/data/tools";

export default function ToolsMarquee() {
  // The list is rendered twice so the CSS animation can loop seamlessly;
  // the copy is hidden from assistive tech.
  return (
    <div className="marquee overflow-hidden py-4">
      <ul className="marquee-track">
        {[false, true].map((isCopy) =>
          tools.map((tool) => (
            <li
              key={`${tool.name}-${isCopy}`}
              aria-hidden={isCopy || undefined}
              className="glass flex w-72 shrink-0 items-start gap-4 rounded-2xl p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-lilac-200/90 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.logo} alt="" className="size-7 object-contain" />
              </span>
              <span>
                <span className="block font-display font-semibold text-white">{tool.name}</span>
                <span className="mt-1 block text-sm leading-snug text-lilac-200/70">{tool.desc}</span>
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
