export function Cursor(): JSX.Element {
  return (
    <>
      <div className="cursor rounded relative z-10 w-7 h-7 border-solid border-2 border-white"></div>
      <div className="cursor pointed relative z-10"></div>
    </>
  );
}
