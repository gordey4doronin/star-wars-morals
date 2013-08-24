(function () {
    var data = window.data = { };

    data.seasons = [
        {
            id: 1,
            period: null,
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
            period: null,
            episodes: []
        },
        {
            id: 3,
            period: null,
            episodes: []
        },
        {
            id: 4,
            period: null,
            episodes: []
        },
        {
            id: 5,
            period: null,
            episodes: []
        }
    ];

})();