import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Instructions = () => {
  const steps = [
    {
      number: "1",
      title: "Заполните заявление",
      description:
        "Укажите ваши личные данные, контактную информацию и причину обращения",
      icon: "FileText",
    },
    {
      number: "2",
      title: "Приложите документы",
      description:
        "При необходимости приложите фотографии, справки или другие документы",
      icon: "Paperclip",
    },
    {
      number: "3",
      title: "Отправьте заявку",
      description: "Проверьте данные и отправьте заявление на рассмотрение",
      icon: "Send",
    },
    {
      number: "4",
      title: "Ожидайте ответа",
      description:
        "Мы рассмотрим вашу заявку в течение 24 часов и свяжемся с вами",
      icon: "Clock",
    },
  ];

  const requirements = [
    "Заявления принимаются только от совершеннолетних граждан",
    "Все поля формы должны быть заполнены корректно",
    "При подаче ложных сведений заявление будет отклонено",
    "Срок рассмотрения заявления — до 24 часов",
    "Уведомление о статусе придет на указанную почту",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как подать заявление
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следуйте простым шагам для подачи заявления в наш департамент
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="relative mx-auto mb-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center mb-4">
                  <Icon
                    name={step.icon as any}
                    size={24}
                    className="text-red-600"
                  />
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Icon name="AlertCircle" size={24} />
                Важные требования
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-600 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600 text-center">
                Готовы подать заявление?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                Нажмите на кнопку ниже, чтобы начать процесс подачи заявления
              </p>
              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => (window.location.href = "/application")}
              >
                <Icon name="FileText" size={20} />
                Подать заявление
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                Все данные защищены и используются только для обработки
                заявления
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Instructions;
