import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Application = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    position: "",
    experience: "",
    education: "",
    motivation: "",
    criminalRecord: false,
    medicalClearance: false,
    agreements: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    alert(
      "Заявление успешно отправлено! Мы свяжемся с вами в течение 24 часов.",
    );
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-gray-200 mb-4"
          >
            <Icon name="ArrowLeft" size={20} />
            Вернуться на главную
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">
              Анкета для трудоустройства
            </h1>
            <p className="text-red-100">
              San Andreas Fire and Medical Department
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-900">
              Заявление о приеме на работу
            </CardTitle>
            <p className="text-center text-gray-600">
              Заполните все поля формы для рассмотрения вашей кандидатуры
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Личная информация */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="User" size={20} className="text-red-600" />
                  Личная информация
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Электронная почта *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Дата рождения *</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) =>
                        handleInputChange("birthDate", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Label htmlFor="address">Адрес проживания *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              {/* Профессиональная информация */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Briefcase" size={20} className="text-red-600" />
                  Профессиональная информация
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="position">Желаемая должность *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("position", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите должность" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="firefighter">Пожарный</SelectItem>
                        <SelectItem value="paramedic">Фельдшер</SelectItem>
                        <SelectItem value="driver">
                          Водитель спецтранспорта
                        </SelectItem>
                        <SelectItem value="dispatcher">Диспетчер</SelectItem>
                        <SelectItem value="rescue">Спасатель</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experience">Опыт работы</Label>
                    <Textarea
                      id="experience"
                      placeholder="Опишите ваш опыт работы, особенно в сфере экстренных служб..."
                      value={formData.experience}
                      onChange={(e) =>
                        handleInputChange("experience", e.target.value)
                      }
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="education">Образование *</Label>
                    <Textarea
                      id="education"
                      placeholder="Укажите ваше образование, курсы, сертификаты..."
                      value={formData.education}
                      onChange={(e) =>
                        handleInputChange("education", e.target.value)
                      }
                      required
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="motivation">Мотивация *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Почему вы хотите работать в нашем департаменте?"
                      value={formData.motivation}
                      onChange={(e) =>
                        handleInputChange("motivation", e.target.value)
                      }
                      required
                      rows={4}
                    />
                  </div>
                </div>
              </div>

              {/* Подтверждения */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Icon name="Shield" size={20} className="text-red-600" />
                  Подтверждения
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="criminalRecord"
                      checked={formData.criminalRecord}
                      onCheckedChange={(checked) =>
                        handleInputChange("criminalRecord", !!checked)
                      }
                    />
                    <Label htmlFor="criminalRecord" className="text-sm">
                      Подтверждаю отсутствие судимости и согласен на проверку
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="medicalClearance"
                      checked={formData.medicalClearance}
                      onCheckedChange={(checked) =>
                        handleInputChange("medicalClearance", !!checked)
                      }
                    />
                    <Label htmlFor="medicalClearance" className="text-sm">
                      Согласен пройти медицинское освидетельствование
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreements"
                      checked={formData.agreements}
                      onCheckedChange={(checked) =>
                        handleInputChange("agreements", !!checked)
                      }
                      required
                    />
                    <Label htmlFor="agreements" className="text-sm">
                      Согласен с условиями обработки персональных данных *
                    </Label>
                  </div>
                </div>
              </div>

              {/* Кнопки */}
              <div className="flex gap-4 pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  disabled={!formData.agreements}
                >
                  <Icon name="Send" size={20} />
                  Отправить заявление
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => window.history.back()}
                >
                  Отмена
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Application;
