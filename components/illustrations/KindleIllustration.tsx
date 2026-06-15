/* ─── Mock Kindle pages ───────────────────────────────────────────────────────
   Replace each <KindlePage> children with <img src="/mock-N.png" alt="..." />
   when you have real screenshots ready.
────────────────────────────────────────────────────────────────────────────── */

function KindlePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 h-full overflow-hidden" style={{ width: "33.333%" }}>
      {children}
    </div>
  );
}

function MockPage1() {
  return (
    <div className="w-full h-full bg-[#FAF7F0] p-3 flex flex-col gap-2">
      <div className="text-[7px] font-bold text-ink/60 uppercase tracking-widest mb-0.5">
        Article
      </div>
      <div className="h-2.5 bg-ink/75 rounded-sm w-4/5" />
      <div className="h-1.5 bg-ink/30 rounded-sm w-3/5" />
      <div className="w-full h-16 rounded bg-parchment border border-border mt-1 flex items-center justify-center">
        {/* swap with: <img src="/mock-1.png" alt="Article hero image" className="w-full h-full object-cover rounded" /> */}
        <span className="text-[8px] text-ink-light/50">image</span>
      </div>
      <div className="flex flex-col gap-1 mt-1">
        {[100, 90, 95, 80, 92].map((w, i) => (
          <div key={i} className="h-1.5 bg-ink/25 rounded-sm" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="h-2 bg-ink/45 rounded-sm w-2/3 mt-1" />
      <div className="flex flex-col gap-1">
        {[88, 95, 70].map((w, i) => (
          <div key={i} className="h-1.5 bg-ink/20 rounded-sm" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function MockPage2() {
  return (
    <div className="w-full h-full bg-[#FAF7F0] p-3 flex flex-col gap-2">
      <div className="h-2 bg-ink/45 rounded-sm w-3/5 mt-1" />
      <div className="flex flex-col gap-1">
        {[92, 100, 85, 95, 78].map((w, i) => (
          <div key={i} className="h-1.5 bg-ink/22 rounded-sm" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="w-full h-20 rounded bg-parchment border border-border flex items-center justify-center mt-1">
        {/* swap with: <img src="/mock-2.png" alt="Article content image" className="w-full h-full object-cover rounded" /> */}
        <span className="text-[8px] text-ink-light/50">image</span>
      </div>
      <div className="text-[7px] text-ink/40 italic mt-0.5">Figure 1 — Example</div>
      <div className="flex flex-col gap-1 mt-0.5">
        {[95, 88, 100, 72].map((w, i) => (
          <div key={i} className="h-1.5 bg-ink/22 rounded-sm" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function MockPage3() {
  return (
    <div className="w-full h-full bg-[#FAF7F0] p-3 flex flex-col gap-2">
      <div className="h-2 bg-ink/45 rounded-sm w-4/5 mt-1" />
      <div className="flex flex-col gap-1">
        {[85, 96, 90].map((w, i) => (
          <div key={i} className="h-1.5 bg-ink/22 rounded-sm" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="bg-parchment rounded p-2 border border-border mt-1">
        {[70, 90, 55, 80].map((w, i) => (
          <div key={i} className="h-1.5 bg-sage/40 rounded-sm mb-1" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="h-2 bg-ink/45 rounded-sm w-1/2 mt-1" />
      <div className="flex flex-col gap-1">
        {[100, 88, 94, 76, 90].map((w, i) => (
          <div key={i} className="h-1.5 bg-ink/22 rounded-sm" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function KindleIllustration() {
  return (
    <div className="flex items-center justify-end gap-4 w-full select-none" aria-hidden="true">

      {/* Browser window */}
      <div className="w-44 flex-shrink-0 rounded-xl overflow-hidden border border-border shadow-sm bg-white">
        <div className="bg-parchment px-3 py-2 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-amber/60" />
          <div className="w-2 h-2 rounded-full bg-amber/35" />
          <div className="w-2 h-2 rounded-full bg-amber/20" />
          <div className="ml-2 flex-1 h-3 rounded bg-white/60" />
        </div>
        <div className="p-2.5 space-y-1.5 bg-white">
          <div className="h-4 bg-gray-100 rounded border border-dashed border-gray-200 flex items-center px-1.5">
            <div className="h-1.5 w-16 bg-gray-300 rounded" />
            <div className="ml-auto h-1.5 w-8 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-1.5">
            <div className="flex-1 space-y-1">
              <div className="h-2 bg-ink/65 rounded-sm w-4/5" />
              <div className="h-1.5 bg-gray-300 rounded-sm" />
              <div className="h-1.5 bg-gray-300 rounded-sm w-5/6" />
              <div className="h-1.5 bg-gray-300 rounded-sm w-4/5" />
            </div>
            <div className="w-10 bg-gray-100 rounded-sm flex-shrink-0" />
          </div>
          <div className="h-5 bg-amber/10 rounded border border-amber/20 flex items-center justify-center">
            <div className="h-1.5 w-16 bg-amber/30 rounded" />
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-gray-200 rounded-sm" />
            <div className="h-1.5 bg-gray-200 rounded-sm w-4/5" />
            <div className="h-1.5 bg-gray-200 rounded-sm w-5/6" />
          </div>
          <div className="h-4 bg-gray-100 rounded" />
          <div className="space-y-1">
            <div className="h-1.5 bg-gray-200 rounded-sm w-3/4" />
            <div className="h-1.5 bg-gray-200 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Arrow + EPUB label */}
      <div className="flex-shrink-0 flex flex-col items-center gap-1">
        <span className="text-[10px] font-bold text-amber tracking-wider">EPUB</span>
        <svg width="36" height="16" viewBox="0 0 36 16" fill="none" aria-hidden="true">
          <path d="M2 8h28" stroke="#C27B2C" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 2l8 6-8 6" stroke="#C27B2C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Kindle device */}
      <div className="w-36 flex-shrink-0 bg-ink rounded-2xl shadow-xl" style={{ padding: "10px 10px 14px" }}>
        <div className="rounded-lg overflow-hidden" style={{ height: "200px" }}>
          <div
            className="flex h-full"
            style={{ width: "300%", animation: "kindle-carousel 9s ease-in-out infinite" }}
          >
            <KindlePage><MockPage1 /></KindlePage>
            <KindlePage><MockPage2 /></KindlePage>
            <KindlePage><MockPage3 /></KindlePage>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full border-2 border-ink-light/25 mx-auto mt-2.5" />
      </div>

    </div>
  );
}
