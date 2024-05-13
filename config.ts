/// <reference types="./config.d.ts" />
import publicKey from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: true,
    maximizable: false,
    fullscreenable: true,
    title: 'Arsland Launcher',
};

export const api = {
    ws: 'ws://94.241.143.118:1370/ws',
    web: 'http://94.241.143.118:1370',
    publicKey,
};

export const appPath = '.arsland-launcher';

export const discordRPC = {
    appId: '1170138720276598886',
    firstLineText: 'Мир с индустриальной революции',
    secondLineText: 'Minecarft проект с Create',
    buttons: [
        {
            label: 'Discord',
            url: 'https://discord.gg/e3X5AbSfsj',
        },
    ],
    largeImageKey: 'big_icon',
    smallImageKey: 'small_icon',
    largeImageText: 'Arsland Launcher',
    smallImageText: 'Minecraft',
};
