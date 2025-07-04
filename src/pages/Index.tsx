import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-white to-gray-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-antique-gold/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-charcoal-black">
              <span className="font-serif">Александр</span>
              <span className="text-antique-gold ml-2">Мастер</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#works"
                className="text-charcoal-black hover:text-antique-gold transition-colors font-medium"
              >
                Работы
              </a>
              <a
                href="#exhibitions"
                className="text-charcoal-black hover:text-antique-gold transition-colors font-medium"
              >
                Выставки
              </a>
              <a
                href="#about"
                className="text-charcoal-black hover:text-antique-gold transition-colors font-medium"
              >
                Обо мне
              </a>
              <a
                href="#order"
                className="text-charcoal-black hover:text-antique-gold transition-colors font-medium"
              >
                Заказать
              </a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 bg-antique-gold/10 text-antique-gold border-antique-gold/30"
            >
              Художник • Скульптор • Дизайнер
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal-black mb-6">
              Искусство в камне
              <span className="block text-antique-gold">и на полотне</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаю уникальные произведения искусства для частных
              коллекционеров и галерей. Специализируюсь на памятниках и
              скульптурах на заказ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-antique-gold hover:bg-antique-gold/90 text-white"
              >
                <Icon name="Palette" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-white"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section id="works" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal-black mb-4">
              Избранные работы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждое произведение — это уникальная история, воплощенная в
              материале
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src="/img/dd88f33c-2aae-42d5-9feb-384aa2c27882.jpg"
                  alt="Портретная живопись"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-charcoal-black">
                  Портретная живопись
                </CardTitle>
                <CardDescription>
                  Масло на холсте, частная коллекция
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src="/img/a6c27686-15c3-46ea-9668-e302d111f46d.jpg"
                  alt="Скульптура"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-charcoal-black">
                  Скульптура
                </CardTitle>
                <CardDescription>
                  Мрамор, памятник в городском парке
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-none shadow-lg">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src="/img/d5fd6e0c-620f-4f1c-be25-4af41bcf5b9d.jpg"
                  alt="Дизайн интерьера"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-charcoal-black">
                  Дизайн интерьера
                </CardTitle>
                <CardDescription>
                  Авторская роспись, частная резиденция
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section
        id="exhibitions"
        className="py-20 px-6 bg-gradient-to-r from-warm-white to-gray-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal-black mb-4">
              Выставки
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Участие в престижных выставках и галереях
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-antique-gold/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-charcoal-black">
                      Галерея "Классика"
                    </CardTitle>
                    <CardDescription>
                      Персональная выставка скульптуры
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-antique-gold border-antique-gold/50"
                  >
                    2024
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-antique-gold/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-charcoal-black">
                      Московский музей современного искусства
                    </CardTitle>
                    <CardDescription>
                      Коллективная выставка "Традиции и новаторство"
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-antique-gold border-antique-gold/50"
                  >
                    2023
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-antique-gold/20">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-charcoal-black">
                      Центр "Винзавод"
                    </CardTitle>
                    <CardDescription>
                      Выставка молодых скульпторов России
                    </CardDescription>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-antique-gold border-antique-gold/50"
                  >
                    2022
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-black mb-6">
                Обо мне
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Более 15 лет посвящаю себя созданию произведений искусства,
                которые вдохновляют и остаются в памяти на века. Работаю с
                частными коллекционерами, галереями и музеями.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Специализируюсь на создании памятников и мемориальных скульптур,
                которые становятся частью городской среды и сохраняют память о
                важных событиях и людях.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className="bg-antique-gold/10 text-antique-gold"
                >
                  <Icon name="Award" size={16} className="mr-2" />
                  Член Союза художников
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-antique-gold/10 text-antique-gold"
                >
                  <Icon name="Users" size={16} className="mr-2" />
                  50+ частных заказов
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-antique-gold/10 text-antique-gold"
                >
                  <Icon name="Building" size={16} className="mr-2" />
                  20+ памятников
                </Badge>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
              <div className="h-full flex items-center justify-center">
                <Icon name="User" size={80} className="text-antique-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section
        id="order"
        className="py-20 px-6 bg-gradient-to-br from-charcoal-black to-gray-800 text-white"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Заказать работу
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Создам для вас уникальное произведение искусства, которое будет
              радовать долгие годы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-antique-gold">
                Что я создаю
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="Palette"
                    size={20}
                    className="text-antique-gold mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Портретная живопись</h4>
                    <p className="text-gray-300 text-sm">
                      Масло на холсте, акварель, графика
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Hammer"
                    size={20}
                    className="text-antique-gold mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Скульптура</h4>
                    <p className="text-gray-300 text-sm">
                      Мрамор, бронза, дерево
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Building"
                    size={20}
                    className="text-antique-gold mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Памятники</h4>
                    <p className="text-gray-300 text-sm">
                      Мемориальные комплексы, бюсты
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Home"
                    size={20}
                    className="text-antique-gold mt-1"
                  />
                  <div>
                    <h4 className="font-semibold">Дизайн интерьера</h4>
                    <p className="text-gray-300 text-sm">
                      Авторская роспись, декоративные элементы
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-antique-gold/20">
              <CardHeader>
                <CardTitle className="text-white">Свяжитесь со мной</CardTitle>
                <CardDescription className="text-gray-300">
                  Расскажите о своем проекте, и мы обсудим детали
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-antique-gold" />
                  <span className="text-white">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-antique-gold" />
                  <span className="text-white">master@artist.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-antique-gold" />
                  <span className="text-white">Москва, Арбат, 25</span>
                </div>
                <Separator className="bg-antique-gold/20" />
                <Button className="w-full bg-antique-gold hover:bg-antique-gold/90 text-white">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-charcoal-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Александр Мастер. Все права защищены.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-antique-gold hover:text-white"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-antique-gold hover:text-white"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-antique-gold hover:text-white"
              >
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
