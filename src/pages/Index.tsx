import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

const Index = () => {
  const serverStats = {
    online: 1337,
    maxPlayers: 1488,
    uptime: "99.8%",
    clans: 1,
    version: "1.16-1.21.8"
  }

  const teamMembers = [
    { name: "Heek_Deep", role: "Главный администратор", avatar: "👑", status: "online" },
    { name: "narkodiller77748", role: "Модератор", avatar: "🛡️", status: "online" },
    { name: "Hef0r", role: "Помощник", avatar: "💎", status: "offline" },
    { name: "maksimNX", role: "Стример", avatar: "🎥", status: "online" }
  ]

  // Removed donate packages

  const news = [
    { title: "Фикс игровых механик", date: "26 авг", content: "Исправлены различные баги и улучшена стабильность сервера" }
  ]

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('https://cdn.poehali.dev/files/8d0cb4ad-817b-4d5e-ad3b-35c62270b2a1.jpg')`,
          filter: 'blur(1px)'
        }}
      ></div>
      <div className="relative z-10">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-sm border-b-4 border-minecraft-green sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-minecraft-green rounded border-2 border-white flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="text-white font-bold text-xl">AdvMine</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {["Главная", "Команда", "Статистика", "Новости"].map((item) => (
                <a key={item} href="#" className="text-white hover:text-minecraft-gold transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>

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
              ADV<span className="text-minecraft-gold">MINE</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Лучший сервер выживания с PvP и системой кланов. Стройте империи, сражайтесь за территории, становитесь легендой!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green/80 text-white border-2 border-white text-xl px-8 py-4 animate-pixel-glow">
                <Icon name="Play" className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-4" onClick={() => window.open('https://t.me/advmine', '_blank')}>
                <Icon name="Send" className="mr-2" />
                Телеграм группа
              </Button>
            </div>
            <div className="text-white/80">
              IP: <span className="font-mono bg-black/50 px-3 py-1 rounded">advmine.mc-join.org</span>
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
              { label: "Активный клан", value: serverStats.clans, icon: "Shield" },
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-minecraft-gold text-minecraft-gold hover:bg-minecraft-gold hover:text-black">
                        Читать далее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-minecraft-brown border-2 border-minecraft-gold max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-minecraft-gold text-2xl">Обновление 2.7 - Небольшое обновление на сервере</DialogTitle>
                      </DialogHeader>
                      <DialogDescription className="text-white space-y-2">
                        <div className="space-y-3 text-left">
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Изменена статистика игрока справа на экране</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Увеличен критический дамаг при ударе</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Пофикшена стрельба у скелетов</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Теперь езда на вагонетках стала еще быстрее!</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Снежки при попадании и камнерез теперь наносят урон</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Печки стали быстрее переплавлять на более выскоих уровнях</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Пофикшена награда при отгадывании вопросов в чат-игре, теперь награда в рубликах выдается игроку, отгадавший вопрос</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Увеличен радиус взрыва кроватей в незере и в энде</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>На лошадях теперь можно быстрее ездить и выше прыгать</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Пофикшена езда на счастливых гастах а также увеличена их скорость для путешествия</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Изменены сообщения о поднятии денег с мобов а также модель выпавших денег</p>
                          <p className="flex items-start"><span className="text-minecraft-gold mr-2">*</span>Теперь выпадение денег с игрока происходит при каждой его смерти, а не только при убийстве игроком</p>
                        </div>
                      </DialogDescription>
                    </DialogContent>
                  </Dialog>
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
              <h3 className="text-xl font-bold text-white mb-4">AdvMine</h3>
              <p className="text-white/80">Лучший сервер Minecraft с уникальными возможностями для выживания и PvP.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Сервер</h4>
              <ul className="space-y-2 text-white/80">
                <li>IP: advmine.mc-join.org</li>
                <li>Версия: 1.16-1.21.8</li>
                <li>Режим: Выживание + PvP</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Сообщество</h4>
              <div className="space-y-2">
                <a href="https://t.me/advmine" target="_blank" rel="noopener noreferrer" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="Send" className="mr-2 w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Поддержка</h4>
              <div className="space-y-2">
                <a href="mailto:support@advmine.ru" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="Mail" className="mr-2 w-4 h-4" />
                  support@advmine.ru
                </a>
                <a href="#" className="flex items-center text-white/80 hover:text-white">
                  <Icon name="HelpCircle" className="mr-2 w-4 h-4" />
                  Правила сервера
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-minecraft-green mt-8 pt-8 text-center">
            <p className="text-white/60">© 2025 AdvMine. Все права защищены.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Index