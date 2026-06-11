import { ArcadeRenderer } from 'pacman-contribution-graph';

// Replace [game-name] with a valid game name
const renderer = new ArcadeRenderer({
    game: 'galaga',
    username: 'FelipeAC22',
    platform: 'github', // or 'gitlab'
    gameTheme: 'github-dark', // 'github', 'github-dark', 'gitlab', or 'gitlab-dark'
    svgCallback: (svg) => {
        // called with the generated SVG string
        document.getElementById('output').innerHTML = svg;
    },
    gameOverCallback: () => {
        console.log('Game over!');
    },
    pointsIncreasedCallback: (points) => {
        console.log('Score:', points);
    }
});
renderer.start();