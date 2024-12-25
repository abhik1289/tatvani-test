const shops = [
  {
    name: "Shop 1",
    address: "123 Main St",
    image: "https://via.placeholder.com/150",
    description: "A great shop for all your needs.",
    mapLink: "https://goo.gl/maps/GreenLeafCafeLink"
  },
  {
    name: "Shop 2",
    address: "456 Elm St",
    image: "https://via.placeholder.com/150",
    description: "Another great shop nearby.",
    mapLink: "https://goo.gl/maps/GreenLeafCafeLink"
  }
];

const AdvertisementSection = () => {
  return (
    <div className='py-20'>
      <div className="text-center mb-12">
        <h2 className="sm:text-5xl text-4xl text-bold sm:font-extrabold text-[#3d3b3a] mb-4 tracking-widest uppercase">
          Advertisement
        </h2>
      </div>
      <div className="flex flex-col gap-8 max-w-5xl mx-auto p-6">
        {shops.map((shop, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center ...">
            <img src={shop.image} alt={shop.name} className="..." />
            <div className="p-6 flex flex-col justify-between w-full md:w-2/3 space-y-4">
              <h2 className="text-3xl text-[#3d3b3a] font-extrabold mb-2">{shop.name}</h2>
              <p className="text-lg text-[#3d3b3a] font-semibold">{shop.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementSection;