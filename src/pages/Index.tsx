import Navbar from "../components/Navbar";
import CategoryNav from "../components/CategoryNav";
import ProductCard from "../components/ProductCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              Exclusive collection for everyone
            </h1>
            <p className="text-accent text-lg mb-8">
              In this season, find the best 🔥
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Explore now
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Hero"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-8 px-4">Browse Categories</h2>
          <CategoryNav />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-8 px-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            <ProductCard
              name="MacBook Pro"
              price="$1,299"
              image="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            />
            <ProductCard
              name="iPhone 13"
              price="$799"
              image="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
            />
            <ProductCard
              name="iPad Pro"
              price="$999"
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
            />
            <ProductCard
              name="AirPods Pro"
              price="$249"
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;