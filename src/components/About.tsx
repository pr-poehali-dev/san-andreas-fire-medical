import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const services = [
    {
      icon: "Flame",
      title: "Пожарная служба",
      description:
        "Тушение пожаров, спасательные операции, предотвращение чрезвычайных ситуаций",
    },
    {
      icon: "Heart",
      title: "Медицинская помощь",
      description:
        "Скорая медицинская помощь, транспортировка пациентов, первая помощь",
    },
    {
      icon: "Users",
      title: "Спасательные операции",
      description: "Поисково-спасательные работы, эвакуация, помощь в ЧС",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            О нашем департаменте
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы — команда профессионалов, посвятивших свою жизнь защите и
            спасению людей. Наш опыт и преданность делу — ваша гарантия
            безопасности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-red-100 rounded-full">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-red-600"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Наши достижения
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-red-600">500+</div>
                  <div className="text-gray-600">
                    Спасенных жизней в этом году
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-gray-600">Круглосуточная готовность</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-red-600">15 лет</div>
                  <div className="text-gray-600">
                    Опыта работы в San Andreas
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Icon
                name="Award"
                size={120}
                className="text-red-600 mx-auto mb-4"
              />
              <p className="text-gray-600 italic">
                "Профессионализм и преданность делу — основа нашей работы"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
