interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-primary">{name}</h3>
        <p className="text-accent mt-1">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;