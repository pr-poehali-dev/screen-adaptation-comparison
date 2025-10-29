import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Comparison {
  id: string;
  title: string;
  book: string;
  movie: string;
  year: string;
  genre: string;
  image: string;
  bookQuote: string;
  movieScene: string;
  analysis: string;
}

const comparisons: Comparison[] = [
  {
    id: 'idiot',
    title: 'Идиот',
    book: 'Идиот - Ф.М. Достоевский',
    movie: 'Идиот (2003)',
    year: '2003',
    genre: 'Психологическая драма',
    image: 'https://cdn.poehali.dev/projects/607b2874-1b58-40e6-be3b-43c0116b6628/files/71e3e60e-15b2-4cc2-8432-4a185be4a33d.jpg',
    bookQuote: '«Сострадание есть главнейший и, может быть, единственный закон бытия всего человечества»',
    movieScene: 'Режиссёр Владимир Бортко передал внутренние монологи князя Мышкина через долгие, задумчивые крупные планы и минималистичную музыку',
    analysis: 'Экранизация сохраняет философскую глубину романа, но сжимает сложные психологические портреты в визуальные образы. Длительность сериала позволила раскрыть многослойность персонажей Достоевского'
  },
  {
    id: 'fight-club',
    title: 'Бойцовский клуб',
    book: 'Бойцовский клуб - Чак Паланик',
    movie: 'Бойцовский клуб (1999)',
    year: '1999',
    genre: 'Психологический триллер',
    image: 'https://cdn.poehali.dev/projects/607b2874-1b58-40e6-be3b-43c0116b6628/files/d48721aa-e16e-44b3-805c-0a8d724c3f49.jpg',
    bookQuote: '«Только после того, как мы потеряем всё, мы обретаем свободу делать что угодно»',
    movieScene: 'Дэвид Финчер использовал нелинейный монтаж, сюрреалистические вставки и агрессивную цветокоррекцию для создания визуального хаоса',
    analysis: 'Фильм превзошёл книгу по культурному влиянию благодаря визуальному языку и актёрской игре. Финчер добавил киноязык постмодернизма к минималистичной прозе Паланика'
  },
  {
    id: 'cloud-atlas',
    title: 'Облачный атлас',
    book: 'Облачный атлас - Дэвид Митчелл',
    movie: 'Облачный атлас (2012)',
    year: '2012',
    genre: 'Научная фантастика',
    image: 'https://cdn.poehali.dev/projects/607b2874-1b58-40e6-be3b-43c0116b6628/files/1ecaebb3-a10b-45d9-9fc7-f1a496a8fc4b.jpg',
    bookQuote: '«Наши жизни не принадлежат нам. От утробы до могилы мы связаны с другими, прошлыми и настоящими»',
    movieScene: 'Вачовски создали визуальный калейдоскоп из шести эпох, переплетая сюжетные линии через параллельный монтаж и единых актёров в разных ролях',
    analysis: 'Амбициозная экранизация трансформировала структуру романа: вместо вложенных историй создала симфоническое повествование. Визуальная связь между эпохами усиливает тему реинкарнации'
  }
];

const Index = () => {
  const [selectedComparison, setSelectedComparison] = useState<string | null>(null);

  const selected = comparisons.find(c => c.id === selectedComparison);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">
              <Icon name="Film" className="inline-block mr-2 mb-1" size={28} />
              Страницы и Кадры
            </h1>
            <Button variant="outline" className="gap-2">
              <Icon name="BookOpen" size={18} />
              Все сравнения
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 px-4 py-1 text-sm">Литература × Кинематограф</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Где книга встречается с экраном
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Исследуйте, как великие литературные произведения оживают в кинематографе. 
              Сравнивайте цитаты, анализируйте визуальное повествование, открывайте новые грани знакомых историй.
            </p>
            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <Button size="lg" className="gap-2 px-8">
                <Icon name="Search" size={20} />
                Начать исследование
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8">
                <Icon name="Library" size={20} />
                Библиотека
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Избранные сравнения</h3>
              <p className="text-muted-foreground">Погрузитесь в мир литературных экранизаций</p>
            </div>
            <Button variant="ghost" className="gap-2 hidden md:flex">
              Все работы
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comparisons.map((comparison, index) => (
              <Card 
                key={comparison.id}
                className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedComparison(comparison.id)}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={comparison.image} 
                    alt={comparison.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-3">{comparison.genre}</Badge>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{comparison.title}</h4>
                    <p className="text-white/80 text-sm">{comparison.movie} • {comparison.year}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Quote" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm italic text-muted-foreground leading-relaxed">
                      {comparison.bookQuote}
                    </p>
                  </div>
                  <Button variant="ghost" className="w-full gap-2 group/btn">
                    Читать сравнение
                    <Icon name="ChevronRight" size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedComparison(null)}
        >
          <div className="container mx-auto px-4 py-8 md:py-16">
            <Button 
              variant="ghost" 
              size="icon"
              className="fixed top-4 right-4 bg-card hover:bg-card/80"
              onClick={() => setSelectedComparison(null)}
            >
              <Icon name="X" size={24} />
            </Button>
            
            <div 
              className="max-w-5xl mx-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="overflow-hidden border-border/50">
                <div className="relative aspect-[21/9] overflow-hidden">
                  <img 
                    src={selected.image} 
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <Badge className="mb-4">{selected.genre}</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{selected.title}</h2>
                    <p className="text-white/80 text-lg">{selected.book} → {selected.movie}</p>
                  </div>
                </div>

                <div className="p-8 md:p-12 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="BookOpen" size={24} className="text-primary" />
                        <h3 className="text-xl font-bold">Из книги</h3>
                      </div>
                      <div className="bg-muted/50 p-6 rounded-lg border border-border">
                        <p className="italic text-foreground leading-relaxed">
                          {selected.bookQuote}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon name="Film" size={24} className="text-secondary" />
                        <h3 className="text-xl font-bold">В фильме</h3>
                      </div>
                      <div className="bg-muted/50 p-6 rounded-lg border border-border">
                        <p className="text-foreground leading-relaxed">
                          {selected.movieScene}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="Lightbulb" size={24} className="text-accent" />
                      <h3 className="text-xl font-bold">Анализ</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {selected.analysis}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button className="flex-1 gap-2">
                      <Icon name="Heart" size={18} />
                      В избранное
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Icon name="Share2" size={18} />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-primary" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Откройте новые грани знакомых историй
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Каждая экранизация — это уникальная интерпретация литературного произведения. 
              Исследуйте, как режиссёры переосмысливают страницы книг в визуальное повествование.
            </p>
            <Button size="lg" className="gap-2 px-8">
              <Icon name="Play" size={20} />
              Смотреть введение
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Film" size={24} className="text-primary" />
              <span className="font-bold text-lg">Страницы и Кадры</span>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              Литературные экранизации глазами ценителей искусства
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
