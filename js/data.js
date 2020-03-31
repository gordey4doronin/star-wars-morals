(function (application) {
    var data = application.data = { };

    data.seasons = [
        {
            id: 1,
            premiere: '2008/10/03',
            finale: '2009/03/20',
            episodes: [
                {
                    id: 1,
                    productionId: '1.08',
                    order: 1,
                    title: {
                        eng: 'Ambush',
                        rus: 'Засада'
                    },
                    moral: {
                        eng: 'Great leaders inspire greatness in others.',
                        rus: 'Великие лидеры вдохновляют других на великие свершения.'
                    }
                },
                {
                    id: 2,
                    productionId: '1.07',
                    order: 2,
                    title: {
                        eng: 'Rising Malevolence',
                        rus: 'Наступление «Зловещего»'
                    },
                    moral: {
                        eng: 'Belief is not a matter of choice, but of conviction.',
                        rus: 'Веру выбирают, а не навязывают.'
                    }
                },
                {
                    id: 3,
                    productionId: '1.09',
                    order: 3,
                    title: {
                        eng: 'Shadow of Malevolence',
                        rus: 'Тень «Зловещего»'
                    },
                    moral: {
                        eng: 'Easy is the path to wisdom for those not blinded by themselves.',
                        rus: 'Легок путь к мудрости для тех, кто не ослеплен собой.'
                    }
                },
                {
                    id: 4,
                    productionId: '1.11',
                    order: 4,
                    title: {
                        eng: 'Destroy Malevolence',
                        rus: 'Гибель «Зловещего»'
                    },
                    moral: {
                        eng: 'A plan is only as good as those who see it through.',
                        rus: 'Удачен тот план, что продуман до конца.'
                    }
                },
                {
                    id: 5,
                    productionId: '1.14',
                    order: 5,
                    title: {
                        eng: 'Rookies',
                        rus: 'Салаги'
                    },
                    moral: {
                        eng: 'The best confidence builder is experience.',
                        rus: 'Уверенность приходит с опытом.'
                    }
                },
                {
                    id: 6,
                    productionId: '1.02',
                    order: 6,
                    title: {
                        eng: 'Downfall of a Droid',
                        rus: 'Утрата дройда'
                    },
                    moral: {
                        eng: 'Trust in your friends, and they\'ll have reason to trust in you.',
                        rus: 'Доверься другу и тогда друг доверится тебе.'
                    }
                },
                {
                    id: 7,
                    productionId: '1.06',
                    order: 7,
                    title: {
                        eng: 'Duel of the Droids',
                        rus: 'Дуэль дроидов'
                    },
                    moral: {
                        eng: 'You hold onto friends by keeping your heart a little softer than your head.',
                        rus: 'Держись друзей своих, чтобы сердце твое не стало холодным как разум.'
                    }
                },
                {
                    id: 8,
                    productionId: '1.05',
                    order: 8,
                    title: {
                        eng: 'Bombad Jedi',
                        rus: 'Джедая бомбад'
                    },
                    moral: {
                        eng: 'Heroes are made by the times.',
                        rus: 'Героев создает время.'
                    }
                },
                {
                    id: 9,
                    productionId: '1.10',
                    order: 9,
                    title: {
                        eng: 'Cloak of Darkness',
                        rus: 'Маска Тьмы'
                    },
                    moral: {
                        eng: 'Ignore your instincts at your peril.',
                        rus: 'Не бойся идти наперекор своим инстинктам.'
                    }
                },
                {
                    id: 10,
                    productionId: '1.12',
                    order: 10,
                    title: {
                        eng: 'Lair of Grievous',
                        rus: 'Логово Гривуса'
                    },
                    moral: {
                        eng: 'Most powerful is he who controls his own power.',
                        rus: 'Могущества достигает лишь тот, кто контролирует свою силу.'
                    }
                },
                {
                    id: 11,
                    productionId: '1.16',
                    order: 11,
                    title: {
                        eng: 'Dooku Captured',
                        rus: 'Дуку в плену'
                    },
                    moral: {
                        eng: 'The winding path to peace is always a worthy one, regardless of how many turns it takes.',
                        rus: 'Извилист путь к миру, но бесценен. Сколько бы препятствий к нему не было.'
                    }
                },
                {
                    id: 12,
                    productionId: '1.20',
                    order: 12,
                    title: {
                        eng: 'The Gungan General',
                        rus: 'Генерал Гунган'
                    },
                    moral: {
                        eng: 'Fail with honor rather than succeed by fraud.',
                        rus: 'Лучше проиграть с честью, чем преуспеть с помощью обмана.'
                    }
                },
                {
                    id: 13,
                    productionId: '1.22',
                    order: 13,
                    title: {
                        eng: 'Jedi Crash',
                        rus: 'Авария джедаев'
                    },
                    moral: {
                        eng: 'Greed and fear of loss are the roots that lead to the tree of evil.',
                        rus: 'Ничто так не питает зло как жадность и страх поражения.'
                    }
                },
                {
                    id: 14,
                    productionId: '1.24',
                    order: 14,
                    title: {
                        eng: 'Defenders of Peace',
                        rus: 'Хранители мира'
                    },
                    moral: {
                        eng: 'When surrounded by war, one must eventually choose a side.',
                        rus: 'Когда война пришла в твой дом, сохранять нейтралитет уже невозможно.'
                    }
                },
                {
                    id: 15,
                    productionId: '1.25',
                    order: 15,
                    title: {
                        eng: 'Trespass',
                        rus: 'Нарушители границы'
                    },
                    moral: {
                        eng: 'Arrogance diminishes wisdom.',
                        rus: 'Гордыня и мудрого к гибели приведет.'
                    }
                },
                {
                    id: 16,
                    productionId: '2.01',
                    order: 16,
                    title: {
                        eng: 'The Hidden Enemy',
                        rus: 'Скрытый враг'
                    },
                    moral: {
                        eng: 'Truth enlightens the mind, but won\'t always bring happiness to your heart.',
                        rus: 'Правда открывает глаза, но сердцу часто причиняет боль.'
                    }
                },
                {
                    id: 17,
                    productionId: '1.26',
                    order: 17,
                    title: {
                        eng: 'Blue Shadow Virus',
                        rus: 'Вирус «Синий призрак»'
                    },
                    moral: {
                        eng: 'Fear is a disease; hope is its only cure.',
                        rus: 'Страх — это болезнь, единственное лекарство от него — надежда.'
                    }
                },
                {
                    id: 18,
                    productionId: '2.02',
                    order: 18,
                    title: {
                        eng: 'Mystery of a Thousand Moons',
                        rus: 'Тайна тысячи лун'
                    },
                    moral: {
                        eng: 'A single chance is a galaxy of hope.',
                        rus: 'Случайность может спасти галактику.'
                    }
                },
                {
                    id: 19,
                    productionId: '1.15',
                    order: 19,
                    title: {
                        eng: 'Storm Over Ryloth',
                        rus: 'Сражение при Рилоте'
                    },
                    moral: {
                        eng: 'It is a rough road that leads to the heights of greatness.',
                        rus: 'Тяжек путь к величию.'
                    }
                },
                {
                    id: 20,
                    productionId: '1.17',
                    order: 20,
                    title: {
                        eng: 'Innocents of Ryloth',
                        rus: 'Невинные жертвы Рилота'
                    },
                    moral: {
                        eng: 'The costs of war can never be truly accounted for.',
                        rus: 'Невозможно исчислить цену войны.'
                    }
                },
                {
                    id: 21,
                    productionId: '1.19',
                    order: 21,
                    title: {
                        eng: 'Liberty on Ryloth',
                        rus: 'Освобождение Рилота'
                    },
                    moral: {
                        eng: 'Compromise is a virtue to be cultivated, not a weakness to be despised.',
                        rus: 'Компромисс — добродетель которую нужно возделывать, а не слабость, которую нужно презирать.'
                    }
                },
                {
                    id: 22,
                    productionId: '2.04',
                    order: 22,
                    title: {
                        eng: 'Hostage Crisis',
                        rus: 'Захват заложников'
                    },
                    moral: {
                        eng: 'A secret shared is a trust formed.',
                        rus: 'Общая тайна формирует доверие.'
                    }
                }
            ]
        },
        {
            id: 2,
            premiere: '2009/10/02',
            finale: '2010/04/30',
            episodes: [
                {
                    id: 23,
                    productionId: '1.23',
                    order: 1,
                    title: {
                        eng: 'Holocron Heist',
                        rus: 'Похищение Голокрона'
                    },
                    moral: {
                        eng: 'A lesson learned is a lesson earned.',
                        rus: 'На пользу идет лишь заслуженный урок.'
                    }
                },
                {
                    id: 24,
                    productionId: '1.13',
                    order: 2,
                    title: {
                        eng: 'Cargo of Doom',
                        rus: 'Корабль обречённых'
                    },
                    moral: {
                        eng: 'Overconfidence is the most dangerous form of carelessness.',
                        rus: 'Чрезмерная уверенность — самая опасная форма беспечности.'
                    }
                },
                {
                    id: 25,
                    productionId: '2.03',
                    order: 3,
                    title: {
                        eng: 'Children of the Force',
                        rus: 'Дети Силы'
                    },
                    moral: {
                        eng: 'The first step to correcting a mistake is patience.',
                        rus: 'Первый шаг на пути исправления — терпение.'
                    }
                },
                {
                    id: 26,
                    productionId: '2.05',
                    order: 4,
                    title: {
                        eng: 'Senate Spy',
                        rus: 'Шпион Сената'
                    },
                    moral: {
                        eng: 'A true heart should never be doubted.',
                        rus: 'Любящее сердце не знает сомнений.'
                    }
                },
                {
                    id: 27,
                    productionId: '2.07',
                    order: 5,
                    title: {
                        eng: 'Landing at Point Rain',
                        rus: 'Высадка в Пойнт Рэйн'
                    },
                    moral: {
                        eng: 'Believe in yourself or no one else will.',
                        rus: 'Поверь в себя и в тебя поверят другие.'
                    }
                },
                {
                    id: 28,
                    productionId: '2.08',
                    order: 6,
                    title: {
                        eng: 'Weapons Factory',
                        rus: 'Оружейная фабрика'
                    },
                    moral: {
                        eng: 'No gift is more precious than trust.',
                        rus: 'Самый лучший подарок — это доверие.'
                    }
                },
                {
                    id: 29,
                    productionId: '2.09',
                    order: 7,
                    title: {
                        eng: 'Legacy of Terror',
                        rus: 'Наследие террора'
                    },
                    moral: {
                        eng: 'Sometimes, accepting help is harder than offering it.',
                        rus: 'Иногда труднее принять помощь, чем предложить её.'
                    }
                },
                {
                    id: 30,
                    productionId: '2.12',
                    order: 8,
                    title: {
                        eng: 'Brain Invaders',
                        rus: 'Контроль Разума'
                    },
                    moral: {
                        eng: 'Attachment is not compassion.',
                        rus: 'Преданность не означает сочувствие.'
                    }
                },
                {
                    id: 31,
                    productionId: '2.14',
                    order: 9,
                    title: {
                        eng: 'Grievous Intrigue',
                        rus: 'Происки Гривуса'
                    },
                    moral: {
                        eng: 'For everything you gain, you lose something else.',
                        rus: 'В одном месте найдёшь, в другом потеряешь.'
                    }
                },
                {
                    id: 32,
                    productionId: '2.06',
                    order: 10,
                    title: {
                        eng: 'The Deserter',
                        rus: 'Дезертир'
                    },
                    moral: {
                        eng: 'It is the quest for honor that makes one honorable.',
                        rus: 'Мы удостаиваемся чести, только если ищем её.'
                    }
                },
                {
                    id: 33,
                    productionId: '2.11',
                    order: 11,
                    title: {
                        eng: 'Lightsaber Lost',
                        rus: 'Потерянный меч'
                    },
                    moral: {
                        eng: 'Easy isn\'t always simple.',
                        rus: 'Просто не значит легко.'
                    }
                },
                {
                    id: 34,
                    productionId: '2.13',
                    order: 12,
                    title: {
                        eng: 'The Mandalore Plot',
                        rus: 'Мандалорский заговор'
                    },
                    moral: {
                        eng: 'If you ignore the past, you jeopardize your future.',
                        rus: 'Отказываясь от прошлого, ты рискуешь будущим.'
                    }
                },
                {
                    id: 35,
                    productionId: '1.21',
                    order: 13,
                    title: {
                        eng: 'Voyage of Temptation',
                        rus: 'Вояж искушений'
                    },
                    moral: {
                        eng: 'Fear not for the future, weep not for the past.',
                        rus: 'Не страшись будущего, не оплакивай прошлое.'
                    }
                },
                {
                    id: 36,
                    productionId: '2.16',
                    order: 14,
                    title: {
                        eng: 'Duchess of Mandalore',
                        rus: 'Герцогиня Мандалора'
                    },
                    moral: {
                        eng: 'In war, truth is the first casualty.',
                        rus: 'На войне прежде всего страдает истина.'
                    }
                },
                {
                    id: 37,
                    productionId: '2.10',
                    order: 15,
                    title: {
                        eng: 'Senate Murders',
                        rus: 'Убийства в Сенате'
                    },
                    moral: {
                        eng: 'Searching for the truth is easy. Accepting the truth is hard.',
                        rus: 'Найти истину несложно. Смириться с ней намного труднее.'
                    }
                },
                {
                    id: 38,
                    productionId: '2.17',
                    order: 16,
                    title: {
                        eng: 'Cats and Mice',
                        rus: 'Кошки — мышки'
                    },
                    moral: {
                        eng: 'A wise leader knows when to follow.',
                        rus: 'Мудрый лидер знает, когда слушать других.'
                    }
                },
                {
                    id: 39,
                    productionId: '2.19',
                    order: 17,
                    title: {
                        eng: 'Bounty Hunters',
                        rus: 'Наёмники'
                    },
                    moral: {
                        eng: 'Courage makes heroes, but trust builds friendship.',
                        rus: 'Храбрость делает тебя героем, но только доверие порождает дружбу.'
                    }
                },
                {
                    id: 40,
                    productionId: '2.22',
                    order: 18,
                    title: {
                        eng: 'The Zillo Beast',
                        rus: 'Гад Зилло'
                    },
                    moral: {
                        eng: 'Choose what is right, not what is easy.',
                        rus: 'Выбери правильный путь, а не тот по которому легче идти.'
                    }
                },
                {
                    id: 41,
                    productionId: '2.23',
                    order: 19,
                    title: {
                        eng: 'The Zillo Beast Strikes Back',
                        rus: 'Зилло наносит ответный удар'
                    },
                    moral: {
                        eng: 'The most dangerous beast is the beast within.',
                        rus: 'Самый опасный зверь — это внутренний зверь.'
                    }
                },
                {
                    id: 42,
                    productionId: '2.15',
                    order: 20,
                    title: {
                        eng: 'Death Trap',
                        rus: 'Смертельная ловушка'
                    },
                    moral: {
                        eng: 'Who my father was matters less than my memory of him.',
                        rus: 'Мой отец имеет меньшее значение, чем мои воспоминания о нём.'
                    }
                },
                {
                    id: 43,
                    productionId: '2.18',
                    order: 21,
                    title: {
                        eng: 'R2 Come Home',
                        rus: 'Ар-Два, лети домой!'
                    },
                    moral: {
                        eng: 'Adversity is a friendship\'s truest test.',
                        rus: 'Друзья познаются в беде.'
                    }
                },
                {
                    id: 44,
                    productionId: '2.20',
                    order: 22,
                    title: {
                        eng: 'Lethal Trackdown',
                        rus: 'Смертельная погоня'
                    },
                    moral: {
                        eng: 'Revenge is a confession of pain.',
                        rus: 'Месть — признание боли.'
                    }
                }
            ]
        },
        {
            id: 3,
            premiere: '2010/09/17',
            finale: '2011/04/01',
            episodes: []
        },
        {
            id: 4,
            premiere: '2011/09/16',
            finale: '2012/03/16',
            episodes: [
                {
                    id: 67,
                    productionId: '3.22',
                    order: 1,
                    title: {
                        eng: 'Water War',
                        rus: 'Война в морских глубинах'
                    },
                    moral: {
                        eng: 'When destiny calls, the chosen have no choice.',
                        rus: 'Когда зовёт судьба, у избранных нет выбора.'
                    }
                },
                {
                    id: 68,
                    productionId: '3.23',
                    order: 2,
                    title: {
                        eng: 'Gungan Attack',
                        rus: 'Атака Гунганов'
                    },
                    moral: {
                        eng: 'Only through fire is a strong sword forged.',
                        rus: 'Только огнём закаляется сталь.'
                    }
                },
                {
                    id: 69,
                    productionId: '3.24',
                    order: 3,
                    title: {
                        eng: 'Prisoners',
                        rus: 'Пленники'
                    },
                    moral: {
                        eng: 'Crowns are inherited, kingdoms are earned.',
                        rus: 'Корона переходит по наследству, королевство надо заслужить.'
                    }
                },
                {
                    id: 70,
                    productionId: '3.19',
                    order: 4,
                    title: {
                        eng: 'Shadow Warrior',
                        rus: 'Тайный враг'
                    },
                    moral: {
                        eng: 'Who a person truly is cannot be seen with the eye.',
                        rus: 'За внешним обличием скрывается внутренняя суть.'
                    }
                },
                {
                    id: 71,
                    productionId: '3.20',
                    order: 5,
                    title: {
                        eng: 'Mercy Mission',
                        rus: 'Гуманитарная миссия'
                    },
                    moral: {
                        eng: 'Understanding is honoring the truth beneath the surface.',
                        rus: 'Стремление понять помогает обнаружить истину.'
                    }
                },
                {
                    id: 72,
                    productionId: '3.21',
                    order: 6,
                    title: {
                        eng: 'Nomad Droids',
                        rus: 'Дроиды-кочевники'
                    },
                    moral: {
                        eng: 'Who\'s the more foolish, the fool or the fool who follows him?',
                        rus: 'Кто глупее, дурак или тот кто его слушает?'
                    }
                },
                {
                    id: 73,
                    productionId: '3.25',
                    order: 7,
                    title: {
                        eng: 'Darkness on Umbara',
                        rus: 'Тьма на Умбаре'
                    },
                    moral: {
                        eng: 'The first step towards loyalty is trust.',
                        rus: 'Без доверия преданность не заслужить.'
                    }
                },
                {
                    id: 74,
                    productionId: '3.26',
                    order: 8,
                    title: {
                        eng: 'The General',
                        rus: 'Генерал'
                    },
                    moral: {
                        eng: 'The path of ignorance is guided by fear.',
                        rus: 'Тропу невежества прокладывает стах.'
                    }
                },
                {
                    id: 75,
                    productionId: '4.01',
                    order: 9,
                    title: {
                        eng: 'Plan of Dissent',
                        rus: 'План несогласных'
                    },
                    moral: {
                        eng: 'The wise man leads, the strong man follows.',
                        rus: 'Мудрый ведёт за собой сильного.'
                    }
                },
                {
                    id: 76,
                    productionId: '4.02',
                    order: 10,
                    title: {
                        eng: 'Carnage of Krell',
                        rus: 'Бойня генерала Крелла'
                    },
                    moral: {
                        eng: 'Our actions define our legacy.',
                        rus: 'Будущее зависит от наших поступков.'
                    }
                },
                {
                    id: 77,
                    productionId: '4.03',
                    order: 11,
                    title: {
                        eng: 'Kidnapped',
                        rus: 'Похищенные'
                    },
                    moral: {
                        eng: 'Where we are going always reflects where we came from.',
                        rus: 'Прошлое определяет наше будущее.'
                    }
                },
                {
                    id: 78,
                    productionId: '4.04',
                    order: 12,
                    title: {
                        eng: 'Slaves of the Republic',
                        rus: 'Рабы Республики'
                    },
                    moral: {
                        eng: 'Those who enslave others, inevitably become slaves themselves.',
                        rus: 'Тот кто порабощает сам становится рабом.'
                    }
                },
                {
                    id: 79,
                    productionId: '4.05',
                    order: 13,
                    title: {
                        eng: 'Escape from Kadavo',
                        rus: 'Побег с Кадаво'
                    },
                    moral: {
                        eng: 'Great hope can come from small sacrifices.',
                        rus: 'Благодаря самоотверженности сбываются надежды.'
                    }
                },
                {
                    id: 80,
                    productionId: '4.06',
                    order: 14,
                    title: {
                        eng: 'A Friend in Need',
                        rus: 'Друзья познаются в беде'
                    },
                    moral: {
                        eng: 'Friendship shows us who we really are.',
                        rus: 'Скажи мне кто твой друг и я скажу кто ты.'
                    }
                },
                {
                    id: 81,
                    productionId: '4.07',
                    order: 15,
                    title: {
                        eng: 'Deception',
                        rus: 'Обман'
                    },
                    moral: {
                        eng: 'All warfare is based on deception.',
                        rus: 'Война это путь обмана.'
                    }
                },
                {
                    id: 82,
                    productionId: '4.08',
                    order: 16,
                    title: {
                        eng: 'Friends and Enemies',
                        rus: 'Друзья и враги'
                    },
                    moral: {
                        eng: 'Keep your friends close, but keep your enemies closer.',
                        rus: 'Держи друзей близко, а врагов ещё ближе.'
                    }
                },
                {
                    id: 83,
                    productionId: '4.09',
                    order: 17,
                    title: {
                        eng: 'The Box',
                        rus: 'Куб'
                    },
                    moral: {
                        eng: 'The strong survive, the noble overcome.',
                        rus: 'Сильный выживает, благородный побеждает.'
                    }
                },
                {
                    id: 84,
                    productionId: '4.10',
                    order: 18,
                    title: {
                        eng: 'Crisis on Naboo',
                        rus: 'Кризис на Набу'
                    },
                    moral: {
                        eng: 'Trust is the greatest of gifts, but it must be earned.',
                        rus: 'Доверие есть ценный дар, но заслужить его необходимо.'
                    }
                },
                {
                    id: 85,
                    productionId: '4.11',
                    order: 19,
                    title: {
                        eng: 'Massacre',
                        rus: 'Резня'
                    },
                    moral: {
                        eng: 'One must let go of the past to hold on to the future.',
                        rus: 'Будешь цепляться за прошлое, потеряешь будущее.'
                    }
                },
                {
                    id: 86,
                    productionId: '4.12',
                    order: 20,
                    title: {
                        eng: 'Bounty',
                        rus: 'Награда'
                    },
                    moral: {
                        eng: 'Who we are never changes, who we think we are does.',
                        rus: 'Мы никогда не меняемся, меняются наши взгляды.'
                    }
                },
                {
                    id: 87,
                    productionId: '4.13',
                    order: 21,
                    title: {
                        eng: 'Brothers',
                        rus: 'Братья'
                    },
                    moral: {
                        eng: 'A fallen enemy may rise again, but the reconciled one is truly vanquished.',
                        rus: 'Побеждён не тот кто повержен, а тот кто смирился.'
                    }
                },
                {
                    id: 88,
                    productionId: '4.14',
                    order: 22,
                    title: {
                        eng: 'Revenge',
                        rus: 'Месть'
                    },
                    moral: {
                        eng: 'The enemy of my enemy is my friend.',
                        rus: 'Враг моего врага - мой друг.'
                    }
                }
            ]
        },
        {
            id: 5,
            premiere: '2012/09/29',
            finale: '2013/03/02',
            episodes: [
                {
                    id: 89,
                    productionId: '4.26',
                    order: 1,
                    title: {
                        eng: 'Revival',
                        rus: 'Возрождение'
                    },
                    moral: {
                        eng: 'Strength in character can defeat strength in numbers.',
                        rus: 'Сильный телом - победит одного, сильный духом - тысячи.'
                    }
                },
                {
                    id: 90,
                    productionId: '4.15',
                    order: 2,
                    title: {
                        eng: 'A War on Two Fronts',
                        rus: 'Война на два фронта'
                    },
                    moral: {
                        eng: 'Fear is a malleable weapon.',
                        rus: 'Страх можно превратить в оружие.'
                    }
                },
                {
                    id: 91,
                    productionId: '4.16',
                    order: 3,
                    title: {
                        eng: 'Front Runners',
                        rus: 'Претенденты'
                    },
                    moral: {
                        eng: 'To seek something is to believe in its possibility.',
                        rus: 'Добиваться чего-то - значит верить в вероятность этого.'
                    }
                },
                {
                    id: 92,
                    productionId: '4.17',
                    order: 4,
                    title: {
                        eng: 'The Soft War',
                        rus: 'Мягкая война'
                    },
                    moral: {
                        eng: 'Struggles often begin and end with the truth.',
                        rus: 'Правда - причина начала и конца многих войн.'
                    }
                },
                {
                    id: 93,
                    productionId: '4.18',
                    order: 5,
                    title: {
                        eng: 'Tipping Points',
                        rus: 'Переломный момент'
                    },
                    moral: {
                        eng: 'Disobedience is a demand for change.',
                        rus: 'Неповиновение - есть требование перемен.'
                    }
                },
                {
                    id: 94,
                    productionId: '4.22',
                    order: 6,
                    title: {
                        eng: 'The Gathering',
                        rus: 'Сборы'
                    },
                    moral: {
                        eng: 'He who faces himself, finds himself.',
                        rus: 'Обратившись лицом к себе, обретаешь себя.'
                    }
                },
                {
                    id: 95,
                    productionId: '4.23',
                    order: 7,
                    title: {
                        eng: 'A Test of Strength',
                        rus: 'Испытание силы'
                    },
                    moral: {
                        eng: 'The young are often underestimated.',
                        rus: 'Молодых часто недооценивают.'
                    }
                },
                {
                    id: 96,
                    productionId: '4.24',
                    order: 8,
                    title: {
                        eng: 'Bound for Rescue',
                        rus: 'На пути к спасению'
                    },
                    moral: {
                        eng: 'When we rescue others, we rescue ourselves.',
                        rus: 'Спасая других, мы спасаем себя.'
                    }
                },
                {
                    id: 97,
                    productionId: '4.25',
                    order: 9,
                    title: {
                        eng: 'A Necessary Bond',
                        rus: 'Вынужденный союз'
                    },
                    moral: {
                        eng: 'Choose your enemies wisely, as they may be your last hope.',
                        rus: 'Выбирай врагов с умом, они могут оказаться твоей последней надеждой.'
                    }
                },
                {
                    id: 98,
                    productionId: '5.04',
                    order: 10,
                    title: {
                        eng: 'Secret Weapons',
                        rus: 'Секретное оружие'
                    },
                    moral: {
                        eng: 'Humility is the only defense against humiliation.',
                        rus: 'Смирение - единственная защита от унижений.'
                    }
                },
                {
                    id: 99,
                    productionId: '5.05',
                    order: 11,
                    title: {
                        eng: 'A Sunny Day in the Void',
                        rus: 'Солнечный денёк в пустоте'
                    },
                    moral: {
                        eng: 'When all seems hopeless, a true hero gives hope.',
                        rus: 'Когда всё кажется безысходным, истинный герой дарит надежду.'
                    }
                },
                {
                    id: 100,
                    productionId: '5.06',
                    order: 12,
                    title: {
                        eng: 'Missing in Action',
                        rus: 'Пропавший без вести'
                    },
                    moral: {
                        eng: 'A soldier\'s most powerful weapon is courage.',
                        rus: 'Самое мощное оружие солдата - отвага.'
                    }
                },
                {
                    id: 101,
                    productionId: '5.07',
                    order: 13,
                    title: {
                        eng: 'Point of No Return',
                        rus: 'Точка невозврата'
                    },
                    moral: {
                        eng: 'You must trust in others or success is impossible.',
                        rus: 'Надо доверять другим, иначе успех невозможен.'
                    }
                },
                {
                    id: 102,
                    productionId: '5.01',
                    order: 14,
                    title: {
                        eng: 'Eminence',
                        rus: 'Путь к власти'
                    },
                    moral: {
                        eng: 'One vision can have many interpretations.',
                        rus: 'Один образ может иметь много интерпретаций.'
                    }
                },
                {
                    id: 103,
                    productionId: '5.02',
                    order: 15,
                    title: {
                        eng: 'Shades of Reason',
                        rus: 'Скрытые мотивы'
                    },
                    moral: {
                        eng: 'Alliances can stall true intentions.',
                        rus: 'Союзы способны отвлекать внимание от истинных намерений.'
                    }
                },
                {
                    id: 104,
                    productionId: '5.03',
                    order: 16,
                    title: {
                        eng: 'The Lawless',
                        rus: 'Беззаконный'
                    },
                    moral: {
                        eng: 'Morality separates heroes from villains.',
                        rus: 'Мораль отличает героев от злодеев.'
                    }
                },
                {
                    id: 105,
                    productionId: '5.08',
                    order: 17,
                    title: {
                        eng: 'Sabotage',
                        rus: 'Саботаж'
                    },
                    moral: {
                        eng: 'Sometimes even the smallest doubt can shake the greatest belief.',
                        rus: 'Порой даже малейшее сомнение способно подорвать великую веру.'
                    }
                },
                {
                    id: 106,
                    productionId: '5.09',
                    order: 18,
                    title: {
                        eng: 'The Jedi Who Knew Too Much',
                        rus: 'Джедай, который слишком много знал'
                    },
                    moral: {
                        eng: 'Courage begins by trusting oneself.',
                        rus: 'Отвага начинается с веры в себя.'
                    }
                },
                {
                    id: 107,
                    productionId: '5.10',
                    order: 19,
                    title: {
                        eng: 'To Catch a Jedi',
                        rus: 'Схватить джедая'
                    },
                    moral: {
                        eng: 'Never become desperate enough to trust the untrustworthy.',
                        rus: 'Никогда не отчаивайся до такой степени, чтобы доверять сомнительному.'
                    }
                },
                {
                    id: 108,
                    productionId: '5.11',
                    order: 20,
                    title: {
                        eng: 'The Wrong Jedi',
                        rus: 'Не тот джедай'
                    },
                    moral: {
                        eng: 'Never give up hope, no matter how dark things seem.',
                        rus: 'Никогда не теряй надежду, даже в самые мрачные моменты жизни.'
                    }
                }
            ]
        },
        {
            id: 6,
            premiere: '2014/02/15',
            finale: '2014/03/08',
            episodes: [
                {
                    id: 109,
                    productionId: '5.12',
                    order: 1,
                    title: {
                        eng: 'The Unknown',
                        rus: 'Неизвестность'
                    },
                    moral: {
                        eng: 'The truth about yourself is always the hardest to accept.',
                        rus: 'Самое трудное - признать правду о самом себе.'
                        //rus: 'Всегда трудно согласиться с правдой, которую говорят о тебе.'
                    }
                },
                {
                    id: 110,
                    productionId: '5.13',
                    order: 2,
                    title: {
                        eng: 'Conspiracy',
                        rus: 'Заговор'
                    },
                    moral: {
                        eng: 'The wise benefit from a second opinion.',
                        rus: 'Умный прислушивается к чужому мнению.'
                        //rus: 'Мудро - прислушиваться к каждому мнению.'
                    }
                },
                {
                    id: 111,
                    productionId: '5.14',
                    order: 3,
                    title: {
                        eng: 'Fugitive',
                        rus: 'Беглец'
                    },
                    moral: {
                        eng: 'When in doubt, go to the source.',
                        rus: 'Если сомневаешься, обратись к первоисточнику'
                        //rus: 'Когда ты в сомнении, ищи причину.'
                    }
                },
                {
                    id: 112,
                    productionId: '5.15',
                    order: 4,
                    title: {
                        eng: 'Orders',
                        rus: 'Приказы'
                    },
                    moral: {
                        eng: 'The popular belief isn\'t always the correct one.',
                        rus: 'Не стоит безоговорочно верить устоявшемуся мнению.'
                        //rus: 'Всеобщее мнение не всегда является верным.'
                    }
                },
                {
                    id: 113,
                    productionId: '4.19',
                    order: 5,
                    title: {
                        eng: 'An Old Friend',
                        rus: 'Старый друг'
                    },
                    moral: {
                        eng: 'To love, is to trust. To trust is to believe.',
                        rus: 'Чтобы любить нужно доверять. Чтобы доверять нужно верить.'
                        //rus: 'Любить значит доверять. Доверять значит верить.'
                    }
                },
                {
                    id: 114,
                    productionId: '4.20',
                    order: 6,
                    title: {
                        eng: 'The Rise of Clovis',
                        rus: 'Успех Кловиса'
                    },
                    moral: {
                        eng: 'Jealousy is the path to chaos.',
                        rus: 'Ревность ведёт к разрушению.'
                        //rus: 'Ревность - кратчайший путь к хаосу.'
                    }
                },
                {
                    id: 115,
                    productionId: '4.21',
                    order: 7,
                    title: {
                        eng: 'Crisis at the Heart',
                        rus: 'Душевный кризис'
                    },
                    moral: {
                        eng: 'Deceit is the weapon of greed.',
                        rus: 'Обман - оружие жадных.'
                        //rus: 'Самое алчное оружие это обман.'
                    }
                },
                {
                    id: 116,
                    productionId: '5.16',
                    order: 8,
                    title: {
                        eng: 'The Disappeared, Part I',
                        rus: 'Исчезнувшие. Часть 1'
                    },
                    moral: {
                        eng: 'Without darkness there cannot be light.',
                        rus: 'Не бывает тьмы без света.'
                        //rus: 'Без тьмы не может быть и света.'
                    }
                },
                {
                    id: 117,
                    productionId: '5.17',
                    order: 9,
                    title: {
                        eng: 'The Disappeared, Part II',
                        rus: 'Исчезнувшие. Часть 2'
                    },
                    moral: {
                        eng: 'Wisdom is born in fools as well as wise men.',
                        rus: 'И глупец способен на мудрость.'
                        //rus: 'Высшая мудрость - это познание самого себя.'
                    }
                },
                {
                    id: 118,
                    productionId: '5.18',
                    order: 10,
                    title: {
                        eng: 'The Lost One',
                        rus: 'Пропавший без вести'
                    },
                    moral: {
                        eng: 'What is lost is often found.',
                        rus: 'Однажды пропавшие часто находятся.'
                        //rus: 'То что пропало, рано или поздно найдется.'
                    }
                },
                {
                    id: 119,
                    productionId: '5.19',
                    order: 11,
                    title: {
                        eng: 'Voices',
                        rus: 'Голоса'
                    },
                    moral: {
                        eng: 'Madness can sometimes be the path to truth.',
                        rus: 'За ошибкой безумия кроется истина, прокладывающая себе путь.'
                        //rus: 'Безумие - это первый шаг к истине.'
                    }
                },
                {
                    id: 120,
                    productionId: '5.20',
                    order: 12,
                    title: {
                        eng: 'Destiny',
                        rus: 'Судьба'
                    },
                    moral: {
                        eng: 'Death is just the beginning.',
                        rus: 'Смерть - всего лишь начало.'
                        //rus: 'Смерть - это только начало.'
                    }
                },
                {
                    id: 121,
                    productionId: '5.21',
                    order: 13,
                    title: {
                        eng: 'Sacrifice',
                        rus: 'Жертва'
                    },
                    moral: {
                        eng: 'Facing all that you fear will free you from yourself.',
                        rus: 'Только поборов свои страхи можно обрести свободу.'
                        //rus: 'Столкнувшись с тем, чего ты боишься, будешь бояться самого себя.'
                    }
                }
            ]
        }
    ];

    // NodeJS
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = data;
    }

})(typeof Application !== 'undefined' ? Application : {});
