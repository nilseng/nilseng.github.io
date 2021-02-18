export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const getRandomBlue = () => {
    var letters = '0123456789ABCDEF';
    var color = `#0000${letters[Math.floor(Math.random() * 16)]}${letters[Math.floor(Math.random() * 16)]}`;
    return color;
}