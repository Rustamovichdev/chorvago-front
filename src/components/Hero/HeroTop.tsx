function HeroTop() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-green-300 px-3 py-1 text-[11px] font-bold uppercase text-green-900">
          <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
          Bugungi jonli bozor
        </span>

        <h1 className="mt-3 text-3xl font-bold text-white">
          O'zbekiston Chorvachilik va Uy Hayvonlari Savdosi
        </h1>

        <p className="mt-2 text-sm text-gray-100">
          To'g'ridan-to'g'ri dehqon va fermerlardan eng yaxshi zotdor
          jonivorlarni vositachisiz xarid qiling.
        </p>
     </div>
          

      <div className="rounded-xl border border-gray-200 bg-white px-5 py-3">
        <p className="text-xs text-gray-500">Jami faol e'lonlar</p>
        <p className="text-xl font-bold text-[#166534]">5,590+ dona</p>
      </div>
    </div>
  );
}

export default HeroTop;