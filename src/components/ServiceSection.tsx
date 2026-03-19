import { Plus } from "lucide-react";
import { type DRINKS } from "../data/products";
import { useCart } from "../hooks/useCart";

type SERVICEITEMPROPS = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  timeCompleted?: string;
  onAdd?: () => void;
};

type SERVICESECTIONPROPS = {
  title: string;
  content?: SERVICEITEMPROPS[];
  image: string;
  isReverse?: boolean;
  drinks?: DRINKS;
};

function ServiceItem({ name, description, price, onAdd }: SERVICEITEMPROPS) {
  return (
    <div className="relative w-full">
      <h1 className="text-2xl font-semibold text-white">{name}</h1>
      <p className="text-lg text-[#B4AA9B]">{description}</p>
      <div className="w-full flex items-center justify-between">
        <span className="text-2xl font-semibold text-white">
          {price}
          <span className="text-sm">k</span>
        </span>
        <Plus
          size="32"
          className="cursor-pointer text-white hover:text-[#E5A030] transition-colors"
          onClick={onAdd}
        />
      </div>
    </div>
  );
}

function ServiceSection({
  title,
  content = [],
  image,
  isReverse,
  drinks,
}: SERVICESECTIONPROPS) {
  const { addToCart } = useCart();

  const handleAddService = (item: SERVICEITEMPROPS) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price * 1000, // price trong data là đơn vị k
      image: item.image || "/images/review-1.png",
      time: item.timeCompleted,
    });
  };

  const handleAddDrink = (d: { id: number; name: string; price: number }) => {
    addToCart({
      id: 1000 + d.id, // offset id để không trùng với service id
      name: d.name,
      price: d.price * 1000,
      image: "/images/drink.jpg",
    });
  };

  return (
    <div
      className={`w-full flex gap-[96px] items-stretch pt-[96px] ${isReverse ? "flex-row-reverse" : ""}`}
    >
      <div className="flex-1 relative min-h-[300px] overflow-hidden">
        <img
          src={image}
          alt="image-category"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[64px] text-[#E1C084] mb-4">{title}</h1>
        {/** menu */}
        <div className="flex flex-col gap-6">
          {!drinks
            ? content.map((item) => (
                <ServiceItem
                  key={item.id}
                  {...item}
                  onAdd={() => handleAddService(item)}
                />
              ))
            : drinks.map((d) => (
                <ServiceItem
                  key={d.id}
                  id={d.id}
                  name={d.name}
                  price={d.price}
                  description=""
                  onAdd={() => handleAddDrink(d)}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
