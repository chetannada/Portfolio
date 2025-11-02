import useWindowSize from "../hooks/useWindowSize";

const Logo = () => {
  const windowSize = useWindowSize();

  return (
    <>
      {windowSize.width > 640 ? (
        <h1
          className={`text-2xl max-2xs:text-xl max-3xs:text-base font-semibold tracking-widest`}
        >
          portfo
          <span className="text-secondary">lio.</span>
        </h1>
      ) : (
        <img
          src="/images/logo.png"
          alt="Portfolio Logo"
          className="h-10 w-10 object-contain"
        />
      )}
    </>
  );
};

export default Logo;
