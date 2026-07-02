export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[700px] rounded-full bg-orange-600/8 blur-[120px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-[35%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-amber-500/8 blur-[130px] animate-float-reverse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] max-w-[650px] rounded-full bg-orange-700/5 blur-[140px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />
    </div>
  );
}
