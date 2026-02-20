tsParticles.load("particles-js", {
    background: {
        color: {
            value: "#0a0f1c"
        }
    },

    fpsLimit: 60,

    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                area: 800
            }
        },

        color: {
            value: ["#4f46e5", "#7c3aed"]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: { min: 1, max: 3 }
        },

        links: {
            enable: true,
            distance: 150,
            color: "#7c3aed",
            opacity: 0.6,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.5
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            }
        },

        modes: {
            repulse: {
                distance: 120
            },
            number: {
                value: 50
            }
        }
    }
});