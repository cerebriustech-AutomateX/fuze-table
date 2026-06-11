export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] items-center justify-center bg-[#080809]"
      style={{ backgroundColor: "#080809", color: "#f2ebe0" }}
      aria-live="polite"
      aria-busy="true"
    >
      <p className="font-[family-name:var(--font-cormorant)] text-lg tracking-wide text-[#b8aea0]">
        Loading Fuze Table…
      </p>
    </div>
  );
}
