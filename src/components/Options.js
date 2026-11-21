"use client";

import { SCENES, ASPECTS, RESOLUTIONS } from "@/lib/app.config";
import { useLang } from "@/lib/i18n";

export default function Options({ state, set, Chips }) {
  const { t, tx, lang } = useLang();
  return (
    <>
      <div className="space-y-2">
        <div className="text-sm font-semibold text-primary-text">{lang === "ru" ? "Сцена" : "Scene"}</div>
        <div className="grid grid-cols-2 gap-2">
          {SCENES.map((s) => (
            <button key={s.id} type="button" onClick={() => set({ scene: s.id })} aria-pressed={state.scene === s.id}
              className={`text-left rounded-xl border px-3 py-2 text-xs font-semibold transition-colors ${state.scene === s.id
                ? "border-primary-500 bg-primary-500/15 text-primary-text" : "border-glass-border bg-bg-elevated text-secondary-text hover:text-primary-text"}`}>
              {tx(s.label)}
            </button>
          ))}
        </div>
      </div>
      <Chips label={t("aspect")} options={ASPECTS} value={state.aspect} onChange={(v) => set({ aspect: v })} />
      <Chips label={t("resolution")} options={RESOLUTIONS} value={state.resolution} onChange={(v) => set({ resolution: v })} render={(v) => v.toUpperCase()} />
      <div className="space-y-2">
        <label htmlFor="note" className="text-sm font-semibold text-primary-text">{lang === "ru" ? "Своё описание сцены (необязательно)" : "Your own scene (optional)"}</label>
        <textarea id="note" rows={3} value={state.note} maxLength={400} onChange={(e) => set({ note: e.target.value })}
          placeholder={lang === "ru" ? "например: на льду, вокруг капли воды, голубой свет" : "e.g. on ice with water drops, cool blue light"}
          className="w-full rounded-xl bg-bg-elevated border border-glass-border px-3 py-2.5 text-sm text-primary-text placeholder:text-secondary-text/70 focus:outline-none focus:ring-1 focus:ring-primary-500 resize-none" />
      </div>
    </>
  );
}
