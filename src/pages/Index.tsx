import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

const Index = () => {
  const serverStats = {
    online: 247,
    maxPlayers: 500,
    uptime: "99.8%",
    clans: 45,
    version: "1.20.1"
  }

  const teamMembers = [
    { name: "SteveAdmin", role: "Главный администратор", avatar: "👑", status: "online" },
    { name: "AlexModer", role: "Модератор", avatar: "🛡️", status: "online" },
    { name: "CreeperKill", role: "Помощник", avatar: "💎", status: "offline" },
    { name: "BuilderPro", role: "Строитель", avatar: "🔨", status: "online" }
  ]

  const donatePackages = [
    { name: "Стартер", price: 199, items: ["Алмазная броня", "64 золотых яблока", "Приват 10x10"], popular: false },
    { name: "Воин", price: 499, items: ["Незеритовая броня", "Алмазные инструменты", "Приват 20x20", "Возможность телепорта"], popular: true },
    { name: "Лорд", price: 999, items: ["Полный незеритовый сет", "Эксклюзивное оружие", "Приват 50x50", "Права модератора", "Личный слуга"], popular: false }
  ]

  const news = [
    { title: "Обновление PvP системы", date: "25 авг", content: "Добавлены новые комбо-атаки и балансировка урона" },
    { title: "Война кланов началась!", date: "20 авг", content: "Крупнейшее событие сервера - сражение за территории" },
    { title: "Новая локация: Подземелье", date: "15 авг", content: "Исследуйте опасные катакомбы с эксклюзивными наградами" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-brown to-minecraft-gray">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-sm border-b-4 border-minecraft-green sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-green rounded border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="text-white font-bold text-xl">CraftSurvival</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {["Главная", "Команда", "Статистика", "Донат", "Новости"].map((item) => (
                <a key={item} href="#" className="text-white hover:text-minecraft-gold transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-white border-2 border-white">
              Войти в игру
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/img/7c5c702e-3188-4362-81c0-c477603b49ef.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
              CRAFT<span className="text-minecraft-gold">SURVIVAL</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Лучший сервер выживания с PvP и системой кланов. Стройте империи, сражайтесь за территории, становитесь легендой!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green/80 text-white border-2 border-white text-xl px-8 py-4 animate-pixel-glow">
                <Icon name="Play" className="mr-2" />
                Начать играть
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black text-xl px-8 py-4">
                <Icon name="Users" className="mr-2" />
                Присоединиться к Discord
              </Button>
            </div>
            <div className="text-white/80">
              IP: <span className="font-mono bg-black/50 px-3 py-1 rounded">play.craftsurvival.ru</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: "Игроков онлайн", value: `${serverStats.online}/${serverStats.maxPlayers}`, icon: "Users" },
              { label: "Аптайм", value: serverStats.uptime, icon: "Activity" },
              { label: "Активных кланов", value: serverStats.clans, icon: "Shield" },
              { label: "Версия", value: serverStats.version, icon: "Settings" },
              { label: "Заполненность", value: `${Math.round((serverStats.online/serverStats.maxPlayers)*100)}%`, icon: "BarChart3" }
            ].map((stat, index) => (
              <Card key={index} className="bg-minecraft-brown/80 border-2 border-minecraft-gold text-center">
                <CardContent className="p-4">
                  <Icon name={stat.icon} className="w-8 h-8 mx-auto mb-2 text-minecraft-gold" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Команда сервера</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-minecraft-brown/80 border-2 border-minecraft-blue text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-minecraft-gold mb-3">{member.role}</p>
                  <Badge variant={member.status === 'online' ? 'default' : 'secondary'} 
                         className={member.status === 'online' ? 'bg-minecraft-green' : ''}>
                    {member.status === 'online' ? '🟢 Онлайн' : '⚫ Оффлайн'}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Донат пакеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {donatePackages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-4 border-minecraft-gold scale-105' : 'border-2 border-minecraft-blue'} bg-minecraft-brown/80`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-minecraft-gold text-black">
                    ⭐ Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-minecraft-gold">{pkg.price}₽</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-white">
                        <Icon name="Check" className="w-4 h-4 mr-2 text-minecraft-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/80 text-white">
                    <Icon name="ShoppingCart" className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Последние новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Card key={index} className="bg-minecraft-brown/80 border-2 border-minecraft-blue hover:border-minecraft-gold transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-minecraft-gold text-black">{article.date}</Badge>
                  </div>
                  <CardTitle className="text-xl text-white">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80 mb-4">{article.content}</CardDescription>
                  <Button variant="outline" className="border-minecraft-gold text-minecraft-gold hover:bg-minecraft-gold hover:text-black">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8 border-t-4 border-minecraft-green">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">CraftSurvival</h3>
              <p className="text-white/80">Лучший сервер Minecraft с уникальными возможностями для выживания и PvP.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Сервер</h4>
              <ul className="space-y-2 text-white/80">
                <li>IP: play.craftsurvival.ru</li>
                <li>Версия: 1.20.1</li>
                <li>Режим: Выживание + PvP</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Сообщество</h4>
              <div className="space-y-2">
                <a href="#" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="MessageSquare" className="mr-2 w-4 h-4" />
                  Discord
                </a>
                <a href="#" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="Send" className="mr-2 w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Поддержка</h4>
              <div className="space-y-2">
                <a href="#" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="Mail" className="mr-2 w-4 h-4" />
                  support@craftsurvival.ru
                </a>
                <a href="#" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="HelpCircle" className="mr-2 w-4 h-4" />
                  Правила сервера
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-minecraft-green mt-8 pt-8 text-center">
            <p className="text-white/60">© 2024 CraftSurvival. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index