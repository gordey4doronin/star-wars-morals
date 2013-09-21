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
            period: null,
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
            period: null,
            episodes: []
        }
    ];

})(Application);