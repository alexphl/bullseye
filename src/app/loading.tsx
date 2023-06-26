export default function Loading(props: { className?: string }) {
  return (
    <div
      className={
        "flex h-screen w-full flex-auto flex-col place-content-center items-center justify-center" +
        props.className
      }
    >
      <div className="h-8 w-8 animate-bounce rounded-full bg-white/50" />
    </div>
  );
}
