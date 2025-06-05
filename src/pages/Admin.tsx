import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface Application {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  experience: string;
  education: string;
  motivation: string;
}

// Mock данные заявлений
const mockApplications: Application[] = [
  {
    id: "1",
    firstName: "Александр",
    lastName: "Петров",
    email: "petrov@example.com",
    phone: "+1-555-0101",
    position: "firefighter",
    status: "pending",
    submittedAt: "2024-01-15",
    experience: "5 лет работы в службе экстренного реагирования",
    education: "Высшее техническое образование, курсы пожарной безопасности",
    motivation: "Хочу помогать людям и защищать город от пожаров",
  },
  {
    id: "2",
    firstName: "Мария",
    lastName: "Иванова",
    email: "ivanova@example.com",
    phone: "+1-555-0102",
    position: "paramedic",
    status: "approved",
    submittedAt: "2024-01-10",
    experience: "3 года работы фельдшером в скорой помощи",
    education: "Медицинский колледж, сертификат парамедика",
    motivation: "Опыт работы в экстренной медицине, готова к новым вызовам",
  },
  {
    id: "3",
    firstName: "Сергей",
    lastName: "Козлов",
    email: "kozlov@example.com",
    phone: "+1-555-0103",
    position: "driver",
    status: "rejected",
    submittedAt: "2024-01-05",
    experience: "2 года водителем грузовика",
    education: "Среднее образование, права категории B, C",
    motivation: "Хочу водить пожарные машины",
  },
];

const positionNames = {
  firefighter: "Пожарный",
  paramedic: "Фельдшер",
  driver: "Водитель спецтранспорта",
  dispatcher: "Диспетчер",
  rescue: "Спасатель",
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [applications, setApplications] = useState(mockApplications);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Простая проверка (в реальном проекте нужна настоящая авторизация)
    if (
      credentials.username === "admin" &&
      credentials.password === "admin123"
    ) {
      setIsAuthenticated(true);
    } else {
      alert("Неверные данные для входа");
    }
  };

  const handleStatusChange = (
    applicationId: string,
    newStatus: Application["status"],
  ) => {
    setApplications((prev) =>
      prev.map((app) =>
        app.id === applicationId ? { ...app, status: newStatus } : app,
      ),
    );
  };

  const getStatusBadge = (status: Application["status"]) => {
    switch (status) {
      case "pending":
        return <Badge variant="secondary">Ожидает проверки</Badge>;
      case "approved":
        return <Badge className="bg-green-600">Одобрено</Badge>;
      case "rejected":
        return <Badge variant="destructive">Отклонено</Badge>;
    }
  };

  const filterApplications = (status: Application["status"]) => {
    return applications.filter((app) => app.status === status);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Вход в админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Имя пользователя</Label>
                <Input
                  id="username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                <Icon name="LogIn" size={20} />
                Войти
              </Button>
              <p className="text-sm text-gray-600 text-center">
                Демо: admin / admin123
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const ApplicationCard = ({ application }: { application: Application }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">
              {application.firstName} {application.lastName}
            </CardTitle>
            <p className="text-sm text-gray-600">
              {
                positionNames[
                  application.position as keyof typeof positionNames
                ]
              }
            </p>
          </div>
          {getStatusBadge(application.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Email:</strong> {application.email}
            </div>
            <div>
              <strong>Телефон:</strong> {application.phone}
            </div>
            <div>
              <strong>Подано:</strong>{" "}
              {new Date(application.submittedAt).toLocaleDateString("ru-RU")}
            </div>
          </div>

          <div>
            <strong>Опыт работы:</strong>
            <p className="text-sm text-gray-700 mt-1">
              {application.experience}
            </p>
          </div>

          <div>
            <strong>Образование:</strong>
            <p className="text-sm text-gray-700 mt-1">
              {application.education}
            </p>
          </div>

          <div>
            <strong>Мотивация:</strong>
            <p className="text-sm text-gray-700 mt-1">
              {application.motivation}
            </p>
          </div>

          {application.status === "pending" && (
            <div className="flex gap-2 pt-4">
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => handleStatusChange(application.id, "approved")}
              >
                <Icon name="Check" size={16} />
                Одобрить
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleStatusChange(application.id, "rejected")}
              >
                <Icon name="X" size={16} />
                Отклонить
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white hover:text-gray-200"
            >
              <Icon name="ArrowLeft" size={20} />
              На главную
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsAuthenticated(false)}
              className="text-white hover:bg-red-700"
            >
              <Icon name="LogOut" size={16} />
              Выйти
            </Button>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold mb-2">Админ-панель</h1>
            <p className="text-red-100">
              Управление заявлениями на трудоустройство
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending" className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              Ожидают проверки ({filterApplications("pending").length})
            </TabsTrigger>
            <TabsTrigger value="approved" className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} />
              Одобрены ({filterApplications("approved").length})
            </TabsTrigger>
            <TabsTrigger value="rejected" className="flex items-center gap-2">
              <Icon name="XCircle" size={16} />
              Отклонены ({filterApplications("rejected").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-6">
            <div className="space-y-4">
              {filterApplications("pending").length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-gray-500">
                    Нет заявлений, ожидающих проверки
                  </CardContent>
                </Card>
              ) : (
                filterApplications("pending").map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="approved" className="mt-6">
            <div className="space-y-4">
              {filterApplications("approved").length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-gray-500">
                    Нет одобренных заявлений
                  </CardContent>
                </Card>
              ) : (
                filterApplications("approved").map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="rejected" className="mt-6">
            <div className="space-y-4">
              {filterApplications("rejected").length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-gray-500">
                    Нет отклоненных заявлений
                  </CardContent>
                </Card>
              ) : (
                filterApplications("rejected").map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
