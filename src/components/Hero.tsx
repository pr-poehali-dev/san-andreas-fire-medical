import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <Icon name="Shield" size={80} className="text-white" />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          San Andreas Fire and Medical Department
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Профессиональная служба экстренного реагирования, обеспечивающая
          безопасность граждан San Andreas 24/7
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8"
            onClick={() => (window.location.href = "/application")}
          >
            <Icon name="FileText" size={20} />
            Подать заявление
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8"
          >
            <Icon name="Phone" size={20} />
            Экстренная связь
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
