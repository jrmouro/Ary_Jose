const scene4 = {

    nextTime: 3000,

    mouse: {
        timeToRelease: 10,
        stiffness: .1,
        mask: 0b10,
        bind: undefined,
    },

    // shot: {

    //     amount: 3,
    //     timeToRelease: 10,
    //     stiffness: .001,
    //     bind: undefined

    // },

    position: {
        x: 18,
        y: 18
    },

    dimension: {
        w: 25,
        h: 25
    },

    spacing: {
        w: 15,
        h: 15
    },

    drawFunction: () => {
        background(45, 180, 145);
    },

    elements: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 1, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    sensor1: { //4

        dimension: 25,

        draw: {
            e1: {
                code: 0x1F525,
                rate: 1.2
            },
            e2: undefined
        },

        redraw: {
            e1: {
                code: 0x1F525,
                rate: .95
            },
            e2: {
                code: 0x1F480,
                rate: .95
            },
        },

        bodyOptions: {
            frictionAir: .03,
            isStatic: true,
            isSensor: true,
            label: '4',
            restitution: .8,
            collisionFilter: {
                category: 0b1
            }
        }

    },

    sensor2: { //5

        dimension: 25,

        draw: {
            e1: {
                code: 0x1F331,
                rate: 1
            },
            e2: undefined
        },

        redraw: {
            e1: {
                code: 0x1F525,
                rate: .95
            },
            e2: {
                code: 0x1F480,
                rate: .95
            },
        },

        bodyOptions: {
            frictionAir: .03,
            isStatic: true,
            isSensor: true,
            label: '5',
            restitution: .8,
            collisionFilter: {
                category: 0b1
            }
        }

    },

    building1: { //2

        dimension: 22,

        draw: {
            e1: {
                code: 0x1F333,
                rate: .95
            },
            e2: undefined
        },

        redraw: {
            e1: {
                code: 0x1F577,
                rate: .95
            },
            e2: {
                code: 0x1F480,
                rate: .95
            },
        },

        bodyOptions: {
            frictionAir: .03,
            isStatic: true,
            isSensor: false,
            label: '2',
            restitution: .8,
            collisionFilter: {
                category: 0b1
            }
        }

    },

    chase1: { //1

        dimension: 25,

        draw: {
            e1: {
                code: 0x1F997,
                rate: 1.3
            },
            e2: undefined
        },

        redraw: {
            e1: {
                code: 0x1F997,
                rate: 1.3
            },
            e2: {
                code: 0x1F578,
                rate: 1.5
            },
        },

        bodyOptions: {
            frictionAir: .03,
            isStatic: true,
            isSensor: true,
            label: '1',
            restitution: .008,
            collisionFilter: {
                category: 0b1
            }
        }

    },

    chase2: { //3

        dimension: 25,

        draw: {
            e1: {
                code: 0x1F31F,
                rate: .95
            },
            e2: {
                code: 0x2753,
                rate: .50
            },
        },

        redraw: {
            e1: {
                code: 0x1F577,
                rate: .95
            },
            e2: {
                code: 0x1F480,
                rate: .95
            },
        },

        bodyOptions: {
            frictionAir: .03,
            isStatic: true,
            isSensor: false,
            label: '3',
            restitution: .8,
            collisionFilter: {
                category: 0b1
            }
        }

    },

    bird1: { //-1

        dimension: 45,

        position: {
            x: 0,
            y: 0
        },

        draw: {
            e1: {
                code: 0x1F577,
                rate: .95
            },
            e2: undefined
        },

        redraw: {
            e1: {
                code: 0x1F577,
                rate: .95
            },
            e2: {
                code: 0x1F480,
                rate: .4
            },
        },

        bodyOptions: {
            frictionAir: .05,
            isStatic: false,
            isSensor: false,
            label: 'b',
            restitution: .003,
            collisionFilter: {
                category: 0b10
            }
        }

    },



    

    sling: {

        limit: 60,

        maxLength:30,
        velLength:0.05,

        timeToRelease: 10,
        timeToBing: 50,

        constraintOptions: {

            length: 0,

            stiffness: 0.13,

            pointA: {
                x: 0,
                y: 0
            },

            pointB: {
                x: 0,
                y: 0
            }

        },

        drawPointA: {

            radius: 25,

            e1: {
                code: 0x1F578,
                rate: 2
            },

            e2: undefined

        }

    },



}