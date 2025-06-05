import Hero from "@/components/Hero";
import About from "@/components/About";
import Instructions from "@/components/Instructions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Instructions />
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link to="/application">Подать заявку</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/admin">
            <Icon name="Settings" className="mr-2 h-4 w-4" />
            Админ панель
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
