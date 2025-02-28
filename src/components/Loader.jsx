const BlinkingLoader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#151312] z-50">
      <div className="w-10 h-10 bg-[#F46C38] rounded-full animate-ping"></div>
    </div>
  );
};

export default BlinkingLoader;
